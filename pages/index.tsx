import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/NavBar";
import { Reveal } from "../components/Reveal";
import { RevealLTR } from "../components/RevealLTR";
import React, { useState } from "react";

export default function Home() {
  const [usageVisible, setUsageVisible] = useState(false)

  const toggleUsageVisible = () => {
    setUsageVisible(!usageVisible)
  }


  const languages = [
    {"id": 0, "language": "Java", "usage": "TAAM Collection Management System"},
    {"id": 1, "language": "Python", "usage": "UofT Course Website Remodel"},
    {"id": 2, "language": "C", "usage": "General Experiences"},
    {"id": 3, "language": "SQL", "usage": "Room.it, ScriptBox Web IDE, UofT Course Website Remodel"},
    {"id": 4, "language": "JavaScript", "usage": "Portfolio Website, Room.it, ScriptBox Web IDE, UofT Course Website Remodel"},
    {"id": 5, "language": "HTML", "usage": "Portfolio Website, Room.it, ScriptBox Web IDE, UofT Course Website Remodel"},
    {"id": 6, "language": "CSS", "usage": "Portfolio Website, Room.it, ScriptBox Web IDE, UofT Course Website Remodel"},
    {"id": 7, "language": "Bash", "usage": "General Experiences"},
  ];
  const tools = [
    "Git",
    "JUnit",
    "Flask",
    "Firebase",
    "VS Code",
    "Android Studio",
    "SQLAlchemy",
    "Jira",
    "Next.js",
    "Node.js",
    "REST",
    "Docker",
    "React",
    "TailwindCSS",
  ];
  const additional = [
    "Agile",
    "Waterfall",
    "AWS Services",
    "Statistics",
    "Windows",
    "Linux",
    "MacOS",
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>Rami Al-Azzawe</title>
        <meta name="description" content="Rami Al-Azzawe Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700 px-[5vw] py-[5vh] relative"
        >
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Left side: About Me */}

            <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
              <RevealLTR width="100%">
                <h1 className="lg:text-7xl text-5xl font-bold text-white mb-4">
                  Rami Al-Azzawe
                </h1>
              </RevealLTR>
              <RevealLTR delay={0.75}>
                <p className="lg:text-3xl text-xl text-gray-300 mb-8">
                  student | software engineer
                </p>
                <div className="flex items-center mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="gray"
                    className="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>

                  <Link
                    href="#desc"
                    className="text-gray-400 text-bold text-xl whitespace-nowrap mr-1"
                  >
                    {"About Me"}
                  </Link>
                </div>
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
                  className="rounded-full border-gray-700 shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center absolute right-4 bottom-[100px]">
            <Link
              href="#skills"
              className="text-white text-bold underline underline-offset-2 md:text-xl text-sm whitespace-nowrap mr-1"
            >
              {"Jump to skills"}
            </Link>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
              />
            </svg>
          </div>
        </section>

<section id="desc" className="grid grid-cols-1 md:grid-cols-2 min-h-screen bg-gradient-to-b from-gray-700 to-gray-900">
  {/* Left Side: Image */}
  <div className="hidden md:flex justify-center items-center p-4">
    <div className="relative w-[400px] h-[600px] lg:w-[500px] lg:h-[700px]">
      <Image
        src="/img/mepic2.png"
        alt="Profile picture"
        fill
        sizes="(max-width: 768px) 400px, 700px"
        className="shadow-lg rounded-lg object-cover"
      />
    </div>
  </div>

  {/* Right Side: Text */}
  <div className="flex flex-col justify-center items-start p-4 md:pl-6 text-white space-y-4">
    <h2 className="text-4xl font-bold">{"{ about me }"}</h2>
    <p className="text-lg text-gray-300">
     I am Rami Al-Azzawe, a Software Engineer in the making, now studying at the University of Toronto, specializing in Computer Science.
    </p>
    <p className="text-lg text-gray-300">
    I have a strong interest and aptitute for tech and how it shapes the world around us; and that is something which has been a staple of my life since I was young.
    </p>
    <p className="text-lg text-gray-300">
      From a young age, I remember beginning my fascination with technology using a Windows XP laptop and developed a strong interest for Windows operating systems as a whole; which led to me diving into various operating systems through a VM such as Windows 95, 98, ME, and more (like any other kid that age would do... right?).
    </p>
    <p className="text-lg text-gray-300">
      Thereon, over the years, I continued down the path of my passion for technology, developing some games in elementary school with pre-made assets, to creating a simple platformer video game from scratch based off the Mandalorian in high school, to today, where I am continuing to explore my interests in full stack web development and mobile app development.
    </p>

    <Link
      href="#skills"
      className="text-blue-400 font-bold underline underline-offset-4 hover:text-blue-300"
    >
      Learn more about my skills →
    </Link>
  </div>
</section>

        {/* Technical Skills Section */}

        <Reveal width="100%">
          <section
            id="skills"
            className="py-20 px-4 sm:px-6 lg:px-8 relative text-white"
          >

            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                {"{ skills }"}
              </h2>
            </div>
            <div className="flex flex-col space-y-8 w-4/5 mx-auto relative">
              <div className="justify-center">
                <h1 className="text-3xl font-bold">// languages</h1>
              </div>

              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ml-10 break-words">
                {languages.map((language, index) => (
                  <div className="group items-center justify-center text-center font-bold bg-red-500 p-6 pt-10 pb-10 m-3 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-400 border-4 border-transparent transition-colors duration-300 hover:border-white ">
                    {language.language}
                    <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm mt-2 ">Used in: {language.usage}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h1 className="text-3xl font-bold">
                // frameworks && developer tools
              </h1>

              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ml-10 break-words">
                {tools.map((tool, index) => (
                  <div className="text-center font-bold bg-red-500 p-3 pt-5 pb-5 m-1 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-400 ">
                    {tool}
                  </div>
                ))}
              </div>
              <h1 className="text-3xl font-bold">// additional skills</h1>
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 ml-10 break-words">
                {additional.map((skill, index) => (
                  <div className="text-center font-bold bg-red-500 p-6 pt-3 pb-3 m-1 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-400 ">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
}
