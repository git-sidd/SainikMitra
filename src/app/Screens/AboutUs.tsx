import React from "react";
import Image from "next/image";
import aboutusImg from "../../../public/aboutusImg.png";
function AboutUs() {
  return (
    <div className=" flex flex-col justify-center items-center gap-4">
      <h1 className=" text-black text-2xl font-semibold text-center bg-gradient-to-r from-orange-200 via-white to-green-200 ... rounded-md w-[130px] p-1">
        About Us
      </h1>
      <div className="flex md:flex-row flex-col justify-around p-6 items-center gap-4 bg-black/50 rounded-md ">
        <div className="flex flex-col gap-4">
          {/* content  */}
          <h2 className="text-black text-xl font-semibold font-serif text-center hover:scale-110">
            Our Mission
          </h2>
          <p className="text-black font-sans text-center">
            Our mission is to provide a transparent and accessible platform
            where people can contribute directly to the well-being of soldiers'
            families. We aim to ensure that these families get the recognition
            and support they deserve, along with comprehensive information on
            various schemes that can aid their livelihood and well-being.
          </p>
          <h2 className="text-black text-xl font-semibold font-serif text-center hover:scale-110">
            Our Vision
          </h2>
          <p className="text-black font-sans text-center">
            We envision a society where the families of soldiers are empowered,
            financially supported, and well-informed about the resources
            available to them. We strive to bridge the gap between those who
            wish to contribute and those in need, fostering a community of
            gratitude and care for our soldiers’ families.
          </p>
        </div>
        <div className="w-1/3">
          {/* image */}
          <Image src={aboutusImg} height={400} width={600} alt="about us img" className=""></Image>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
