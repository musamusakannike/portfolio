"use client"
import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

// Import tech logos
import htmlLogo from "../assets/icons/html.png";
import cssLogo from "../assets/icons/css.png";
import jsLogo from "../assets/icons/js.png";
import jQueryLogo from "../assets/icons/jquery.png";
import bootstrapLogo from "../assets/icons/bootstrap.png";
import tailwindLogo from "../assets/icons/tailwind.svg";
import reactLogo from "../assets/icons/react.png";
import nextLogo from "../assets/icons/next.jpg";

export const projects = [
  {
    id: 1,
    title: "Creator",
    description: "An AI powered tool for content creators.",
    image: "/projects/project1.png",
    link: "https://creator-helper.vercel.app/",
    tech: [nextLogo, cssLogo, tailwindLogo],
  },
  {
    id: 2,
    title: "Graphic Designer Portfolio",
    description:
      "A portfolio website for a graphic designer. Design from Figma.",
    image: "/projects/project2.png",
    link: "https://mock-portfolio-rose.vercel.app/",
    tech: [reactLogo, bootstrapLogo, cssLogo],
  },
  {
    id: 3,
    title: "Finance",
    description: "A landing page for an imaginary crypto project.",
    image: "/projects/project3.png",
    link: "https://financo.vercel.app/",
    tech: [htmlLogo, cssLogo, jsLogo, bootstrapLogo],
  },
  {
    id: 4,
    title: "Virtuals",
    description: "A landing page for a tech-related organization.",
    image: "/projects/project4.png",
    link: "https://virtuals-build.vercel.app/",
    tech: [htmlLogo, cssLogo],
  },
  {
    id: 5,
    title: "CryptoDucklings",
    description:
      "A landing page for CryptoDucklings, a crypto trading project.",
    image: "/projects/project5.png",
    link: "https://crypto-ducklings.vercel.app/",
    tech: [reactLogo, bootstrapLogo, cssLogo],
  },
  {
    id: 6,
    title: "WatchWave",
    description:
      "A movie app with movie search functionality, trending movies, TV series, and many more.",
    image: "/projects/project6.png",
    link: "https://watch-wave2.vercel.app/",
    tech: [reactLogo, bootstrapLogo, cssLogo],
  },
  {
    id: 7,
    title: "PimpWif",
    description: "A landing page website for PimpWif, a crypto project.",
    image: "/projects/project7.png",
    link: "https://pimpwif.vercel.app/",
    tech: [bootstrapLogo, reactLogo, cssLogo],
  },
  {
    id: 8,
    title: "Captain Levi Portfolio",
    description: "A portfolio website for Captain Levi, a community manager.",
    image: "/projects/project8.png",
    link: "https://captain-levi.vercel.app/",
    tech: [reactLogo, bootstrapLogo, cssLogo],
  },
  {
    id: 9,
    title: "Musa Musa Kannike",
    description: "A portfolio website for Musa Kannike.",
    image: "/projects/project9.png",
    link: "https://musamusakannike.vercel.app/",
    tech: [htmlLogo, cssLogo, jsLogo, jQueryLogo, bootstrapLogo],
  },
];
const Portfolio = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
    return (
      <div id="portfolio" className="max-w-[1300px] py-10 mx-auto">
        <div className="text-center mb-8">
          <p className="font-light text-lg">My Work</p>
          <h2 className="text-4xl text-purple-800 font-bold">Portfolio</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-700">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <div className="flex items-center mt-4 space-x-2">
                    {project.tech.map((tech, idx) => (
                      <Image
                        key={idx}
                        src={tech}
                        alt={`${project.title} Tech`}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                      />
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;