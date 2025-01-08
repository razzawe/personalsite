import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/NavBar'
import { Reveal } from "../components/Reveal"
import { RevealLTR } from "../components/RevealLTR"
import React from 'react';

export default function Home() {
  const languages = ['Java', 'Python', 'C', 'SQL', 'JavaScript', 'HTML', 'CSS', 'Bash']
  const tools = ['Git', 'JUnit', 'Flask', 'Firebase', 'VS Code', 'Android Studio', 'SQLAlchemy', 'Jira',
    'Next.js', 'Node.js', 'REST', 'Docker', 'React', 'TailwindCSS'];
  const additional = ['Agile', 'Waterfall', 'AWS Services', 'Statistics', 'Windows', 'Linux', 'MacOS']

  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>Rami Al-Azzawe</title>
        <meta name="description" content="Personal portfolio of Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-700 px-[5vw] py-[5vh]">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Left side: About Me */}

            <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
              <RevealLTR width="100%">

                <h1 className="text-7xl font-bold text-white mb-4">Rami Al-Azzawe</h1>
              </RevealLTR>
              <RevealLTR delay={0.75} >
                <p className="text-3xl text-gray-300 mb-8">student | software engineer</p>
              </RevealLTR>
              {/* About Me Section */}





            </div>

            {/* Right side: Image */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-[500px] lg:h-[500px]">
                <Image
                  src="/img/me.jpg"
                  alt="Profile picture"
                  fill
                  sizes="(max-width: 768px) 320px, 500px"
                  className="rounded-full border-4 border-gray-700 shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Description */}
        <section id="desc" className="min-h-screen flex items-center justify-end bg-white border-2 border-black">
        <div className="flex relative lg:w-[700px] lg:h-[1000px] mr-20">
          <Image
            src="/img/mepic.jpg"
            alt="Profile picture"
            fill
            className="border-4 border-gray-700 shadow-lg object-cover"
          />
          </div>
        </section>

        {/* Technical Skills Section */}

        <Reveal width="100%">
          <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative text-white">
            {/* Background Blur */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-4 filter blur-md z-0 bg-gradient-to-tr"
              style={{
                backgroundImage: 'url(/img/code.jpg)',
              }}
            ></div>

            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold text-center text-white mb-12">{"{ skills }"}</h2>
            </div>
            <div className="flex flex-col space-y-8 w-4/5 mx-auto relative">
              <h1 className="text-3xl font-bold">/ languages</h1>


              <div className="grid grid-cols-4 gap-4 ml-10">
                {languages.map((language, index) =>
                  <div className="text-center font-bold bg-red-500 p-6 pt-10 pb-10 m-3 rounded-lg bg-gradient-to-tr from-blue-950 to-indigo-950 ">
                    {language}
                  </div>
                )}
              </div>




              <h1 className="text-3xl font-bold">/ frameworks && developer tools</h1>

              <div className="grid grid-cols-4 gap-4 ml-10">
                {tools.map((tool, index) =>
                  <div className="text-center font-bold bg-red-500 p-3 pt-5 pb-5 m-1 rounded-lg bg-gradient-to-tr from-blue-950 to-indigo-950 ">
                    {tool}
                  </div>
                )}
              </div>
              <h1 className="text-3xl font-bold">/ additional skills</h1>
              <div className="grid grid-cols-4 gap-4 ml-10">
                {additional.map((skill, index) =>
                  <div className="text-center font-bold bg-red-500 p-6 pt-3 pb-3 m-1 rounded-lg bg-gradient-to-tr from-blue-950 to-indigo-950 ">
                    {skill}
                  </div>
                )}
              </div>

            </div>

          </section>

        </Reveal>
      </main>
    </div>




  )
}

