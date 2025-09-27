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
      src: "/3D/Stelzer_Stephanie_Render_01.png",
      alt: "3D Abstract Sculpture",
      caption: "Fluid Dynamics",
      width: 1000,
      height: 600
    },
    {
      id: "2",
      type: "image" as const,
      src: "/3D/Stelzer_Stephanie_Render_02.png",
      alt: "Digital Architecture",
      caption: "Urban Geometry",
      width: 800,
      height: 800
    },
    {
      id: "3",
      type: "image" as const,
      src: "/3D/Stelzer_Stephanie_Render_03.png",
      alt: "3D Character Design",
      caption: "Digital Portraits",
      width: 800,
      height: 600
    },
    {
      id: "4",
      type: "video" as const,
      src: "https://vimeo.com/859190931?share=copy",
      alt: "Terrarium",
      caption: "",
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
