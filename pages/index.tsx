import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/NavBar";
import { Reveal } from "../components/Reveal";
import { RevealLTR } from "../components/RevealLTR";
import React from "react";

export default function Home() {
  const languages = [
    "Java",
    "Python",
    "C",
    "SQL",
    "JavaScript",
    "HTML",
    "CSS",
    "Bash",
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
        <meta name="description" content="Personal portfolio of Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-700 px-[5vw] py-[5vh] relative"
        >
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            {/* Left side: About Me */}

            <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
              <RevealLTR width="100%">
                <h1 className="text-7xl font-bold text-white mb-4">
                  Rami Al-Azzawe
                </h1>
              </RevealLTR>
              <RevealLTR delay={0.75}>

                <p className="text-3xl text-gray-300 mb-8">
                  student | software engineer
                  <div className="flex items-center mt-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
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
                </p>

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
              className="text-white text-bold underline underline-offset-2 text-xl whitespace-nowrap mr-1"
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

        {/* Description */}

        <section id="desc" className="flex min-h-screen bg-white ">
          {/* Left side: About Me */}

          <div className="w-1/2 text-left lg:mr-auto flex flex-col justify-left items-left ml-4 pl-4 pr-4 mb-10">
            <h1 className="text-5xl font-bold mt-10 underline underline-offset-8 decoration-4 decoration-blue-500 text-indigo-950 pt-10 ">
              {"{ about me }"}
            </h1>
            <div className="flex-grow flex flex-col justify-evenly text-xl">
              <div>
                <h1 className="text-xl font-bold mt-10 text-indigo-950 pt-10">
                  {"{ who am i ?}"}
                </h1>
                <p className="text-gray-600 max-w-prose text-lg">
                  // My name is Rami Al-Azzawe. I am a third year Computer
                  Science Specialist student at the University of Toronto.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold text-indigo-950 pt-10">
                  {"{ areas of interest }"}
                </h1>
                <p className="text-gray-600 max-w-prose text-lg">
                  // I am continuing to explore my interests, and few that stand
                  out to me today are full stack web development and mobile app
                  development. Much of this experience is also complemented with
                  my experience in data structures and OOP principles
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold text-indigo-950 pt-10">
                  {"{ goals && aspirations }"}
                </h1>
                <p className="text-gray-600 max-w-prose text-lg">
                  // I am a hardworking and dedicated individual, and these
                  traits have always been something I pride myself on as they
                  have always, and continue to, bring me success and ultimately
                  closer to reaching all of my career goals as an aspiring
                  Software Engineer.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold text-indigo-950 pt-10">
                  {"{ hobbies && interests }"}
                </h1>
                <p className="text-gray-600 max-w-prose text-lg">
                  // In addition to my strong passion and aptitude for anything
                  technology related, I am a very music oriented person. I have
                  played the guitar since 10 years old, and my genres range
                  anywhere from pop, to throwbacks from decades as early as the
                  50s. Along with this interest is my strong passion for
                  fitness, which is something I ensure to fit into my schedule
                  as an excellent way to maintain physical and mental wellbeing
                </p>
              </div>
            </div>
          </div>

          {/* Right side: Image */}
          <div className="w-1/2 flex justify-center items-center border-4 border-indigo-950 lg:ml-auto">
            <div className="relative w-full h-full">
              <Image
                src="/img/mepic.jpg"
                alt="Profile picture"
                fill
                sizes="(max-width: 768px) 320px, 500px"
                className="border-4 border-gray-700 shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}

        <Reveal width="100%">
          <section
            id="skills"
            className="py-20 px-4 sm:px-6 lg:px-8 relative text-white"
          >
            {/* Background Blur */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-4 filter blur-md z-0 bg-gradient-to-tr"
              style={{
                backgroundImage: "url(/img/code.jpg)",
              }}
            ></div>

            <div className="max-w-4xl mx-auto relative z-10">
              <h2 className="text-3xl font-bold text-center text-white mb-12">
                {"{ skills }"}
              </h2>
            </div>
            <div className="flex flex-col space-y-8 w-4/5 mx-auto relative">
              <h1 className="text-3xl font-bold">// languages</h1>

              <div className="grid grid-cols-4 gap-4 ml-10">
                {languages.map((language, index) => (
                  <div className="text-center font-bold bg-red-500 p-6 pt-10 pb-10 m-3 rounded-lg bg-gradient-to-tr from-blue-950 to-indigo-950 ">
                    {language}
                  </div>
                ))}
              </div>

              <h1 className="text-3xl font-bold">
                // frameworks && developer tools
              </h1>

              <div className="grid grid-cols-4 gap-4 ml-10">
                {tools.map((tool, index) => (
                  <div className="text-center font-bold bg-red-500 p-3 pt-5 pb-5 m-1 rounded-lg bg-gradient-to-tr from-blue-950 to-indigo-950 ">
                    {tool}
                  </div>
                ))}
              </div>
              <h1 className="text-3xl font-bold">// additional skills</h1>
              <div className="grid grid-cols-4 gap-4 ml-10">
                {additional.map((skill, index) => (
                  <div className="text-center font-bold bg-red-500 p-6 pt-3 pb-3 m-1 rounded-lg bg-gradient-to-tr from-blue-950 to-indigo-950 ">
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
