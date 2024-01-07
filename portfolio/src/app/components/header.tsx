// src/app/components/Header.tsx
import React from 'react';
import {
    AiFillLinkedin,
  } from "react-icons/ai";
import { FaGithub } from 'react-icons/fa';
import Image from "next/image";
import atti from '../../../public/atti.jpeg'; // Adjust the import path


const Header = () => {
  return (
    <section className="min-h-screen">
      <nav className="py-10 mb-12 flex justify-between dark:text-white">
        <h1 className="font-burtons text-xl font-bold">Atti Rehman</h1>
        <ul className="flex items-center">
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 border-none rounded-md ml-8 font-bold text-lg tracking-wider"
              href="#"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 border-none rounded-md ml-8 font-bold text-lg tracking-wider"
              href="#"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 border-none rounded-md ml-8 font-bold text-lg tracking-wider"
              href="#"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </nav>
      <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Atti Rehman
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Enginner | Microsoft Certified: Power BI Data Analyst
            </h3>
            <p className="text-xl py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl tracking-wider">
                Experienced Software Engineer skilled in SaaS development and a Microsoft Certified Power BI Data Analyst. Proactive in optimizing network connectivity trials.
            </p>
            <div className="text-5xl flex justify-center gap-12 py-3 text-gray-600 dark:text-gray-400">
                <a
                    href="https://www.linkedin.com/in/attirehman"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillLinkedin />
                </a>
                <a
                    href="https://github.com/AttiR"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
            <Image src={atti} layout="fill" objectFit="cover" alt="Atti Rehman" />
            </div>
          </div>
    </section>
  );
};

export default Header;
