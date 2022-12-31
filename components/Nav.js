import { BsFillMoonStarsFill } from "react-icons/bs";
export default function Nav(props) {
  return (
    <>
       <nav className="flex justify-between py-10 mb-12 ">
            <h1 className="text-2xl font-mono uppercase font-bold text-gray-700 dark:text-slate-100">Gabenley</h1>
            <ul className="flex items-center">
                <li className="mr-2">
                  <BsFillMoonStarsFill onClick={props.fun} className="text-2xl  cursor-pointer text-gray-700 dark:text-slate-100" />
                </li>
                <li>
                   <a href="#" className="bg-gradient-to-r from-indigo-500 to-purple-700 px-4 py-2 ml-2 text-slate-100 rounded-md hover:bg-cyan-600 hover:opacity-50">Resume</a>
                </li>
            </ul>
        </nav>
    </>
  )
}
