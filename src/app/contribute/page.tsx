"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import { Input } from "../components/ui/input";

export default function Contribute() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 bg-black/70 ">
       <div className="fixed top-0 left-0 w-full h-full -z-10">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/dr8jemvpw/video/upload/v1744148098/bgvid_lxcrhl.mp4" type="video/mp4" />
        </video>
      </div>
      <h1 className="mt-4 text-black text-2xl font-semibold text-center bg-gradient-to-r from-orange-400 via-white to-green-400 ... rounded-md min-w-[130px] p-1 px-2">
            Martyrs
          </h1>
          <Input id="lastname" placeholder="Search.." type="text" className=""  />
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0  bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-4 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6 "
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-auto scrollbar-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className=" mx-auto md:w-full w-[300px] grid grid-cols-1 md:grid-cols-4 items-start gap-6 my-4 rounded-md">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col  bg-black/20 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col  w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full  rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-400 text-center md:text-center text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
      
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Captain Vikram Batra",
    title: "Indian Army officer",
    src: "https://upload.wikimedia.org/wikipedia/en/5/56/Vikram_Batra_PVC.jpg",
    ctaText: "Contribute ",
    ctaLink: "/login",
    content: () => {
      return (
        <div className="mb-1">
          <h2 className="font-semibold font-serif text-orange-500">Incident</h2>
          <p className=" md:overflow-visible">
          ​Captain Vikram Batra, an officer of the Indian Army, displayed extraordinary valor during the Kargil War of 1999. He played a pivotal role in recapturing strategic points from enemy forces, notably Point 5140 and Point 4875. ​
On July 7, 1999, during the operation to reclaim Point 4875, Captain Batra's unit encountered intense enemy resistance. Amidst the battle, he noticed a fellow officer severely injured and exposed to enemy fire. Demonstrating selfless courage, Captain Batra attempted to rescue his comrade. Tragically, while dragging the injured soldier to safety, Captain Batra was fatally wounded by enemy fire. ​
The Indian Express
His last words, "Jai Mata Di," reflected his unwavering spirit and dedication. Captain Batra's bravery and leadership were instrumental in India's success during the Kargil conflict. In recognition of his supreme sacrifice, he was posthumously awarded the Param Vir Chakra, India's highest military honor. 
          </p>
        </div>
      );
    },
  },
  {
    description: "Colonel Waibhav Anil Kale",
    title: " Indian Army Colonel",
    src: "https://upload.wikimedia.org/wikipedia/en/8/84/Indian_Col_Waibhav_Anil_Kale.jpg",
    ctaText: "Contribute",
    ctaLink: "/login",
    content: () => {
      return (
        <div className="mb-1">
          <h2 className="font-semibold font-serif  text-orange-500">Incident</h2>
          <p className=" overflow-visible">
          On 11/06/24 at around 1945 hrs, an information received that three suspected terrorists seen near village- Sohal, P.S.- Hiranagar, Distt- Kathua, State-Jammu and Kashmir and they fired 03/04 rounds on civilians. After that SSP Kathua, SSP Samba, SOG State Police Hiranagar, Samba and 1st party of QAT/121Bn CRPF under command of Shri Ravi Chander, Asstt. Commandant and GC Hiranagar CRPF QAT immediately rushed to the spot at village-Saida, Sohal. Further, Smt. Pooja Panwar, Second-in-Command (Comdt AOL) and Shri Mahesh Yadav, Dy. Commandant along with 2nd party of QAT/121 Bn CRPF also rushed to the encounter site. Security Forces cordoned off the area to nab the terrorists. Senior Officers, i.e. IG Jammu Sector, DIG Jammu Range and DIG GC Jammu, CRPF were also on the spot. Meanwhile No. 115062756 CT/GD Kabir Das Uikey who was also the part of 1st party of QAT/121 Bn CRPF got critical bullet injury below right shoulder (right anterior axillary line) on 12/06/2024 at around 0250 Hrs. He was immediately evacuated to Sub District Hospital, Hiranagar for treatment where he succumbed to his injuries on 12/06/2024 at 0415 hrs during the course of treatment. Thus, he attained martyrdom in the highest traditions of CRPF and made the supreme sacrifice in service of the Nation.
          </p>
        </div>
      );
    },
  },

  {
    description: "Kiran Shekhawat",
    title: "Constable ",
    src: "https://www.aviation-defence-universe.com/wp-content/uploads/2020/03/Kiran-Shekhawat1.jpg",
    ctaText: "Contribute",
    ctaLink: "/login",
    content: () => {
      return (
        <div className="mb-1">
          <h2 className="font-semibold font-serif  text-orange-500">Incident</h2>
          <p className=" overflow-visible">
          Lt Kiran Shekhawat was born on 01 May 1988 in Mumbai into a Naval family. Daughter of Hon Lt Vijendra Singh Shekhawat and Smt Madhu Chauhan, Lt Kiran Shekhawat belonged to Sefarguwar village in Khetri Tehsil of Jhunjhunu district in Rajasthan. She completed her schooling from Kendriya Vidyalaya-II in Vishakhapatnam and then graduated with a Bachelor of Science from Andhra University. She then worked with a private bank before joining the Indian Naval Academy (INA) in Ezhimala, Kerala in 2010. Lt Shekhawat had married a fellow naval officer Lt Vivek Singh Chhoker from Kurthala near Gurgaon, where her mother-in-law Sunita Chhoker was a sarpanch and the family had some agricultural land.
          </p>
        </div>
      );
    },
  },
  {
    description: "Ajay Kumar Jha",
    title: "Constable ",
    src: "https://bharatkeveer.gov.in/martyrsMedia?martyrsId=662",
    ctaText: "Contribute",
    ctaLink: "/login",
    content: () => {
      return (
        <div className="mb-1">
          <h2 className="font-semibold font-serif  text-orange-500">Incident</h2>
          <p className=" overflow-visible">
          On 14/07/2024 F.N., one area domination Platoon of C/20 and F/20 under command of Sh. Manir Khan, Asstt. Comdt, OC C/20 Bn CRPF alongwith state police team under command of SSP Combat Colonel Nector (Retd.) went for area domination duty in the area where firing incident happened on 13/07/2024. As our troops in 02 Vehs(Gypsy and SML) along with vehicle borne troops of state police reached the Mongbung Sehjang Tri Junction on JT road at 0930 hrs, sudden indiscriminate fire came from the surrounding hills top. Immediately the troops retaliated and tried to evade the volley of bullets. Meanwhile one shot from the hill top by the armed militants pierced through front wind screen of Gypsy as well as head of No. 031473266 CT(DVR) Ajay Kumar Jha, who was driving the Gypsy and negotiating the volley of bursts in a strategically laid ambush by insurgents. Reinforcement team rushed to the spot and evacuated the injured CT(DVR) Ajay Kumar Jha and taken to District Civil Hospital, where the doctors declared him brought dead. Thus, he attained martyrdom in the highest traditions of CRPF and made the supreme sacrifice in service of the Nation.
          </p>
        </div>
      );
    },
  },
];
