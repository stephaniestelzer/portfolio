import { Layout } from '../components';
import { Header } from '../components';
import Image from 'next/image';

export default async function About() {

  return (
    <>
      <Header />
      <Layout>
        <div className="min-h-screen pt-8">
          <div className="flex mt-8 mb-8 flex-col justify-center lg:flex-row">
            <div className="flex items-start justify-center lg:mt-8">
              <div className="w-64 h-64 lg:w-80 lg:h-80 overflow-hidden flex items-start justify-center pb-8">                
                <Image src="/Headshot.jpeg" 
                  alt="Stephanie Stelzer" 
                  width={320} 
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-6 lg:px-12">
                <div className="max-w-2xl space-y-4 lg:space-y-6">
                  <section className="prose">
                    <h3 className="text-h6 text-gray-600">
                      Hi, I'm Stephanie
                    </h3>
                  </section>

                  <section className="prose">
                    <p className="text-p text-gray-600">
                      I am a Creative Technologist at Disney Experiences, where I design and build content publishing tools for <a href='https://disneyparksblog.com/' target="_blank">disneyparksblog.com</a>, <a href='https://disneyexperiences.com/' target="_blank">disneyexperiences.com,</a> and many other sites across the company. In my team, I function primarily as a developer, but dabble a in UX when the project calls for it.
                    </p>
                  </section>

                  <section className="prose">
                    <p className="text-p text-gray-600">
                      I am a recent graduate of the University of Florida, where I earned my Bachelor of Science in <a href='https://catalog.ufl.edu/UGRD/colleges-schools/UGENG/DAS_BSDA/'  target="_blank">Digital Arts and Sciences Engineering</a>. My degree is a core computer science curriculum, with a special emphasis on human-computer interaction and digital media.
                    </p>
                  </section>

                  <section className="prose">
                    <p className="text-p text-gray-600 mb-4">
                      Prior to my role at Disney, I have been a...
                    </p>
                    <ul className="space-y-4">
                      <li className="text-p text-gray-600 leading-relaxed">
                        <span className="font-semibold">Technical Director Intern</span> at <a href='https://animation.paramountpictures.com/' target="_blank">Paramount Animation</a>, where I built tools for the studio's animation pipeline
                      </li>
                      <li className="text-p text-gray-600 leading-relaxed">
                        <span className="font-semibold">Developer Department Manager</span> at <a href="https://theagency.jou.ufl.edu/" target="_blank">The Agency at UF</a>, where I led a team of developers and bridged the gaps between creative and technical departments
                      </li>
                      <li className="text-p text-gray-600 leading-relaxed">
                        <span className="font-semibold">Software Engineering Intern</span> at <a href="https://corporate.target.com/careers/career-areas/corporate/target-tech" target="_blank">Target</a>, where I built an API for Android devices
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-4 prose">
                    <p className="text-p text-gray-600">
                      I enjoy combining art and technology to create meaningful experiences, and I strive to bring this passion into everything I do.
                    </p>
                  </section>

                  <section className="mt-6 lg:border-t-[0.5px] border-grey-200">
                    <h3 className="text-h6 text-gray-600 pt-6">
                      Contact
                    </h3>
                  </section>

                  <section className="space-y-4 prose">
                    <p className="text-p text-gray-600">
                        If you read this far, we likely have some shared interests. Let's chat! <br></br>
                        <span className='font-bold'>Email:</span> <a href="mailto:stephanie@stelzers.com">stephanie@stelzers.com</a>
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