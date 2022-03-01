import Image from "next/image";

export default function Divider({src, width, height, alt}) {
    return (
        <div className="container rbf-divider">
          <div className="row justify-content-center align-items-center mb-5">
              <div className="rbf-divider-line col-4 col-md-3"></div>
              <div className="rbf-divider-icon col-3 col-md-auto text-center mx-0 mx-md-4">
                  <Image src={`/images/${src}`} width={width} height={height} alt={alt} />
              </div>
              <div className="rbf-divider-line col-4 col-md-3"></div>
          </div>
        </div>
    );
}
