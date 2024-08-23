import { Baloo_Paaji_2 } from "next/font/google";
import TiltImage from "./TiltImage";

// Import skill logos
import htmlLogo from "../assets/icons/html.png";
import cssLogo from "../assets/icons/css.png";
import jsLogo from "../assets/icons/js.png";
import jQueryLogo from "../assets/icons/jquery.png";
import bootstrapLogo from "../assets/icons/bootstrap.png";
import tailwindLogo from "../assets/icons/tailwind.svg";
import reactLogo from "../assets/icons/react.png";
import nextLogo from "../assets/icons/next.jpg";
import nodeLogo from "../assets/icons/node.png";
import mongodbLogo from "../assets/icons/mongodb.svg";

const balooPaaji = Baloo_Paaji_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const skills = [
  { name: "HTML", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "jQuery", logo: jQueryLogo },
  { name: "Bootstrap", logo: bootstrapLogo },
  { name: "Tailwind CSS", logo: tailwindLogo },
  { name: "React", logo: reactLogo },
  { name: "Next.js", logo: nextLogo },
  { name: "Node js", logo: nodeLogo },
  { name: "MongoDB", logo: mongodbLogo },
];

const Skills = () => {
  return (
    <div className="max-w-[1300px] py-10 mx-auto">
      <div className="text-center mb-8">
        <p className="font-light text-lg">What I Know?</p>
        <h2
          className={`${balooPaaji.className} text-4xl text-purple-800 font-bold`}
        >
          My Skills
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <TiltImage logo={skill.logo} name={skill.name} />
            <h3 className="mt-4 text-xl font-semibold text-gray-700">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
