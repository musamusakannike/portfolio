"use client"
import Tilt from "react-parallax-tilt";
import Image from "next/image";

const TiltImage = ({logo, name}) => {
  return (
    <Tilt
      className="tilt-card"
      tiltMaxAngleX={25}
      tiltMaxAngleY={25}
      scale={1.1}
      transitionSpeed={2500}
    >
      <Image
        src={logo}
        alt={`${name} Logo`}
        width={80}
        height={80}
      />
    </Tilt>
  );
};

export default TiltImage;
