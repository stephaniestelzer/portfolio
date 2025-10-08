// app/3d-art/page.tsx
"use client";

import { SwiperGallery } from "../components";
import { Header,Layout } from '../components';


export default function ThreeDArtPage() {

  const terrariumItems = [
    {
      id: "1",
      type: "image" as const,
      src: "/terrarium/Stelzer_Stephanie_Render_01.png",
      alt: "3D Rendering",
      caption: "",
      width: 1200,
      height: 1000
    },
    {
      id: "2",
      type: "image" as const,
      src: "/terrarium/Stelzer_Stephanie_Render_02.png",
      alt: "3D Rendering",
      caption: "",
      width: 1200,
      height: 1000
    },
    {
      id: "3",
      type: "image" as const,
      src: "/terrarium/Stelzer_Stephanie_Render_03.png",
      alt: "3D Rendering",
      caption: "",
      width: 1200,
      height: 1000
    },
    {
      id: "4",
      type: "video" as const,
      src: "https://vimeo.com/859190931?share=copy",
      alt: "Terrarium",
      caption: "",
      width: 1200,
      height: 1000,
      videoId: "859190931",
      platform: "vimeo" as const
    },
  ];

  const animationItems = [
    {
      id: "1",
      type: "image" as const,
      src: "https://stephaniestelzer.github.io/MyPortfolio/assets/A3PlanningDoc-501183ff.png",
      alt: "Planning Sheet",
      caption: "Planning Sheet",
      width: 1200,
      height: 1000
    },
    {
      id: "2",
      type: "video" as const,
      src: "https://stephaniestelzer.github.io/MyPortfolio/assets/Stelzer_Stephanie_A4_Ref-248e6c07.mp4",
      alt: "reference",
      platform: "mp4" as const,
      caption: "Reference",
      poster: ""
    },
    {
      id: "3",
      type: "video" as const,
      src: "https://vimeo.com/828404878?share=copy",
      alt: "Final Blocking",
      caption: "Final Blocking Pass",
      width: 1200,
      height: 1000,
      videoId: "828404878",
      platform: "vimeo" as const
    },
  ];

  const glRobotItems = [
    {
      id: "1",
      type: "video" as const,
      src: "https://vimeo.com/828446023?share=copy",
      alt: "Terrarium",
      caption: "",
      width: 1200,
      height: 1000,
      videoId: "828446023",
      platform: "vimeo" as const
    },
  ];

  const riggingItems = [
    {
      id: "1",
      type: "video" as const,
      src: "https://vimeo.com/899996339?share=copy",
      alt: "Oven Rig",
      caption: "Oven Rig",
      width: 1200,
      height: 1000,
      videoId: "899996339",
      platform: "vimeo" as const
    },
    {
      id: "2",
      type: "video" as const,
      src: "https://vimeo.com/899997320?share=copy",
      alt: "Blendshapes",
      caption: "Blendshapes",
      width: 1200,
      height: 1000,
      videoId: "899997320",
      platform: "vimeo" as const
    },
  ];

  return (
    <>
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
        <div className="bg-grey-400 three-d-section">
          <div className="flex justify-center pt-7">
            <h4 className="text-white underline">Modeling</h4>
          </div>
          {/* Callout Section */}
          <div className="flex justify-center py-8">
            <div className="bg-white rounded-xl max-w-3xl w-full px-8 py-10 border border-grey-900">
              <h2 className="text-h5 font-regular text-center mb-6">Terrarium</h2>
              <p className="text-p font-light text-gray-800 mb-4">
                The prompt for this project was to create a "Floating World" that could be held in one’s hand. I immediately thought of the decorative terrariums commonly placed on desks. For my project, I imagined that a whole different world existed within one of these small glass jars. My terrarium would be the home of a dedicated gardener who took great joy in his craft.
              </p>
              <p className="text-p font-light text-gray-800 mb-4">
                The world is designed to be "in-progress," showcasing the gardener’s work before its completion. The shed is open, tools lay awry, and the plants aren’t fully embedded in the soil, creating an atmosphere of continuous progress. The winding path and bench provide a place for the gardener to sit and appreciate his environment. The hole in the center of the jar invites viewers into the world and to join the gardener in his work.
              </p>
              <p className="text-p font-light text-gray-800">
                Throughout the development of this project, I learned about parametric modeling, world-building, and using deformers in Cinema4D.
              </p>
            </div>
          </div>
          <SwiperGallery 
            items={terrariumItems}
          />
        </div>
        <div className="bg-tag-unselected three-d-section">
          <div className="flex justify-center pt-7">
            <h4 className="text-black underline">Animation</h4>
          </div>
          {/* Callout Section */}
          <div className="flex justify-center py-8">
            <div className="bg-white rounded-xl max-w-3xl w-full px-8 py-10 border border-grey-900">
              <h2 className="text-h5 font-regular text-center mb-6">Parkour Animation</h2>
              <p className="text-p font-light text-gray-800 mb-4">
                The goal of this exercise was to learn the fundamentals of body mechanics and to practice switching between IK and FK.
              </p>
              <p className="font-semibold">Learnings</p>
              <ul className="list-disc pl-6 text-p font-light text-gray-800">
                <li>
                  The fundamentals of the bouncing ball exercise and principle of squash and stretch are important to creating realistic motion. These principles create buoyancy and keep the character's movement from appearing floaty and weightless.
                </li>
                <li>
                  Rushing into Maya will hurt the quality of your animation. Be sure to carefully plan out your IK and FK switches.
                </li>
              </ul>
            </div>
          </div>
          <SwiperGallery 
            items={animationItems}
          />
        </div>
        <div className="bg-grey-400 three-d-section">
          <div className="flex justify-center pt-7">
            <h4 className="text-white underline">Technical Art</h4>
          </div>
          {/* OpenGL Robot */}
          <div className="flex justify-center py-8">
            <div className="bg-white rounded-xl max-w-3xl w-full px-8 py-10 border border-grey-900">
              <h2 className="text-h5 font-regular text-center mb-6">OpenGL Robot</h2>
              <p className="text-p font-light text-gray-800 mb-4">
                A program that creates the arm of a robot and allows the user to use arrow keys to move it around in space.
              </p>
              <p>Throughout development, I learned about...</p>
              <ul className="list-disc pl-6 text-p font-light text-gray-800">
                <li>
                  Vertex Buffer/Array Objects
                </li>
                <li>
                  Hierarchy Set-up
                </li>
                <li>
                  Transformation Matrices
                </li>
                <li>
                  Transformation Matrices
                </li>
                <li>
                  Shaders (GLSL) / OpenGL Lighting Model
                </li>
              </ul>
            </div>
          </div>
          <SwiperGallery 
            items={glRobotItems}
          />
          {/* Rigging Study */}
          <div className="flex justify-center py-8">
            <div className="bg-white rounded-xl max-w-3xl w-full px-8 py-10 border border-grey-900">
              <h2 className="text-h5 font-regular text-center mb-6">Rigging Study</h2>
              <p className="text-p font-light text-gray-800 mb-4">
                After taking Advanced 3D Animation, I wanted to learn more about creating rigs. I worked with my 3D Animation instructor to learn the fundamentals of rigging characters for CG animation.
              </p>
              <p className="font-semibold">Topics Covered:</p>
              <ul className="list-disc pl-6 text-p font-light text-gray-800">
                <li>
                  Model/Mesh Cleaning
                </li>
                <li>
                 Auto Rigging Systems
                </li>
                <li>
                  Joint Placement
                </li>
                <li>
                  Weight-Painting
                </li>
                <li>
                  Blend Shapes
                </li>
              </ul>
            </div>
          </div>
          <SwiperGallery 
            items={riggingItems}
          />
        </div>
        <div className="py-8 text-center bg-tag-unselected">
          <p className="text-grey-400 font-light text-p">
            © 2025 Stephanie Stelzer
          </p>
        </div>
      </Layout>
    </>
  );
}
