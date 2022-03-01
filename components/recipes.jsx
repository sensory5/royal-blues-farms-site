export default function Recipes({title, text, children}) {
    return (
        <div className="container my-5 mb-0 mb-lg-5" id="featured-1">
            <div className="text-center text-white">
                <h2 className="text-uppercase fw-bold mb-0">{title}</h2>
                <p className="fw-bold mb-5">{text}</p>
            </div>
            <div className="row">
                {children}
            </div>
        </div>
    );
}
