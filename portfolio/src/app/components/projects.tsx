import React from 'react';
import Image from "next/image";
import web from '../../../public/design.png';
import data from '../../../public/data.png';
import devops from '../../../public/Devops.png';

const Projects = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white">Projects</h3>
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
        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">

                {/* Image takes full width of the div */}
                <div className="w-full">
                    <Image className="mx-auto" src={web} width={400} height={400} alt="web image" />
                </div>


                <p className="py-2">
                    Crafting sophisticated web solutions tailored to your requirements, employing a foundation in core design principles.
                </p>

                {/* Buttons with equal width using flex-1 */}
                <div className="flex justify-between mt-4 gap-20">
                    <a href="#live-preview" className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Live Preview
                    </a>
                    <a href="#code" className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
                        Code
                    </a>
                </div>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">

                {/* Image takes full width of the div */}
                <div className="w-full">
                    <Image className="mx-auto" src={web} width={400} height={400} alt="web image" />
                </div>

                <p className="py-2">
                    Crafting sophisticated web solutions tailored to your requirements, employing a foundation in core design principles.
                </p>

                {/* Buttons with equal width using flex-1 */}
                <div className="flex justify-between mt-4 gap-20">
                    <a href="#live-preview" className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Live Preview
                    </a>
                    <a href="#code" className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
                        Code
                    </a>
                </div>
        </div>

        <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">

                {/* Image takes full width of the div */}
                <div className="w-full">
                    <Image className="mx-auto" src={web} width={400} height={400} alt="web image" />
                </div>


                <p className="py-2">
                    Crafting sophisticated web solutions tailored to your requirements, employing a foundation in core design principles.
                </p>

                {/* Buttons with equal width using flex-1 */}
                <div className="flex justify-between mt-4 gap-20">
                    <a href="#live-preview" className="flex-1 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Live Preview
                    </a>
                    <a href="#code" className="flex-1 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded">
                        Code
                    </a>
                </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;
