import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./ui/SectionHeading";
import { trackPointer } from "./ui/effects";
import { ExternalIcon } from "./ui/Icons";

const Achievements = () => (
  <div>
    <SectionHeading index="05" sub="Beyond the job" title={<>Achievements<span className="text-fuchsia-400">.</span></>} />
    <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {achievements.map((a, i) => {
        const Tag = a.link ? "a" : "div";
        return (
          <motion.div key={a.title} variants={fadeIn("up", "spring", i * 0.12, 0.75)}>
            <Tag
              {...(a.link ? { href: a.link, target: "_blank", rel: "noreferrer" } : {})}
              onMouseMove={trackPointer}
              className="glow-border spotlight relative block h-full rounded-2xl glass p-6 hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center justify-between">
                <span className="text-[30px]">{a.icon}</span>
                <span className="font-mono text-[11.5px] text-secondary">{a.date}</span>
              </div>
              <h3 className="mt-5 font-display text-white font-semibold text-[19px] flex items-center gap-2">
                {a.title} {a.link && <ExternalIcon width={14} height={14} className="text-secondary" />}
              </h3>
              <p className="mt-1.5 text-[14px] text-secondary leading-relaxed">{a.detail}</p>
            </Tag>
          </motion.div>
        );
      })}
    </div>
  </div>
);

export default SectionWrapper(Achievements, "achievements");
