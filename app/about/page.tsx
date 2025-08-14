import { Layout } from '../components';
import { Header } from '../components';
import Image from 'next/image';

export default async function About() {

  return (
    <>
      <Header />
      <Layout>
        <div className="min-h-screen pt-8">
          <div className="flex mt-8 flex-col justify-center lg:flex-row">
            <div className="flex items-start justify-center">
              <div className="w-64 h-64 lg:w-80 lg:h-80 overflow-hidden flex items-center justify-center pb-8">                
                <Image src="/Headshot.jpeg" 
                  alt="Stephanie Stelzer" 
                  width={320} 
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-6 lg:px-12">
                <div className="max-w-2xl space-y-6 lg:space-y-8">
                  <section className="space-y-4">
                    <p className="text-p text-gray-600 leading-relaxed">
                      I am a recent graduate of the University of Florida, where I earned my Bachelor of Science in Digital Arts and Sciences Engineering.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <p className="text-p text-gray-600 leading-relaxed">
                      My degree is a core computer science curriculum, with a special emphasis on human-computer interaction and digital media.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <p className="text-p text-gray-600 leading-relaxed mb-4">
                      So far, I have been a...
                    </p>
                    <ul className="space-y-3">
                      <li className="text-p text-gray-600 leading-relaxed">
                        <span className="font-semibold">Technical Director Intern</span> at Paramount Animation
                      </li>
                      <li className="text-p text-gray-600 leading-relaxed">
                        <span className="font-semibold">Developer Department Manager</span> at The Agency at UF
                      </li>
                      <li className="text-p text-gray-600 leading-relaxed">
                        <span className="font-semibold">Software Engineering Intern</span> at Target
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <p className="text-p text-gray-600 leading-relaxed">
                      I have a strong desire to use both art and technology to create meaningful experiences, and I strive to bring this passion into everything I do.
                    </p>
                  </section>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <div className="py-8 text-center bg-tag-unselected">
        <p className="text-grey-400 font-light text-p">
          © 2025 Stephanie Stelzer
        </p>
      </div>
    </>
  );
}; 