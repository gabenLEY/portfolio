import Image from "next/image";
export default function Card(props){
    return (
       <div className="mb-4">
         <div className="p-3 border rounded shadow dark:border-gray-500">
             <div className="flex justify-center hover:rounded-lg">
                <Image src={props.img} className="rounded-lg hover:opacity-50 hover:cursor-pointer" />
             </div>
             <div className="mt-2 py-4">
               <p className="text-gray-600 text-2xl text-left font-semibold  hover:text-indigo-700 hover:cursor-pointer">{props.name}</p>
               <p className="text-2md text-gray-500 text-left">{props.description}</p>
             </div>
             <div>
             </div>
         </div>
       </div>
    );
}