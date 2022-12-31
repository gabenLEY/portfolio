import { FaArrowDown, FaArrowCircleDown } from "react-icons/fa";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function Paginate(props){
    return(
      <div className="flex justify-center text-3xl text-indigo-600 animate-bounce mb-3 mt-8 dark:text-slate-300">
         <Link href="#"  to={props.id}
               spy={true}
               smooth={true}
               hashSpy={true}
               offset={50}
               duration={500}>
            <FaArrowCircleDown 
            className="shadow-lg shadow-indigo-700 rounded-full ring-2 ring-indigo-600 cursor-pointer dark:ring-slate-200 dark:shadow-slate-200 dark:shadow-sm" 
            />
          </Link>
       </div>
    );
}

export default Paginate;