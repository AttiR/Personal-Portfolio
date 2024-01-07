import React from 'react';
import Image from "next/image";
import design from '../../../public/design.png';
import code from '../../../public/code.png';
import consulting from '../../../public/consulting.png';

const Skills = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Skills / Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Experienced Software Engineer adept at SaaS product development using
          <span className="text-teal-500"> Python, Dash Plotly, React, SQL, Firebase </span>
          and <span className="text-teal-500"> Azure. </span>
          Specialized in crafting end-to-end solutions, from planning to deployment.
          Proficient Data Analyst in
          <span className="text-teal-500"> Power BI </span>, transforming data into actionable insights.
          Mobile Network RAN PoC Analyst with a knack for optimizing connectivity trials.
          Proactive and innovative tech enthusiast.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        I provide a diverse set of services, encompassing web development,
        data analytics using Power BI, and technical consulting for effective data management and database solutions
        </p>
      </div>
      <div className="lg:flex gap-10">
        {/* Design Section */}
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={design} width={100} height={100} alt="design image"/>
          <h3 className="text-lg font-medium pt-8 pb-2  ">
            Beautiful Designs
          </h3>
          <p className="py-2">
            Creating elegant designs suited for your needs following core design theory.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>

        {/* Code Section */}
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={code} width={100} height={100} alt="code image"/>
          <h3 className="text-lg font-medium pt-8 pb-2 ">
            Code your dream project
          </h3>
          <p className="py-2">
            Do you have an idea for your next great website? Lets make it a reality.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>

        {/* Consulting Section */}
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
          <Image src={consulting} width={100} height={100} alt="consulting image"/>
          <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
          <p className="py-2">
            Are you interested in feedback for your current project? I can give you tips and tricks to level it up.
          </p>
          <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Illustrator</p>
          <p className="text-gray-800 py-1">Figma</p>
          <p className="text-gray-800 py-1">Indesign</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
