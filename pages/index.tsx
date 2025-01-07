import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/NavBar'
import { Reveal } from "../components/Reveal"
import { RevealLTR } from "../components/RevealLTR"
import React from 'react';

export default function Home() {
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



        {/* Technical Skills Section */}
        <Reveal width="100%">
          <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-blue-950 to-blue-700 relative">
            {/* Background Blur */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-4 filter blur-md z-0"
              style={{
                backgroundImage: 'url(/img/code.jpg)',
              }}
            ></div>

            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold text-center text-white mb-12">{"{ skills }"}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {['JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Tailwind CSS', 'HTML' ].map((skill) => (
                  <div
                    key={skill}
                    className="group relative bg-gray-700 rounded-lg h-40 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* Gradient Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>

                    {/* Content */}
                    <div className="absolute inset-[1px] bg-gray-900 rounded-lg grid p-6">
                      <h3 className="text-xl font-semibold text-gray-100 place-self-center transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                        {skill}
                      </h3>

                    </div>
                  </div>

                ))}
              </div>
            </div>

          </section>

        </Reveal>
      </main>
    </div>




  )
}

