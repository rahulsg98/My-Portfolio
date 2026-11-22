import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./ui/SectionHeading";
import { RichText, trackPointer } from "./ui/effects";
import { PinIcon } from "./ui/Icons";

const ExperienceCard = ({ exp, index }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.8)} className="relative pl-14 sm:pl-20">
    <div className="absolute left-0 sm:left-2 top-1 grid place-items-center w-11 h-11 rounded-2xl font-display font-bold text-white text-[18px] shadow-[0_0_30px_rgba(168,85,247,.35)]" style={{ background: exp.gradient }}>
      {exp.monogram}
    </div>

    <div onMouseMove={trackPointer} className="glow-border spotlight relative rounded-3xl glass p-6 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-white text-[22px] sm:text-[26px] font-semibold leading-tight">{exp.title}</h3>
          <p className="mt-1 text-[16px] font-medium text-white-100">
            {exp.company} <span className="text-secondary font-normal">· {exp.client}</span>
          </p>
        </div>
        <div className="sm:text-right">
          <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[12px] font-mono ${exp.current ? "bg-emerald-400/10 text-emerald-300 border border-emerald-400/20" : "bg-white/5 text-secondary border border-white/10"}`}>
            {exp.current && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
            {exp.date}
          </span>
          <p className="mt-2 flex items-center sm:justify-end gap-1 text-[12px] text-secondary"><PinIcon width={13} height={13} />{exp.location}</p>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {exp.points.map((p, i) => (
          <li key={i} className="flex gap-3 text-[14.5px] sm:text-[15px] leading-relaxed text-secondary">
            <span className="mt-[9px] w-1.5 h-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-300" />
            <span><RichText text={p} /></span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {exp.tech.map((t) => (
          <span key={t} className="rounded-lg bg-white/[0.04] border border-white/10 px-2.5 py-1 font-mono text-[12px] text-cyan-200/90">{t}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <div data-section="experience">
      <SectionHeading index="02" sub="Where I've worked" title={<>Experience<span className="text-fuchsia-400">.</span></>} />

      <div ref={ref} className="relative mt-14 space-y-10">
        <div className="absolute left-[21px] sm:left-[29px] top-2 bottom-2 w-[2px] bg-white/10 rounded-full" />
        <motion.div style={{ scaleY: fill }} className="absolute left-[21px] sm:left-[29px] top-2 bottom-2 w-[2px] origin-top rounded-full bg-gradient-to-b from-violet-500 via-cyan-400 to-pink-500" />
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company} exp={exp} index={i} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
