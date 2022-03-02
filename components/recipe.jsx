import Link from "next/link";
import Image from "next/image";

export default function Recipe({src, alt, target, children}) {
   return (
<<<<<<< HEAD
       <div className="col-lg-6 rbf-recipe mb-4 mb-lg-0">
         <div className="rbf-recipe-img">
            <a data-bs-toggle="modal" href={href}>
               <Image
                 src={`/images/${src}`}
                 alt={alt}
                 width={660}
                 height={470}
               />
            </a>
             <div className="rbf-recipe-modal text-center">
                {children}
            </div>
         </div>
=======
       <div className="col-md-6 rbf-recipe">
           <div className="rbf-recipe-img">
               <a data-bs-toggle="modal" data-bs-target={target} href="#">
                   <Image
                       src={`/images/${src}`}
                       alt={alt}
                       width={660}
                       height={470}
                   />
               </a>
               <div className="rbf-recipe-modal text-center">
                   {children}
               </div>
           </div>
>>>>>>> a798e5ad3c7f5ab84ada8a167ff12afbb82dba40
       </div>
   )
}
