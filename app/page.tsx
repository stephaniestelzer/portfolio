// Home page
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stephanie Stelzer",
  description: "Stephanie Stelzer - Software developer passionate about art, technology, and tooling.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center">
      <main className="flex-1">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bio Section */}
        <div className="mb-8">
          <h1 className="text-h5 font-light text-gray-900 mb-4 font-heading">
            Stephanie Stelzer
          </h1>
          
          <p className="text-p text-grey-300 font-light mb-8">
            I am a software developer passionate about art, technology, and tooling. Currently building content publishing tools for the web at Disney, previously at Paramount Animation as a Pipeline Developer.
          </p>
          
          <div className="flex justify-start md:justify-end gap-6">
            <a 
              href="/portfolio" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-light flex items-center gap-1"
            >
              Portfolio
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9999 5.875C14.9999 5.65399 14.9122 5.44202 14.7559 5.28574C14.5996 5.12946 14.3876 5.04167 14.1666 5.04167L7.49995 5C7.27894 5 7.06697 5.0878 6.91069 5.24408C6.75441 5.40036 6.66662 5.61232 6.66662 5.83333C6.66662 6.05435 6.75441 6.26631 6.91069 6.42259C7.06697 6.57887 7.27894 6.66667 7.49995 6.66667H12.1333L5.24162 13.575C5.16351 13.6525 5.10151 13.7446 5.05921 13.8462C5.0169 13.9477 4.99512 14.0567 4.99512 14.1667C4.99512 14.2767 5.0169 14.3856 5.05921 14.4871C5.10151 14.5887 5.16351 14.6809 5.24162 14.7583C5.31908 14.8364 5.41125 14.8984 5.5128 14.9407C5.61435 14.9831 5.72327 15.0048 5.83328 15.0048C5.94329 15.0048 6.05221 14.9831 6.15376 14.9407C6.25531 14.8984 6.34748 14.8364 6.42495 14.7583L13.3333 7.85V12.5C13.3333 12.721 13.4211 12.933 13.5774 13.0893C13.7336 13.2455 13.9456 13.3333 14.1666 13.3333C14.3876 13.3333 14.5996 13.2455 14.7559 13.0893C14.9122 12.933 14.9999 12.721 14.9999 12.5V5.875Z" fill="black"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/stephanie-stelzeruf/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors font-light flex items-center gap-1"
            >
              LinkedIn
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9999 5.875C14.9999 5.65399 14.9122 5.44202 14.7559 5.28574C14.5996 5.12946 14.3876 5.04167 14.1666 5.04167L7.49995 5C7.27894 5 7.06697 5.0878 6.91069 5.24408C6.75441 5.40036 6.66662 5.61232 6.66662 5.83333C6.66662 6.05435 6.75441 6.26631 6.91069 6.42259C7.06697 6.57887 7.27894 6.66667 7.49995 6.66667H12.1333L5.24162 13.575C5.16351 13.6525 5.10151 13.7446 5.05921 13.8462C5.0169 13.9477 4.99512 14.0567 4.99512 14.1667C4.99512 14.2767 5.0169 14.3856 5.05921 14.4871C5.10151 14.5887 5.16351 14.6809 5.24162 14.7583C5.31908 14.8364 5.41125 14.8984 5.5128 14.9407C5.61435 14.9831 5.72327 15.0048 5.83328 15.0048C5.94329 15.0048 6.05221 14.9831 6.15376 14.9407C6.25531 14.8984 6.34748 14.8364 6.42495 14.7583L13.3333 7.85V12.5C13.3333 12.721 13.4211 12.933 13.5774 13.0893C13.7336 13.2455 13.9456 13.3333 14.1666 13.3333C14.3876 13.3333 14.5996 13.2455 14.7559 13.0893C14.9122 12.933 14.9999 12.721 14.9999 12.5V5.875Z" fill="black"/>
              </svg>
            </a>
          </div>
        </div>
        
        {/* History Section */}
        <div className="mt-8">
          <hr className="border-gray-300 mb-8" />
          <h2 className="text-p text-grey-500 mb-2 font-light">
            HISTORY
          </h2>
          
          <div className="">
             <div className="flex items-center justify-between py-1">
               <div className="flex items-center gap-1">
                 <div className="w-[14px] h-[14px] border border-black rounded bg-blue-600 mr-2"></div>
                 <span className="text-p text-grey-500 font-light">
                   The Walt Disney Company
                 </span>
               </div>
               <span className="text-p text-grey-500 font-light">
                 2024 -
               </span>
             </div>
             <div className="flex items-center justify-between py-1">
               <div className="flex items-center gap-1">
                 <div className="w-[14px] h-[14px] border border-black rounded bg-blue-600 mr-2"></div>
                 <span className="text-p text-grey-500 font-light">
                   Paramount Animation
                 </span>
               </div>
               <span className="text-p text-grey-500 font-light">
                 2023
               </span>
             </div>
             <div className="flex items-center justify-between py-1">
               <div className="flex items-center gap-1">
                 <div className="w-[14px] h-[14px] border border-black rounded bg-blue-600 mr-2"></div>
                 <span className="text-p text-grey-500 font-light">
                   Target
                 </span>
               </div>
               <span className="text-p text-grey-500 font-light">
                 2022
               </span>
             </div>
             <div className="flex items-center justify-between py-1">
               <div className="flex items-center gap-1">
                 <div className="w-[14px] h-[14px] border border-black rounded bg-blue-600 mr-2"></div>
                 <span className="text-p text-grey-500 font-light">
                   The Agency at UF
                 </span>
               </div>
               <span className="text-p text-grey-500 font-light">
                 2022 - 2023
               </span>
             </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
}
