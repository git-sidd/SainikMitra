import React from "react";
import Image from "next/image";
import aboutusImg from "../../../public/aboutusImg.png";

function AboutUs() {
  return (
    <div>
      {/* Background Video */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dr8jemvpw/video/upload/v1744148098/bgvid_lxcrhl.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        id="about"
        className="min-h-[60vh] flex flex-col justify-center items-center gap-6  pt-10 pb-14 "
      >
        {/* Header */}
        <div className="text-center">
        <h1 className="mt-4 text-black text-2xl font-semibold text-center bg-gradient-to-r from-orange-400 via-white to-green-400 rounded-md min-w-[130px] p-1 px-2">
          About Us
        </h1>
      </div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-black/70  shadow-2xl p-6 md:p-8  w-full">
          {/* Text Content */}
          <div className="flex flex-col gap-6 text-center md:text-left w-full md:w-2/3">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-2 hover:scale-105 transition-transform duration-300">
                Our Mission
              </h2>
              <p className="text-white text-base md:text-lg leading-relaxed">
                Our mission is to provide a transparent and accessible platform where people can contribute directly to the well-being of soldiers' families. We aim to ensure that these families get the recognition and support they deserve, along with comprehensive information on various schemes that can aid their livelihood and well-being.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-2 hover:scale-105 transition-transform duration-300">
                Our Vision
              </h2>
              <p className="text-white text-base md:text-lg leading-relaxed">
                We envision a society where the families of soldiers are empowered, financially supported, and well-informed about the resources available to them. We strive to bridge the gap between those who wish to contribute and those in need, fostering a community of gratitude and care for our soldiers’ families.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src={aboutusImg}
              alt="About Us Illustration"
              width={300}
              height={100}
              className="rounded-xl shadow-md object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
