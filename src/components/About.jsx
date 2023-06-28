import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About me 
          </p>
        </div>
    
        <p className="text-xl">
         Now I am studying at Klabat University, faculty of Computer Science, Informatics study program.
         I come from a simple family. my mother is a teacher and my father is a pensioner. I am the youngest daughter of three siblings, my first brother is a male, he works as a lecturer and his second brother is also a male, he works as a private employee.
because my education is far from my parents but I am happy because I have many friends who are considered as my own relatives.
        </p>
      </div>
    </div>
  );
};

export default About;
