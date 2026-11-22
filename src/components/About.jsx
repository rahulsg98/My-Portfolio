import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { education, stats } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./ui/SectionHeading";
import { CountUp, trackPointer } from "./ui/effects";

const About = () => (
  <div data-section="about">
    <SectionHeading index="01" sub="Introduction" title={<>Engineer who ships <span className="text-gradient">end to end.</span></>} />

    <div className="mt-12 grid lg:grid-cols-[1.15fr_1fr] gap-10">
      <motion.div variants={fadeIn("up", "spring", 0.1, 0.8)} className="space-y-5 text-secondary text-[16px] sm:text-[17px] leading-[1.8]">
        <p>
          I'm a full-stack software engineer at <span className="text-white font-medium">Accenture</span>, working on the
          <span className="text-white font-medium"> Varo Bank</span> mobile banking app (US). My days move between
          Spring Boot and Kotlin services, GraphQL schemas on Apollo GraphOS, Kafka-driven pipelines on AWS, and the
          React Native screens that sit on top of them.
        </p>
        <p>
          Outside work I build tools I want to use myself: an AI interviewer that runs entirely on my laptop, a browser
          extension that keeps YouTube focused on lectures, and a price comparer for Indian e-commerce. I care about
          clean APIs, reliable systems and interfaces that feel fast.
        </p>

        <div onMouseMove={trackPointer} className="glow-border spotlight relative rounded-2xl glass p-5 flex items-start gap-4">
          <div className="shrink-0 grid place-items-center w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-pink-500 text-[22px]">🎓</div>
          <div>
            <p className="text-white font-semibold font-display text-[17px]">{education.degree}</p>
            <p className="text-[14px] text-secondary">{education.school}</p>
            <p className="mt-1 font-mono text-[12px] text-cyan-300">{education.date} · {education.score}</p>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4 content-start">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeIn("up", "spring", 0.15 * i + 0.2, 0.75)}
            onMouseMove={trackPointer}
            className="glow-border spotlight relative rounded-2xl glass p-5 sm:p-6 min-h-[150px] flex flex-col justify-between"
          >
            <p className="font-display font-bold text-[38px] sm:text-[46px] leading-none text-white">
              <CountUp to={s.value} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-[13px] sm:text-[14px] text-secondary leading-snug">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default SectionWrapper(About, "about");
