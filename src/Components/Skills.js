import React from "react";

export const Skills = () => {
  return (
    <section className="skill py-5 px-5 justify-center bg-secondary text-white font-intro-font">
      <h1 className="justify-center text-4xl border-b-4 mb-5 w-[100px]">Skills</h1>
      <div className="flex justify-around">
        <div className="frontend w-1/2">
          <h3 className="text-2xl border-b-4 mb-5 w-[135px]">FRONT-END</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Bootsratp</li>
          </ul>
        </div>
        <div className="backend w-1/2">
          <h3 className="text-2xl border-b-4 mb-5 w-[120px]">BACK-END</h3>
          <ul>
            <li>Node</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="database w-1/2">
          <h3 className="text-2xl border-b-4 mb-5 w-[120px]">DATABASE</h3>
          <ul>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
