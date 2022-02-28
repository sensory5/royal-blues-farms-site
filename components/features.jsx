export default function Features({title, children}) {
    return (
        <div className="container my-5" id="featured-1">
            <h2 className="pb-2">{title}</h2>
            <div className="row">
                {children}
            </div>
        </div>
    );
}
