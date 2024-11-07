"use client"

import React from "react";

const Button = () => {
  return (
    <div className="mt-12">
      <button
        className="px-3 py-2 rounded-md bg-green-600"
        onClick={() => console.log("i have cli")}
      >
        click here
      </button>
    </div>
  );
};

export default Button;
