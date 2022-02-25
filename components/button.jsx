export default function Button({id, href, className, children}) {
    const browseTo = () => {
        window.location.href = href;
    }
    return (
        <button id={id} onClick={() => browseTo()} className={className}>
            {children}
        </button>
    );
}
