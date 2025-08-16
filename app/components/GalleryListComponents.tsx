// components/GalleryListComponents.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// --- Inline SVG Icons ---
const CheckIcon = () => (
  <svg className="w-5 h-5 mt-0.5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
  </svg>
);

const XIcon = () => (
  <svg className="w-5 h-5 mt-0.5 text-red-600" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = ({ rotated }: { rotated?: boolean }) => (
  <svg
    className={`w-5 h-5 transition-transform ${rotated ? "rotate-90" : ""}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// --- TypeScript Types ---
interface ProductFeatureSplitProps {
  images: string[];
  features: string[];
}

interface AccordionItem {
  title: string;
  image: string;
  description: string;
}

interface AccordionGalleryProps {
  items: AccordionItem[];
}

interface ComparisonCardProps {
  title: string;
  images: string[];
  pros: string[];
  cons: string[];
}

// --- Component 1: Product Feature Split ---
export function ProductFeatureSplit({ images, features }: ProductFeatureSplitProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 shadow-lg rounded-2xl">
      <div className="flex-1 flex flex-col items-center">
        <Image
          src={images[active]}
          alt={`Feature image ${active + 1}`}
          width={500}
          height={300}
          className="rounded-xl shadow-md object-cover"
        />
        <div className="flex gap-2 mt-3">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`w-3 h-3 rounded-full ${active === idx ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center gap-3">
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckIcon />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// --- Component 2: Accordion + Gallery ---
export function AccordionGallery({ items }: AccordionGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="p-6 shadow-lg rounded-2xl">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 space-y-3">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setActive(idx)}
              className={`flex w-full items-center justify-between p-3 rounded-lg border transition-all ${
                active === idx ? "bg-gray-100 border-black" : "border-gray-200"
              }`}
            >
              <span>{item.title}</span>
              <ChevronRightIcon rotated={active === idx} />
            </button>
          ))}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center">
          <Image
            src={items[active].image}
            alt={items[active].title}
            width={500}
            height={300}
            className="rounded-xl shadow-md object-cover"
          />
          <p className="mt-3 text-sm text-gray-600 max-w-md text-center">{items[active].description}</p>
        </div>
      </div>
    </div>
  );
}

// --- Component 3: Comparison Card ---
export function ComparisonCard({ title, images, pros, cons }: ComparisonCardProps) {
  return (
    <div className="p-6 shadow-lg rounded-2xl flex flex-col gap-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="flex-1">
        <Image
          src={images[0]}
          alt={`${title} preview`}
          width={500}
          height={250}
          className="rounded-xl shadow-md object-cover"
        />
      </div>
      <div>
        <h4 className="font-medium mb-2">Pros</h4>
        <ul className="space-y-2 mb-4">
          {pros.map((pro, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckIcon />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
        <h4 className="font-medium mb-2">Cons</h4>
        <ul className="space-y-2">
          {cons.map((con, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <XIcon />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
