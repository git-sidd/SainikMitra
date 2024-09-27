import Image from "next/image";
import { ImagesSliderDemo } from "./Screens/ImageSlider";
import AboutUs from "./Screens/AboutUs";
import { Contribute } from "./Screens/Contribute";

export default function Home() {
  return (
    <div>
      <ImagesSliderDemo />
      <AboutUs />
      <div className="flex flex-col justify-center items-center my-4 gap-4 ">
        <div className="text-center">
          <h1 className=" text-black text-2xl font-semibold text-center bg-gradient-to-r from-orange-200 via-white to-green-200 ... rounded-md min-w-[130px] p-1 px-2">
            Contribute
          </h1>
        </div>
        <div className="bg-black/50  w-full justify-center items-center flex flex-col gap-4 rounded-md">
          <Contribute />
          <button className="cursor-pointer z-20 bg-green-500 p-1 px-2 rounded-md mb-4">More..</button>
        </div>
      </div>
    </div>
  );
}
