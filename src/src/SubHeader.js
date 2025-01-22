import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function IconHeadings() {
  const headings = [
    {
      text: "Fill up Application Form",
      icon: <FaCheckCircle />,
      color: "#eb5757",
    },
    {
      text: "Make Online Payment",
      icon: <FaTimesCircle />,
      color: "#27ae60",
    },
    {
      text: "Executive Process Application",
      icon: <FaInfoCircle />,
      color: "#f2994a",
    },
    {
      text: "Get Confirm Mail",
      icon: <FaExclamationCircle />,
      color: "#828282",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center w-full p-8 bg-secondary justify-around gap-3">
      {headings.map((heading, index) => (
        <div key={index} className="w-[70%] lg:w-full flex  items-center mx-4">
          <div
            className="rounded-full p-3 flex items-center justify-center text-white mr-2 "
            style={{ backgroundColor: heading.color }}
          >
            {heading.icon}
          </div>
          <h2 className="text-l font-semibold pl-3">{heading.text}</h2>
        </div>
      ))}
    </div>
  );
}

export default IconHeadings;
