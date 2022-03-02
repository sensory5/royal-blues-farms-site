import Image from "next/image";

export default function Feature({src, alt, title, children}) {
   return (
       <div className="feature col-lg-4 mb-4 mb-md-5 mb-lg-0">
           <div className="rbf-cols-blue-img">
               <Image
                 src={`/images/${src}`}
                 alt={alt}
                 width={764}
                 height={562}
               />
           </div>
           <div className="bg-info rbf-cols-blue p-3 p-xl-4 mx-3 mx-xl-4 text-center text-white">
              <h3 className="text-uppercase fw-bold">{title}</h3>
              {children}
          </div>
       </div>
   )
}
