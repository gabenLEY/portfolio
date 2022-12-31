
export default function Contact(){
    return (
        <div id="contact">
          <div className="mb-2 py-3">
            <h3 className="font-semibold text-3xl font-mono text-gray-500 -mb-1 text-center dark:text-slate-200">Get in touch</h3>
            <p className="text-1xl font-normal text-gray-400 text-center mb-2">We'd love to hear from you. Fill in the form and we'll get back to you shortly.</p>
          </div>
          <div className="mb-4 border p-2 rounded shadow dark:border-gray-500">
           <div className="grid grid-cols-1 gap-1 p-4">
             <div>
                <input type="email" className="appearance-none border border-gray-300 focus:ring-2 ring-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 dark:bg-slate-200 dark:placeholder:text-gray-700" id="username"  placeholder="Username" />
             </div>

             <div>
               <input type="text" className="appearance-none border border-gray-300 focus:ring-2 ring-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 dark:bg-slate-200 dark:placeholder:text-gray-700" id="username"  placeholder="exemple@mail.com" />
             </div>
           
             <div>
               <textarea className="appearance-none border border-gray-300 focus:ring-2 ring-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-200 dark:placeholder:text-gray-700"></textarea>
             </div>

             <div className="text-center mt-2">
                 <button className="bg-gradient-to-r from-indigo-500 to-purple-700 px-4 py-2 ml-2 text-slate-100 rounded-md hover:bg-cyan-600 hover:opacity-50 dark:bg-slate-200 focus:ring-2 focus:ring-slate-500">contact me</button>
             </div>
            
           </div>
          </div>
        </div>
    );
}