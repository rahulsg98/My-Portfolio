import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HeroScene } from "./canvas";
import { profile } from "../constants";
import { ArrowIcon, CodeIcon, DownloadIcon, GithubIcon, LinkedinIcon, PinIcon } from "./ui/Icons";

const useRotatingText = (items, ms = 2600) => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), ms);
    return () => clearInterval(t);
  }, [items.length, ms]);
  return items[i];
};

const useIsCompact = () => {
  const [compact, setCompact] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const on = () => setCompact(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return compact;
};

const rise = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease: [0.16, 1, 0.3, 1] } });

const Hero = () => {
  const role = useRotatingText(profile.roles);
  const compact = useIsCompact();

  return (
    <section id="top" className="relative w-full min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-violet-700/25 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full bg-cyan-500/15 blur-[120px]" />

      {/* 3D scene: right half on desktop, faded backdrop on mobile */}
      <div className={`absolute ${compact ? "inset-0 opacity-45" : "inset-y-0 right-0 w-[55%]"}`}>
        <HeroScene compact={compact} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto sm:px-16 px-4 min-h-[100svh] flex items-center pt-24 pb-28">
        <div className="max-w-2xl">
          <motion.a
            {...rise(0.1)}
            href="#experience"
            className="inline-flex items-center gap-2.5 rounded-full glass pl-3 pr-4 py-1.5 text-[13px] text-white-100 hover:border-white/20"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-ring" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            Now at <b className="font-semibold">{profile.current.company}</b> · building for {profile.current.client}
          </motion.a>

          <motion.h1 {...rise(0.2)} className="mt-6 font-display font-bold text-white leading-[0.95] tracking-tight text-[52px] xs:text-[64px] sm:text-[80px] lg:text-[96px]">
            Hi, I'm <span className="text-gradient">{profile.firstName}</span>
            <span className="text-fuchsia-400">.</span>
          </motion.h1>

          <motion.div {...rise(0.3)} className="mt-5 h-[34px] sm:h-[40px] font-mono text-[18px] sm:text-[24px] text-cyan-300 flex items-center">
            <span className="text-fuchsia-400 mr-2">&gt;</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={role}
                initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.35 }}
              >
                {role}
              </motion.span>
            </AnimatePresence>
            <span className="ml-1 w-[2px] h-[1.1em] bg-cyan-300 animate-pulse" />
          </motion.div>

          <motion.p {...rise(0.4)} className="mt-6 text-secondary text-[16px] sm:text-[18px] leading-relaxed max-w-xl">
            {profile.tagline}
          </motion.p>

          <motion.div {...rise(0.5)} className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 font-semibold hover:shadow-[0_0_30px_rgba(255,255,255,.35)] transition-shadow">
              View my work <ArrowIcon width={18} height={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
              <DownloadIcon width={18} height={18} /> Resume
            </a>
            <div className="flex items-center gap-2 ml-1">
              {[
                { href: profile.socials.github, Icon: GithubIcon, label: "GitHub" },
                { href: profile.socials.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
                { href: profile.socials.leetcode, Icon: CodeIcon, label: "LeetCode" },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}
                   className="grid place-items-center w-11 h-11 rounded-full glass text-secondary hover:text-white hover:-translate-y-0.5 transition-all">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.p {...rise(0.6)} className="mt-8 inline-flex items-center gap-1.5 text-[13px] text-secondary/80 font-mono">
            <PinIcon width={15} height={15} /> {profile.location}
          </motion.p>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[30px] h-[52px] rounded-full border-2 border-white/25 flex justify-center pt-2">
          <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 1.6, repeat: Infinity }} className="w-1.5 h-1.5 rounded-full bg-white/80" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
