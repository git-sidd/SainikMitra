import ImagesSliderDemo  from "./imageslider/page";
import AboutUs from "./about/page";
import Contribute from "./contribute/page";
import Gallery from "./gallery/page";

import Certificate from "./getcertificate/page";
import Schemes from "./schemes/page";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dr8jemvpw/video/upload/v1744148098/bgvid_lxcrhl.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content that scrolls */}
      <div className="relative z-10">
        <ImagesSliderDemo />
        <AboutUs />
        <div id="contribute" className="flex flex-col justify-center items-center my-4 gap-4">
          <div className="w-full justify-center items-center flex flex-col gap-4 rounded-md">
            <Contribute />
           
          </div>
        </div>
        
        <Gallery />
        
        
      </div>
    </div>
  );
}
