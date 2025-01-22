import React from "react";
import logo1 from "./Asset/65eba5ffa14998827c92cc01_slack-octothorpe.png";
import logo2 from "./Asset/Pinterest-logo.png";
import logo3 from "./Asset/_shopping-512.webp";
import logo4 from "./Asset/atlassian-icon-512x512-2p7fz86w.png";
import logo5 from "./Asset/download (1).png";
import logo6 from "./Asset/download (2).png";
import logo7 from "./Asset/download (3).png";
import { FaArrowRight } from "react-icons/fa";

const HappyClients = () => {
  const blog = [
    {
      image: logo1,
    },
    {
      image: logo2,
    },
    {
      image: logo3,
    },
    {
      image: logo4,
    },
    {
      image: logo5,
    },
    {
      image: logo6,
    },
    {
      image: logo7,
    },
  ];

  return (
    <div className="bg-white text-center mb-16">
      <div className="font-bold text-4xl py-2 pt-9">Our Happy Clients</div>
      <div className="text-gray-400 text-sm pb-10">
        {" "}
        <>
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource- <br />
          leveling customer service for state of the art customer service.
        </>
      </div>
      <div className="flex justify-around flex-wrap">
        {blog.map((house, index) => (
          <div
            className="bg-white flex justify-center p-5 pb-10  lg:w-[352px] mx-auto cursor-pointer"
            key={index}
          >
            <div className="w-[100px] h-[100px] flex justify-center items-center rounded-full border-2">
              <img src={house.image} className="w-[80%] h-[80%] p-2"  alt={index} />
            </div>
          </div>
        ))}
      </div>

      <a
        className="flex items-center justify-center text-primary font-semibold px-4 py-2 ml-4 transition"
        href="/"
      >
        Show more
        <FaArrowRight className="ml-2 text-primary size-3" />
      </a>
    </div>
  );
};

export default HappyClients;
