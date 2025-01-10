import React from "react";
import NavBar from "../components/NavBar";
import Head from "next/head";


export default function Home() {
    const projects = [{"id": 0, "name": " ", "languages": [], "picture": "" },
    {"id": 0, "name": " ", "languages": [], "picture": "" },
    {"id": 0, "name": " ", "languages": [], "picture": "" },
    {"id": 0, "name": " ", "languages": [], "picture": "" },
  ]
    return (
        <div className="min-h-screen bg-gray-900">
        <Head>
          <title>Rami Al-Azzawe</title>
          <meta name="description" content="Personal portfolio of Your Name" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <NavBar/>
        <section
        
        id="about"
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-950 to-blue-700 px-[5vw] py-[5vh]"
      >
        <h1 className="text-center items-center justify-center text-white text-bold text-xl">Coming Soon!</h1>

        
        </section>
        </div>
    )
}