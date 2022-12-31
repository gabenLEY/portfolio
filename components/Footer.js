function Footer(){
    return(
         <div className="mt-8 mb-4 p-4">
            <p className="text-center text-gray-600 font-mono text-2md dark:text-slate-100">
                © {new Date().getFullYear()} Gabenley BienAime All rights reserved.
            </p>
         </div>
    );
}

export default Footer;
