// app/3d-art/page.tsx
"use client";

import { ProductFeatureSplit, AccordionGallery, ComparisonCard } from "../components/GalleryListComponents";

export default function ThreeDArtPage() {
  // Example images (place them in /public)
  const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
  const features = ["Fast performance", "Responsive design", "Easy integration"];

  const accordionItems = [
    { title: "Step 1", image: "/step1.jpg", description: "Do this first" },
    { title: "Step 2", image: "/step2.jpg", description: "Then this" },
    { title: "Step 3", image: "/step3.jpg", description: "Finally that" },
  ];

  const pros = ["Easy to use", "Customizable"];
  const cons = ["Limited free tier"];

  return (
    <div className="space-y-12 p-6">
      <h1 className="text-3xl font-bold text-center">3D Art Gallery</h1>

      <ProductFeatureSplit images={images} features={features} />

      <AccordionGallery items={accordionItems} />

      <ComparisonCard title="Product X" images={images} pros={pros} cons={cons} />
    </div>
  );
}
