import React from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      id: 0,
      name: "Room.it",
      languages: ["Next.js, ", "React, ", "REST, ", "SQLite, ", "Prisma, ", "AWS Services"],
      desc: "A website for students to find compatible roommates using advanced matching algorithms based on their interests and preferences. Done in AWS as part of an AWS hackathon",
      picture: "/img/roomit.png",
    },
    {
      id: 0,
      name: "Scriptbox Web IDE",
      languages: ["Next.js, ", "Prisma, ", "REST, ", "React, ", "TailwindCSS, ", "Docker"],
      desc: "An online IDE website with blogpost functionality, developed with a partner",
      picture: "/img/scriptbox.png",
    },
    {
      id: 0,
      name: "TAAM Collection Management System",
      languages: ["Git, ", "Java, ", "Agile, ", "Android, ", "Firebase"],
      desc: "Android app to maintain database of Toronto Asian Art Museum, developed as part of a 5 member team",
      picture: "/img/TAAM.png",
    },
    {
      id: 0,
      name: "UofT Course Website Remodel",
      languages: ["HTML, ", "Python, ", "CSS, ", "JavaScript, ", "SQLite, ", "Flask"],
      desc: "A remodel created along with a team for the UofT course, CSCB20 (Note: picture is a MOCK UP)",
      picture: "/img/mock.png",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>Rami Al-Azzawe</title>
        <meta name="description" content="Personal portfolio of Your Name" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <section
        id="projects"
        className="min-h-screen relative flex flex-col bg-gradient-to-b from-blue-950 to-blue-700 px-[5vw] py-[5vh]"
      >
        <div className="flex">
          <h1 className="text-center items-start justify-start text-white text-bold text-5xl mt-20 mb-5">
            {"{ projects }"}
          </h1>
        </div>
        {/*PROJECTS*/}

        {projects.map((project, index) => (
          <div>
            <h1 className="text-white mt-20 text-2xl text-bold">
              {"// "} {project.name}
            </h1>

            <div className="flex flex-row">
              <div className="mt-2 p-2 rounded-lg bg-gradient-to-tr from-gray-900 to-gray-700 border-4 border-transparent transition-colors duration-300 hover:border-white ">
                <div className="relative w-[300px] h-32">
                  <Image
                    src={project.picture}
                    alt="Project Picture"
                    fill
                    className="full border-gray-700 shadow-lg object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-white text-xl text-bold ml-5 mt-3">Skills: {project.languages}</p>
                <p className="text-white ml-5 mt-3">{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
        {/* PROJECTS END */}
      </section>
    </div>
  );
}
