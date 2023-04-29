import { BsFillMoonStarsFill } from "react-icons/bs";
import About from '../components/About'
import Head  from "next/Head";
import Nav from '../components/Nav';
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer  from "../components/Footer";
import { useState } from "react";
export default function Home() {
   const [darkMode, setdarMode] = useState(true)
  
  return (
    <div className={darkMode ? "dark" : ""}>
    <Head>
       <title>Gabenley-Portofolio</title>
       <meta name="description" content="Gabenley oficial website"></meta>
    </Head>
    <main className=" bg-white dark:bg-gray-800">
    <section className="min-h-screen">
       <Nav fun={() => setdarMode(!darkMode)}/>
       <About />
       <Project />
       <Contact />
       <Footer />
    </section>
    </main>
   </div>
  )
}
