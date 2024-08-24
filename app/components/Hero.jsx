import { Baloo_Paaji_2 } from 'next/font/google';

const balooPaaji = Baloo_Paaji_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Hero = () => {
  return (
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        background:
          "url(/header.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="w-[80%] md:w-auto">
        <h3 className={`${balooPaaji.className} text-gray-800 text-3xl sm:text-4xl lg:text-5xl font-bold animate__animated animate__fadeInUp `}>HI!</h3>
        <h1 className={`${balooPaaji.className} text-gray-800 text-4xl sm:text-5xl lg:text-7xl font-bold animate__animated animate__fadeInUp animate__delay-1s`}>I am Musa Musa K</h1>
        <p className='text-gray-800 animate__animated animate__fadeInUp animate__delay-2s'>FRONTEND WEB DEVELOPER</p>
        <button className='bg-purple-800 px-5 py-3 text-white rounded-full hover:bg-purple-600 mt-4 animate__animated animate__fadeInUp animate__delay-2s'><a href='#portfolio'>VISIT MY WORKS</a></button>
      </div>
    </div>
  );
};

export default Hero;
