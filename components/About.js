import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { TypeAnimation } from 'react-type-animation';
// import  Link  from "next/Link";
import img from "../public/gaben.jpg";
import { FaArrowDown, FaArrowCircleDown } from "react-icons/fa";
import Image from "next/image";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Paginate from "./Paginate";

export default function About(){
    return (
        <div className="text-center mb-4">
         
          <div className="">
            <p className="text-xl font-mono text-gray-600 font-semibold dark:text-slate-200">Hi🤗, i am</p>
            <p className="font-bold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-700 font-mono">Gabenley Bien Aime</p>
            <p className="text-xl text-gray-400 -tracking-tighter font-semibold dark:text-slate-300">Software developer</p>
          </div>

          <div className="p-2 text-lg font-mono font-medium text-gray-600 text-center whitespace-normal dark:text-slate-400">

             <p>CEO and Founder at <Link href="/"><span className="font-mono -tracking-tighter text-sky-500 cursor-pointer">@Voyekat</span></Link>, i am a software developer that undertand building app </p>
           
          </div>

          <div className="flex justify-center text-3xl gap-4">
            <Link href="#">
               <AiFillTwitterCircle className=" text-gray-700 hover:text-indigo-600 hover:text-4xl dark:text-slate-300 dark:hover:text-indigo-600"/>
            </Link>
            
             <Link href="#">
                <AiFillLinkedin className=" text-gray-700 hover:text-indigo-600 hover:text-4xl dark:text-slate-300 dark:hover:text-indigo-600"/>
             </Link>
           
             <Link href="#">
               <AiFillYoutube className=" text-gray-700 hover:text-indigo-600 hover:text-4xl dark:text-slate-300 dark:hover:text-indigo-600"/>
             </Link>
          </div>

          <div className="flex justify-center p-5">
            <Image 
            src={img} className="w-1/2 rounded-tr-lg rounded-bl-lg shadow-lg border-slate-200 border-2 hover:ring-2 hover:bg-gradient-to-r hover:from-indigo-700 hover:to-violet-400" 
            />
          </div>

           <Paginate id='project' />

        </div>
    );
}