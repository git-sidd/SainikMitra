"use client";
import { useState } from "react";
import Link from "next/link";
type Scheme = {
  title: string;
  description: string;
  url:string
};

const schemes: Scheme[] = [
  {
    title: "health scheme and insurance",
    description:
      "This scheme provides comprehensive health coverage and life insurance benefits to the families of serving and retired armed forces personnel",
    url:"https://www.echs.gov.in/assets/General%20SOP/CO%20ECHS%20COMPENDIUM%202022.pdf?utm_source=chatgpt.com"
  },
  {
    title: "Prime Minister Scholarship Scheme (PMSS)",
    description:
      "Scholarships for children of ex-servicemen/martyrs pursuing higher education in professional streams like engineering, medicine, etc.",
      url:"https://www.warb-mha.gov.in/pdf/PMSS_Guidelines-2024-25.pdf?utm_source=chatgpt.com"
  },
  {
    title: "pension and finance assistance",
    description:
      "This scheme ensures financial stability for the families of martyred, disabled, and retired soldiers by providing.",
      url:"https://cgda.nic.in/audit/pensioners_guide.pdf?utm_source=chatgpt.com"
  },
  {
    title: "housing schemes",
    description:
      "This scheme ensures financial stability for the families of martyred, disabled, and retired soldiers by providing.",
      url:"https://pmay-urban.gov.in/uploads/guidelines/Operational-Guidelines-of-PMAY-U-2.pdf?utm_source=chatgpt.com"
  },
  {
    title: "gov job reservation",
    description:
      "This scheme ensures financial stability for the families of martyred, disabled, and retired soldiers by providing.",
      url:"https://www.drishtiias.com/state-pcs-current-affairs/government-policy-on-providing-gov-jobs-to-the-family-members-of-martyred-jawans?utm_source=chatgpt.com"
  },
];

export default function Schemes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" relative min-h-screen bg-black/70 py-12 px-4 flex flex-col items-center text-black">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dr8jemvpw/video/upload/v1744148098/bgvid_lxcrhl.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="mt-4 mb-4 text-black text-2xl font-semibold text-center bg-gradient-to-r from-orange-400 via-white to-green-400 ... rounded-md min-w-[130px] p-1 px-2">
        Government Schemes for Soldiers’ Families 
      </h1>
      

      <div className="w-full max-w-3xl space-y-6">
        {schemes.map((scheme, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-l-4 border-orange-500 transition-all duration-300"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left px-6 py-4 bg-orange-100 hover:bg-orange-200 text-lg font-semibold flex justify-between items-center"
            >
              {scheme.title}
              <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-4">{scheme.description}</p>
                <button
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow-md transition"
                 
                >
                 <Link href={scheme.url}>Apply Now</Link>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
