import Card from "./Card";
import Paginate from "./Paginate";
import img1 from "../public/web1.png";
import img2 from "../public/web2.png";
export default function Project(){
    return (
     <div className="text-center mt-2" id="project">
        <div className="py-6">
         <p className="text-xl mb-3 text-indigo-700 font-bold dark:text-slate-300">What i do?</p>
         <p className="text-2xl mb-3 text-gray-900  font-burtons uppercase dark:text-slate-400">My Best Realization</p>
         <p className="text-2sm font-normal text-gray-500 tracking-tighter dark:text-slate-300">They are software that is used every day by users from all over the world.</p>
      </div>

      <div className="lg:flex lg:justify-center">
         <Card 
         img={img1} 
         name="What OP" 
         description="It is a web application made in PHP (Laravel) and Vue JS, the app is used to send money to more than 100 countries."/>
         <Card 
         img={img2} 
         name="RechajPAM" 
         description="Web application made in Python (Django) and React JS, the app is used to send mobile recharge to more than 600 operators"/>
      </div>
     
      <Paginate id='contact'/>
     </div>
    );
}