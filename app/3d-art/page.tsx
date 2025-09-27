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
      type: "image" as const,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "3D Character Design",
      caption: "Digital Portraits",
      category: "Character",
      width: 400,
      height: 600
    },
    {
      id: "4",
      type: "video" as const,
      src: "https://vimeo.com/859190931?share=copy",
      alt: "Terrarium",
      caption: "",
      category: "Motion",
      width: 600,
      height: 600,
      videoId: "859190931",
      platform: "vimeo" as const
    },
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
