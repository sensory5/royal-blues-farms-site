export default function Recipes({title, text, children}) {
    return (
        <div className="container my-5" id="modals-1">
            <div className="text-center text-white">
                <h2 className="text-uppercase fw-bold mb-0">{title}</h2>
                <p className="fw-bold mb-4 mb-md-5">{text}</p>
            </div>
            <div className="row">
                {children}
            </div>
        </div>
    );
}
