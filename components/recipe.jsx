import Link from "next/link";
import Image from "next/image";

export default function Recipe({src, alt, href, children}) {
   return (
       <div class="col-md-6 rbf-recipe">
         <div className="rbf-recipe-img">
            <a data-toggle="modal" href={href}>
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
