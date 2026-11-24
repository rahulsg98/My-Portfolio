import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { profile, projectFilters, projects } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./ui/SectionHeading";
import { TiltCard } from "./ui/effects";
import { ArrowIcon, ExternalIcon, GithubIcon } from "./ui/Icons";

const Cover = ({ project, big }) => {
  const { image, icon, glyph, accent, name } = project;
  const h = big ? "h-[220px] sm:h-[300px]" : "h-[190px]";

  if (image) {
    return (
      <div className={`relative ${h} overflow-hidden rounded-2xl border border-white/10 bg-black`}>
        <div className="absolute top-0 inset-x-0 z-10 flex items-center gap-1.5 px-3 h-7 bg-black/60 backdrop-blur">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <img src={image} alt={`${name} screenshot`} loading="lazy" className="absolute inset-0 w-full h-full object-cover object-top pt-7 transition-transform duration-700 group-hover:scale-[1.04]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c1a] via-transparent to-transparent opacity-80" />
      </div>
    );
  }

  return (
    <div
      className={`relative ${h} overflow-hidden rounded-2xl border border-white/10 grid place-items-center`}
      style={{ background: `radial-gradient(120% 120% at 30% 10%, ${accent}55, #0c0c1a 60%)` }}
    >
      <div className="absolute inset-0 grid-bg opacity-70" />
      <div className="absolute w-40 h-40 rounded-full blur-[60px]" style={{ background: `${accent}66` }} />
      {icon ? (
        <img src={icon} alt="" className="relative w-24 h-24 drop-shadow-[0_10px_30px_rgba(0,0,0,.6)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6" />
      ) : (
        <span className="relative font-display font-bold text-[72px] transition-transform duration-500 group-hover:scale-110" style={{ color: accent, textShadow: `0 0 40px ${accent}` }}>
          {glyph}
        </span>
      )}
      <span className="absolute bottom-3 right-4 font-mono text-[11px] text-white/40">{name.toLowerCase().replace(/\s+/g, "-")}</span>
    </div>
  );
};

const ProjectCard = ({ project, big }) => (
  <TiltCard max={big ? 4 : 7} className="group glow-border spotlight relative rounded-3xl glass p-4 sm:p-5 flex flex-col">
    <Cover project={project} big={big} />

    <div className="mt-5 flex items-start justify-between gap-3">
      <div>
        <div className="flex items-center gap-2">
          <h3 className="font-display text-white font-semibold text-[22px]">{project.name}</h3>
          {project.featured && (
            <span className="rounded-full px-2 py-0.5 text-[10.5px] font-mono uppercase tracking-wider text-amber-200 bg-amber-400/10 border border-amber-300/20">New</span>
          )}
        </div>
        <p className="text-[13.5px] font-medium" style={{ color: project.accent }}>{project.tagline}</p>
      </div>
      <span className="shrink-0 font-mono text-[12px] text-secondary/70 mt-1.5">{project.year}</span>
    </div>

    <p className="mt-3 text-[14px] leading-relaxed text-secondary flex-1">{project.description}</p>

    <div className="mt-4 flex flex-wrap gap-1.5">
      {project.tags.map((t) => (
        <span key={t} className="rounded-md bg-white/[0.04] border border-white/10 px-2 py-0.5 font-mono text-[11.5px] text-white-100/80">{t}</span>
      ))}
    </div>

    <div className="mt-5 flex items-center gap-2">
      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/10 px-4 py-2 text-[13px] font-medium text-white hover:bg-white/10 transition-colors">
        <GithubIcon width={16} height={16} /> Code
      </a>
      {project.store && (
        <a href={project.store} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-white transition-shadow hover:shadow-[0_0_20px_rgba(99,102,241,.5)]" style={{ background: project.accent }}>
          <ExternalIcon width={15} height={15} /> Chrome Web Store
        </a>
      )}
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-white transition-shadow hover:shadow-[0_0_20px_rgba(244,63,94,.45)]" style={{ background: project.accent }}>
          <ExternalIcon width={15} height={15} /> Live demo
        </a>
      )}
    </div>
  </TiltCard>
);

const Works = () => {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <div data-section="projects">
      <SectionHeading index="04" sub="Selected work" title={<>Things I've <span className="text-gradient">built.</span></>} />

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[16px] max-w-2xl leading-relaxed">
        From an on-device AI interviewer to browser extensions and full-stack web apps. Recent work first.
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-4 py-2 text-[13.5px] font-medium transition-colors ${filter === f ? "text-white" : "text-secondary hover:text-white"}`}
          >
            {filter === f && <motion.span layoutId="filter-pill" className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600/80 to-fuchsia-600/80" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => {
            const big = filter === "All" && i === 0;
            return (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={big ? "md:col-span-2" : ""}
              >
                <ProjectCard project={p} big={big} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <div className="mt-10 flex justify-center">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium text-white hover:bg-white/10 transition-colors">
          <GithubIcon width={18} height={18} /> More on GitHub
          <ArrowIcon width={16} height={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
