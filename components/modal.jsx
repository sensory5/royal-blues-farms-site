export default function Modal({id, children}) {
   return (
          <div className="modal fade" id={id} tabindex="-1" aria-labelledby={`${id}-label`} aria-hidden="true">
            <div className="modal-dialog modal-xl">
              <div className="modal-content bg-info text-white">
                <div className="modal-body">
                  <div className="rbf-btn-close">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                  </div>

                  {children}
                </div>
              </div>
            </div>
          </div>
   )
}
