"use client";
// Define the type for project items
export type Project = {
  title: string;
  description: string;
  src: string;
};

// Export the projects array directly
export const projects: Project[] = [
  {
    title: "",
    description: "A technology company that builds economic infrastructure for the internet.",
    src: "https://bharatkeveer.gov.in/media?imageId=42",
  },
  {
    title: "",
    description: "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    src: "https://bharatkeveer.gov.in/media?imageId=34",
  },
  {
    title: "",
    description: "A multinational technology company that specializes in Internet-related services and products.",
    src: "https://bharatkeveer.gov.in/media?imageId=43",
  },
  {
    title: "",
    description: "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    src: "https://bharatkeveer.gov.in/media?imageId=41",
  },
  {
    title: "",
    description: "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    src: "https://bharatkeveer.gov.in/media?imageId=38",
  },
  {
    title: "",
    description: "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    src: "https://bharatkeveer.gov.in/media?imageId=57",
  },
];

import { HoverEffect } from "../components/ui/card-hover-effect";
// Export the default function for Gallery
export default function Gallery() {
  return (
    <div id="gallery" className="w-full mx-auto px-8 flex flex-col items-center justify-center bg-black/70">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dr8jemvpw/video/upload/v1744148098/bgvid_lxcrhl.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="text-center">
        <h1 className="mt-4 text-black text-2xl font-semibold text-center bg-gradient-to-r from-orange-400 via-white to-green-400 rounded-md min-w-[130px] p-1 px-2">
          Gallery
        </h1>
      </div>
      <HoverEffect items={projects} />
    </div>
  );
}
