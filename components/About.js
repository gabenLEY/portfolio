import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation';
// import  Link  from "next/Link";
import img from "../public/gaben.jpg";
import { FaArrowDown, FaArrowCircleDown, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Paginate from "./Paginate";

export default function About(){
    return (
        <div className="text-center mb-4">
         
          <div className="">
            <p className="text-xl font-mono text-gray-600 font-semibold dark:text-slate-200">Hi🤗, i am</p>
            <p className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-700 font-mono">Gabenley Bien Aime</p>
            <p className="text-1xl text-gray-400 -tracking-tighter font-semibold dark:text-slate-100">Software developer</p>
          </div>

          <div className="flex justify-center p-2 text-md text-1xl font-mono font-medium text-gray-600 text-center whitespace-normal dark:text-slate-400  lg:min-w-full">

             <p className="lg:px-20 break-normal">CEO and Founder at <a href="https://www.instagram.com/voyekat/"><span className="font-mono -tracking-tighter text-sky-500 cursor-pointer">@Voyekat</span></a>, Knowing how to identify the needs of users is one of my advantages, that why my creations are used every day by users around the world. </p>
           
          </div>

          <div className="flex justify-center text-3xl gap-4">
            <a href="https://twitter.com/GabenleyAime?t=yi12Bz7i9wMMF0t2lZtmbQ&s=09" to="#">
               <AiFillTwitterCircle className=" text-gray-700 hover:text-indigo-600 hover:text-4xl dark:text-slate-300 dark:hover:text-indigo-600 focus:bg-indigo-700"/>
            </a>
            
             <a href="https://www.linkedin.com/in/gabenley" to="#">
                <AiFillLinkedin className=" text-gray-700 hover:text-indigo-600 hover:text-4xl dark:text-slate-300 dark:hover:text-indigo-600 focus:bg-indigo-700"/>
             </a>
           
             <a href="https://github.com/gabenLEY" to="#">
               <FaGithub className=" text-gray-700 hover:text-indigo-600 hover:text-4xl dark:text-slate-300 dark:hover:text-indigo-600 focus:bg-indigo-700"/>
             </a>
          </div>

          <div className="flex justify-center p-5">
            <Image 
            src={img} className="w-1/2 rounded-tr-lg rounded-bl-lg shadow-lg border-slate-200 border-2 hover:ring-2 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-violet-400 lg:w-40" 
            />
          </div>

           <Paginate id='project' />

        </div>
    );
}