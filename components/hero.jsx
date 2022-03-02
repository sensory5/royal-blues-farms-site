import Image from "next/image";

export default function Hero({srcLogo, widthLogo, heightLogo, altLogo, src, alt}) {
    return (
        <div className="rbf-hero">
            <div className="rbf-hero-img">
                <Image src={`/images/${src}`} layout="fill" objectFit="cover" alt={alt} />
            </div>
            <div className="rbf-hero-overlay p-4 text-center">
                <Image src={`/images/${srcLogo}`} width={widthLogo} height={heightLogo} alt={altLogo} />
            </div>
        </div>
    );
}
