import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "ASP.NET Core MVC Maestro",
          "AI Engineering Enthusiast",
          "Innovative Problem Solver",
          "Tech Explorer in ASP.NET and AI",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
