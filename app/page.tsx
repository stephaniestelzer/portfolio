// Home page

import { Layout } from "./components";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Bio Section */}
        <div className="mb-8">
          <h1 className="text-h5 font-light text-gray-900 mb-4 font-heading">
            Stephanie Stelzer
          </h1>
          
          <p className="text-p text-grey-300 font-light leading-relaxed mb-8">
            Hi! I'm Stephanie, a hybrid software developer / designer. I am passionate about combining art and technology to craft immersive and meaningful experiences and enjoy learning from different perspectives across creative and technical fields. Currently building creative tools for the web at Disney, previously at Paramount Animation as a Pipeline Developer.
          </p>
          
          <div className="flex justify-end gap-6">
            <a 
              href="/projects" 
              className="text-gray-700 hover:text-gray-900 transition-colors font-light flex items-center gap-1"
            >
              Portfolio
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors font-light flex items-center gap-1"
            >
              LinkedIn
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
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
                 <div className="w-4 h-4 border border-black rounded bg-gray-200"></div>
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
                 <div className="w-4 h-4 border border-black rounded bg-gray-200"></div>
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
                 <div className="w-4 h-4 border border-black rounded bg-gray-200"></div>
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
                 <div className="w-4 h-4 border border-black rounded bg-gray-200"></div>
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
    </Layout>
  );
}
