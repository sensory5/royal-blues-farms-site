import Link from "next/link";
import Image from "next/image";

export default function Recipe({src, alt, href, children}) {
   return (
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
       </div>
   )
}
