import Image from "next/image";
import { Baloo_Paaji_2 } from "next/font/google";

const balooPaaji = Baloo_Paaji_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const AboutMe = () => {
  return (
    <div className="max-w-[1300px] mx-auto py-5">
      <div className="md:grid" style={{ gridTemplateColumns: "2fr 3fr" }}>
        <div className="h-full flex justify-center items-center py-3 px-1">
          <Image src="/musa.png" alt="" width={500} height={500} />
        </div>
        <div className="h-full flex flex-col justify-center items-start py-3 px-2">
          <div className="">
            <p className="font-light">Who am I?</p>
            <h1
              className={`${balooPaaji.className} text-4xl text-purple-800 font-bold`}
            >
              About Me
            </h1>
            <p>
              Hi, I am Musa Musa Kannike, a dedicated web developer with a
              strong focus on both frontend and backend technologies. I
              specialize in building responsive web applications using React.js,
              Next.js, Node.js, and other modern tools.
            </p>
            <p>
              With a passion for creating seamless user experiences and
              efficient backend systems, I am always eager to learn and apply
              the latest in web development. Let’s connect and build something
              great together!
            </p>
          </div>
          <a
            href="/resume.pdf" download={"/resume.pdf"}
            className="mt-5 py-3 px-4 rounded-full border text-purple-800 border-purple-800 hover:bg-purple-800 hover:text-white"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
