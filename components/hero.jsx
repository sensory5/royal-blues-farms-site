import Image from "next/image";

export default function Hero({title, src, width, height, alt, children}) {
    return (
        <div className="row">
            <div className="px-4 py-2 my-4 text-center">
                <Image src={src} width={width} height={height} alt={alt} />
                <h1 className="display-5 fw-bold">{title}</h1>
                <div className="col-lg-6 mx-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}