import React from "react";

interface ButtonProps {
  onClick?: any;
  children?: any;
  type?: string;
}

export default function Button({ onClick, children, type = "" }: ButtonProps) {
  if (type === "contained") {
    return (
      <button
        className="flex w-[16rem] items-center  justify-center gap-2 rounded-full bg-gray-900 px-8 py-2.5 capitalize text-gray-50 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:font-semibold"
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else if (type === "outlined") {
    return (
      <button
        className="flex items-center justify-center gap-2 rounded-full border border-red-600 px-8 py-2.5 font-semibold capitalize text-red-600 transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-gray-50"
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return null; // or return a default button component
  }
}
