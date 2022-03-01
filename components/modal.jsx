import Image from "next/image";

export default function Modal({src, alt, title, children}) {
   return (
          <div className="modal fade" id="recipeModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header pb-0 pt-2">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div className="modal-body">
                  <Image
                    src={`/images/${src}`}
                    alt={alt}
                    width={1200}
                    height={445}
                  />

                  <h3>{title}</h3>

                  <div className="row">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
   )
}
