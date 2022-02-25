export default function Feature({title, icon, href, hrefLabel, children}) {
   return (
       <div className="feature col">
           <div className="d-flex align-items-center justify-content-center mb-1 fs-2 rounded-3 bg-primary bg-gradient text-white"
                style={{width: "4rem", height: "4rem"}}>
               <i className={`bi ${icon}`} />
           </div>
           <h2>{title}</h2>
           {children}
           <a href={href} className="icon-link">
               {hrefLabel}
               <i className="bi bi-chevron-right"/>
           </a>
       </div>
   )
}