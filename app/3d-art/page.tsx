// app/3d-art/page.tsx
"use client";

import { SwiperGallery } from "../components";
import { Header,Layout } from '../components';


export default function ThreeDArtPage() {

  // Gallery items with varying dimensions (images and videos)
  const galleryItems = [
    {
      id: "1",
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "3D Abstract Sculpture",
      caption: "Fluid Dynamics",
      category: "Sculpture",
      width: 800,
      height: 600
    },
    {
      id: "2",
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "Digital Architecture",
      caption: "Urban Geometry",
      category: "Architecture",
      width: 600,
      height: 800
    },
    {
      id: "3",
      type: "video" as const,
      src: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      alt: "3D Animation Demo",
      caption: "Light & Motion",
      category: "Animation",
      width: 800,
      height: 400,
      videoId: "dQw4w9WgXcQ",
      platform: "youtube" as const
    },
    {
      id: "4",
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "3D Character Design",
      caption: "Digital Portraits",
      category: "Character",
      width: 400,
      height: 600
    },
    {
      id: "5",
      type: "video" as const,
      src: "https://vimeo.com/148751763",
      alt: "3D Motion Graphics",
      caption: "Organic Forms",
      category: "Motion",
      width: 600,
      height: 600,
      videoId: "148751763",
      platform: "vimeo" as const
    },
    {
      id: "6",
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "3D Environment",
      caption: "Virtual Landscapes",
      category: "Environment",
      width: 800,
      height: 500
    },
    {
      id: "7",
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80",
      alt: "Product Visualization",
      caption: "Industrial Design",
      category: "Product",
      width: 700,
      height: 400
    },
    {
      id: "8",
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      alt: "3D Animation",
      caption: "Motion Graphics",
      category: "Animation",
      width: 500,
      height: 700
    },
    {
      id: "9",
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
      alt: "Concept Art",
      caption: "Visual Storytelling",
      category: "Concept",
      width: 900,
      height: 600
    },
    {
      id: "10",
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      alt: "3D Modeling",
      caption: "Technical Art",
      category: "Modeling",
      width: 600,
      height: 400
    },
    {
      id: "11",
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Digital Sculpture",
      caption: "Material Studies",
      category: "Materials",
      width: 800,
      height: 300
    },
    {
      id: "12",
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "3D Rendering",
      caption: "Photorealistic Art",
      category: "Rendering",
      width: 400,
      height: 500
    }
  ];

  return (
    <>

      {/* Rest of the content */}
      <Header />
      <Layout>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:gap-8 mt-8 py-16">
            <div className="flex-1 lg:max-w-2xl mb-8">
              <div className="max-w-none lg:mb-8">
                <h1 className="text-h4 font-regular text-grey-700 leading-relaxed">
                  3D Art
                </h1>
                <h6 className="text-h6 font-light text-grey-200">
                  A collection of 3D art and experiments
                </h6>
              </div>
            </div>
          </div>
        </div>
          <SwiperGallery 
            items={galleryItems}
          />
      </Layout>
    </>
  );
}
