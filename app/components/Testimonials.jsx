"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Usman Abeeb",
    feedback:
      "Working with Musa was a fantastic experience. His attention to detail is unparalleled!",
    image: "/testimonials/bibson.jpg",
    role: "CEO, Century Tech",
  },
  {
    id: 2,
    name: "Captain Levi",
    feedback:
      "Musa delivered beyond my expectations. His expertise in web development is top-notch.",
    image: "/testimonials/captain_levi.png",
    role: "Team Lead, Dark Durov CTO",
  },
  {
    id: 3,
    name: "Jimoh Abdullah",
    feedback:
      "Professional, efficient, and creative. Musa brings great ideas to the table.",
    image: "/testimonials/michael_brown.jpg",
    role: "Community Manager, Startup",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="max-w-[1300px] mx-auto py-10">
      <div className="text-center mb-8">
        <p className="font-light text-lg">What People Say</p>
        <h2 className="text-4xl text-purple-800 font-bold">Testimonials</h2>
      </div>
      <div className="max-w-[750px] mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col justify-center items-center p-6 bg-white rounded-lg shadow border border-gray-500 max-w-[750px] mx-auto"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              <p className="text-gray-700 text-lg italic mb-4">
                "{testimonial.feedback}"
              </p>
              <h3 className="text-xl font-semibold text-purple-800">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
