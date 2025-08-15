import { PortableText } from '@portabletext/react'
import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import { getImageDimensions } from '@sanity/asset-utils'

interface BlockContentProps {
  value: any
}

// Custom components for different block types
const components = {
  types: {
    image: ({ value }: { value: any }) => {
      const { width, height } = getImageDimensions(value)
      const imageUrl = urlFor(value).url()
      
      return (
        <div className={`my-8 ${getWidthClass(value.width)}`}>
          <div className="relative">
            <Image
              src={imageUrl}
              alt={value.alt || 'Image'}
              width={width}
              height={height}
              className="rounded-lg"
            />
            {value.caption && (
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                {value.caption}
              </p>
            )}
          </div>
        </div>
      )
    },
    video: ({ value }: { value: any }) => {
      const videoUrl = value.asset?.url
      if (!videoUrl) return null
      
      return (
        <div className="my-8" style={{ maxWidth: `${(value.width || 1) * 100}%`, margin: '0 auto' }}>
          <div className={`relative ${value.hasBorder ? 'border border-gray-300 rounded-lg p-4' : ''}`}>
            <video
              src={videoUrl}
              controls={value.showControls}
              className="w-full rounded-lg"
            />
            {value.caption && (
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                {value.caption}
              </p>
            )}
          </div>
        </div>
      )
    },
    vimeoEmbed: ({ value }: { value: any }) => {
      const videoId = extractVimeoId(value.url)
      if (!videoId) return <p>Invalid Vimeo URL</p>
      
      return (
        <div className="my-8" style={{ maxWidth: `${(value.width || 1) * 100}%`, margin: '0 auto' }}>
          <div className={`relative ${value.hasBorder ? 'border border-gray-300 rounded-lg p-4' : ''}`}>
            <div className="relative pb-[56.25%]">
              <iframe
                src={`https://player.vimeo.com/video/${videoId}`}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
            {value.caption && (
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                {value.caption}
              </p>
            )}
          </div>
        </div>
      )
    },
    youtubeEmbed: ({ value }: { value: any }) => {
      const videoId = extractYouTubeId(value.url)
      if (!videoId) return <p>Invalid YouTube URL</p>
      
      return (
        <div className="my-8" style={{ maxWidth: `${(value.width || 1) * 100}%`, margin: '0 auto' }}>
          <div className={`relative ${value.hasBorder ? 'border border-gray-300 rounded-lg p-4' : ''}`}>
            <div className="relative pb-[56.25%]">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            {value.caption && (
              <p className="text-sm text-gray-600 mt-2 text-center italic">
                {value.caption}
              </p>
            )}
          </div>
        </div>
      )
    },

    instagramEmbed: ({ value }: { value: any }) => {
      return (
        <div className="my-8">
          <div className="flex justify-center">
            <iframe
              src={`https://www.instagram.com/p/${extractInstagramId(value.url)}/embed/`}
              width="400"
              height="480"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              className="rounded-lg"
            />
          </div>
          {value.caption && (
            <p className="text-sm text-gray-600 mt-2 text-center italic">
              {value.caption}
            </p>
          )}
        </div>
      )
    },
    twitterEmbed: ({ value }: { value: any }) => {
      return (
        <div className="my-8">
          <div className="flex justify-center">
            <blockquote
              className="twitter-tweet"
              data-theme="light"
            >
              <a href={value.url}></a>
            </blockquote>
          </div>
        </div>
      )
    },
    divider: () => (
      <hr className="my-8 border-gray-300" />
    ),
    callout: ({ value }: { value: any }) => {
      const getCalloutStyles = (type: string) => {
        switch (type) {
          case 'warning':
            return 'bg-yellow-50 border-yellow-200 text-yellow-800'
          case 'success':
            return 'bg-green-50 border-green-200 text-green-800'
          case 'error':
            return 'bg-red-50 border-red-200 text-red-800'
          default:
            return 'bg-blue-50 border-blue-200 text-blue-800'
        }
      }
      
      return (
        <div className={`my-8 p-4 border-l-4 rounded-r-lg ${getCalloutStyles(value.type)}`}>
          <div className="flex items-start">
            {value.icon && (
              <div className="flex-shrink-0 mr-3">
                <span className="text-lg">{value.icon}</span>
              </div>
            )}
            <div className="flex-1">
              <PortableText value={value.content} />
            </div>
          </div>
        </div>
      )
    },
    iframeEmbed: ({ value }: { value: any }) => {
      const aspectRatio = value.aspectRatio === 'mobile' ? 'pb-[177.78%]' : 'pb-[56.25%]'
      
      return (
        <div className="my-8" style={{ maxWidth: `${(value.width || 1) * 100}%`, margin: '0 auto' }}>
          <div className={`relative ${value.hasBorder ? 'border border-gray-300 rounded-lg p-4' : ''}`}>
            <div className={`relative ${aspectRatio}`}>
              <iframe
                src={value.url}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                frameBorder="0"
                style={{
                  transform: `scale(${value.zoom})`,
                  transformOrigin: 'top left',
                  width: `${100 / value.zoom}%`,
                  height: `${100 / value.zoom}%`,
                }}
              />
            </div>
          </div>
        </div>
      )
    },
  },
}

// Helper functions
function getWidthClass(width: string) {
  switch (width) {
    case 'large':
      return 'max-w-4xl mx-auto'
    case 'medium':
      return 'max-w-2xl mx-auto'
    case 'small':
      return 'max-w-lg mx-auto'
    default:
      return 'w-full'
  }
}

function getVideoWidthClass(width: number) {
  if (width === 1) return 'w-full'
  return `max-w-${Math.round(width * 100)} mx-auto`
}

function extractVimeoId(url: string) {
  const match = url.match(/vimeo\.com\/(\d+)/)
  return match ? match[1] : null
}

function extractYouTubeId(url: string) {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
  return match ? match[1] : null
}



function extractInstagramId(url: string) {
  const match = url.match(/instagram\.com\/p\/([a-zA-Z0-9_-]+)/)
  return match ? match[1] : null
}

export default function BlockContent({ value }: BlockContentProps) {
  return <PortableText value={value} components={components} />
} 