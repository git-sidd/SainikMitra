"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../hooks/use-outside-click";
import { div } from "framer-motion/client";

export function Contribute() {
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
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
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
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
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
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4 my-4 rounded-md">
        {cards.map((card, index) => (
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
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
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
    description: "Kuldeep Kumar",
    title: "Inspector",
    src: "https://bharatkeveer.gov.in/martyrsMedia?martyrsId=663",
    ctaText: "Contribute ",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="mb-1">
          <h2 className="font-semibold font-serif text-orange-500">Incident</h2>
          <p className=" overflow-visible">
          On 19/08/2024 at 1100 hrs 01 Platoon of G/187 Bn launched joint Area Domination duty in the area of Chill Village under Police post Dudu (10 kms from Dudu), P.S.-Latti, Dist Udhampur, Jammu and Kashmir under command Sh. Mangej Kumar Mandiwal, Asstt. Comdt. along with SOG(Jammu and Kashmir ). While returning from village-Chill at around 1445 hrs militants fired upon the troops from the front side hilly area and in response the troops resorted to counter attack on the militants. Insp/GD Kuldeep Kumar who was in the front flank faced the militants gallantly and fired 04 rounds in the ongoing gun battle. During this exchange of fire, a bullet hit on head of Insp/GD Kuldeep Kumar who was leading the frontal counter attack. Later on he succumbed to his injuries and attained martyrdom in the highest traditions of CRPF and made the supreme sacrifice in service of the Nation.
          </p>
        </div>
      );
    },
  },
  {
    description: "Kabir Das Uikey",
    title: "Constable",
    src: "https://bharatkeveer.gov.in/martyrsMedia?martyrsId=659",
    ctaText: "Contribute",
    ctaLink: "https://ui.aceternity.com/templates",
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
    description: "Shailendra",
    title: "Constable ",
    src: "https://bharatkeveer.gov.in/martyrsMedia?martyrsId=660",
    ctaText: "Contribute",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <div className="mb-1">
          <h2 className="font-semibold font-serif  text-orange-500">Incident</h2>
          <p className=" overflow-visible">
          F/No. 175264093 CT/GD Shailendra of 201 CoBRA Bn, CRPF was tasked with the operational movement to CoBRA FOB Camp at Tekalgudem and Puvrati under PS Jagargunda in the Naxal hotbed of Sukma district of Chhattisgarh on 23/06/2024. At 1500 hrs when his vehicle was passing through Silger, it was targeted by Naxals using Improvised Explosive Device (IED) followed by intense firing. The attack was repulsed by the troops of 201 CoBRA Bn and F/No. 175264093 CT/GD Shailendra has displayed unwavering courage and fortitude before taking his last breath. Thus, he attained martyrdom in the highest traditions of CRPF and made the supreme sacrifice in service of the Nation.
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
    ctaLink: "https://ui.aceternity.com/templates",
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
