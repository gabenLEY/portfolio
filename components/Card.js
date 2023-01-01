import Image from "next/image";
export default function Card(props){
    return (
       <div className="mb-4 lg:mr-4 lg:p-4 lg:min-w-full lg:w-80">
         <div className="p-3 border rounded shadow dark:border-gray-500">
             <div className="flex justify-center hover:rounded-lg">
                <Image src={props.img} className="rounded-lg hover:opacity-50 hover:cursor-pointer" />
             </div>
             <div className="mt-2 py-4">
               <p className="text-indigo-700 text-2xl text-left font-semibold  hover:text-indigo-700 hover:cursor-pointer">{props.name}</p>
               <p className="text-2md text-gray-500 text-left">{props.description}</p>
             </div>
             <div className="text-left">
              <button className="text-slate-200 bg-indigo-700 text-sm uppercase px-3 py-1 rounded hover:bg-indigo-600 focus:ring-2">read more</button>
             </div>
         </div>
       </div>
    );
}