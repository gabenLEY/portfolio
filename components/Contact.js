import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Success from './Success';
export default function Contact(){
  const form = useRef();

  const [show, setShwo] = useState(false)
  const [name, setName] = useState(' ')
  
  const sendEmail = (e) => {
    e.preventDefault();

    function change(){
       
    }

    alert("Hello Gabenley")

    emailjs.sendForm("service_9vxxnsd", "template_hid93aj", form.current, "OEvbZFV7yi4j1L_1P")
      .then((result) => {
          console.log(result.text);
          setShwo(true)
          setName(' ');
          // setuseremail("");
          // setusermessage("");
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div id="contact">
          
         <form ref={form} onSubmit={sendEmail}>
           <div className="mb-2 py-3">
            <h3 className="font-semibold text-3xl font-mono text-gray-500 -mb-1 text-center dark:text-slate-200">Get in touch</h3>
            <p className="text-1xl font-normal text-gray-400 text-center mb-2">We'd love to hear from you. Fill in the form and we'll get back to you shortly.</p>
          </div>

          <div className="lg:flex lg:justify-center">
             <div className="mb-4 border p-2 rounded shadow dark:border-gray-500 lg:min-w-full lg:w-80">
           
           <div className="grid grid-cols-1 gap-1 p-4">
             <div>
             {show  ? <Success message="Message Received" /> :" "}
             </div>

             <div>
               <input type="email" name="from_name" className="appearance-none border border-gray-300 focus:ring-2 ring-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 dark:bg-slate-200 dark:placeholder:text-gray-700" id="email"  placeholder="Add your name" />
             </div>

             <div>
               <input type="email" name="from_email" className="appearance-none border border-gray-300 focus:ring-2 ring-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 dark:bg-slate-200 dark:placeholder:text-gray-700" id="email"  placeholder="exemple@mail.com" />
             </div>
           
             <div>
               <textarea name="message" className="appearance-none border border-gray-300 focus:ring-2 ring-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:bg-slate-200 dark:placeholder:text-gray-700"></textarea>
             </div>

             <div className="text-center mt-2">
                 <button type="submit" className="font-mono bg-gradient-to-r from-indigo-500 to-purple-700 px-4 py-2 ml-2 text-slate-100 rounded-md hover:bg-cyan-600 hover:opacity-50 dark:bg-slate-200 focus:ring-2 focus:ring-slate-500">contact me</button>
             </div>
            
           </div>
         
          </div>
          </div>
          
         </form>
        </div>
    );
}