import Head from "next/head";
import Image from "next/image";
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
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-700 px-[5vw] py-[5vh]"
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
        </section>

        {/* Description */}

        <section id="desc" className="flex min-h-screen bg-white ">
          {/* Left side: About Me */}

          <div className="w-1/2 text-left lg:mr-auto flex flex-col justify-left items-left ml-4 pl-4 pr-4 mb-10">
            <h1 className="text-5xl font-bold mt-10 text-indigo-950 pt-10">
              {"{ about me }"}
            </h1>
            <div className="flex-grow flex flex-col justify-evenly text-xl">
              
              <div>
                <h1 className="text-xl font-bold mt-10 text-indigo-950 pt-10">
                  {"{ who am i ?}"}
                </h1>
                <p className="text-gray-600 max-w-prose ">
                  // My name is Rami Al-Azzawe, and I am in my third year of my
                  Computer Science degree as a Software Engineering Specialist at the University of Toronto.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold mt-10 text-indigo-950 pt-10">
                  {"{ areas of interest }"}
                </h1>
                <p className="text-gray-600 max-w-prose">
                  // As of right now, I am continuing to explore my interests. Some platforms
                  that greatly interest me are web development and app development, and 
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold mt-10 text-indigo-950 pt-10">
                  {"{ goals && aspirations }"}
                </h1>
                <p className="text-gray-600 max-w-prose">
                  // I am a hardworking and dedicated individual, and these
                  traits have always been something I pride myself on as they
                  have always, and continue to, bring me success and ultimately
                  closer to reaching all of my career goals as an aspiring
                  Software Engineer.
                </p>
              </div>
              <div>
                <h1 className="text-xl font-bold mt-10 text-indigo-950 pt-10">
                  {"{ hobbies && interests }"}
                </h1>
                <p className="text-gray-600 max-w-prose">
                  // In addition to my strong passion and aptitude for anything
                  technology related, I am a very music oriented person. I have
                  been playing the guitar since I was 10 years old. My genres
                  range anywhere from pop, to throwbacks from decades as early
                  as the 50s, where one day you'll find me listening to One
                  Direction, and the next, the legend Billy Joel.
                  <br/><br/> Lastly, fitness is 
                  another very important part of my life, and is something I ensure to 
                  fit into my schedule for physical and mental wellbeing
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
