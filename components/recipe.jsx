import Image from "next/image";

export default function Recipe({src, alt, children}) {
   return (
       <div class="col-md-6 rbf-recipe">
         <div className="rbf-recipe-img">
             <Image
               src={`/images/${src}`}
               alt={alt}
               width={660}
               height={470}
             />
             <div className="text-center">
                {children}
            </div>
         </div>
       </div>
   )
}
