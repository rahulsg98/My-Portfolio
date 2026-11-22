import { useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { skillGroups, sphereSkills } from "../constants";
import { fadeIn } from "../utils/motion";
import SectionHeading from "./ui/SectionHeading";
import { trackPointer } from "./ui/effects";

const palette = ["#c084fc", "#67e8f9", "#f9a8d4", "#a5b4fc", "#5eead4"];

/** Interactive 3D word sphere (pure CSS transforms, no extra WebGL context). */
const TagSphere = ({ words }) => {
  const wrap = useRef(null);
  const tags = useRef([]);
  const points = useMemo(() => {
    const n = words.length;
    return words.map((_, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / n);
      const theta = Math.sqrt(n * Math.PI) * phi;
      return [Math.cos(theta) * Math.sin(phi), Math.sin(theta) * Math.sin(phi), Math.cos(phi)];
    });
  }, [words]);

  useEffect(() => {
    let raf;
    let vx = 0.003, vy = 0.004;            // angular velocity
    let tx = vx, ty = vy;                  // target velocity
    let ax = 0, ay = 0;                    // accumulated rotation
    const el = wrap.current;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tx = -((e.clientY - r.top) / r.height - 0.5) * 0.03;
      ty = ((e.clientX - r.left) / r.width - 0.5) * 0.03;
    };
    const onLeave = () => { tx = 0.003; ty = 0.004; };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);

    const tick = () => {
      vx += (tx - vx) * 0.05; vy += (ty - vy) * 0.05;
      ax += vx; ay += vy;
      const R = el.clientWidth / 2.6;
      const cx = Math.cos(ax), sx = Math.sin(ax), cy = Math.cos(ay), sy = Math.sin(ay);
      points.forEach(([x, y, z], i) => {
        const y1 = y * cx - z * sx, z1 = y * sx + z * cx;
        const x2 = x * cy + z1 * sy, z2 = -x * sy + z1 * cy;
        const scale = 0.65 + ((z2 + 1) / 2) * 0.5; // 0.65 .. 1.15
        const node = tags.current[i];
        if (!node) return;
        node.style.transform = `translate(-50%,-50%) translate3d(${x2 * R}px, ${y1 * R}px, 0) scale(${scale})`;
        node.style.opacity = String(Math.min(1, 0.15 + (scale - 0.65) * 1.8));
        node.style.zIndex = String(Math.round(scale * 100));
        node.style.filter = scale < 0.78 ? "blur(0.8px)" : "none";
      });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { cancelAnimationFrame(raf); el.removeEventListener("pointermove", onMove); el.removeEventListener("pointerleave", onLeave); };
  }, [points]);

  return (
    <div ref={wrap} className="tag-sphere relative mx-auto aspect-square w-full max-w-[460px]">
      <div className="absolute inset-[18%] rounded-full bg-violet-600/20 blur-[70px]" />
      {words.map((w, i) => (
        <span
          key={w}
          ref={(n) => (tags.current[i] = n)}
          style={{ color: palette[i % palette.length], fontSize: `${15 + (i % 3) * 2.5}px` }}
        >
          {w}
        </span>
      ))}
    </div>
  );
};

const Tech = () => (
  <div data-section="skills">
    <SectionHeading index="03" sub="Toolbox" title={<>Skills &amp; <span className="text-gradient">stack.</span></>} />

    <div className="mt-12 grid lg:grid-cols-2 gap-10 items-center">
      <motion.div variants={fadeIn("right", "spring", 0.1, 1)}>
        <TagSphere words={sphereSkills} />
        <p className="text-center font-mono text-[12px] text-secondary/70 -mt-2">move your cursor over the sphere</p>
      </motion.div>

      <div className="space-y-4">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            variants={fadeIn("left", "spring", 0.12 * i, 0.7)}
            onMouseMove={trackPointer}
            className="glow-border spotlight relative rounded-2xl glass p-5"
          >
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-fuchsia-300/90">{g.title}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[13.5px] text-white-100 hover:border-violet-400/60 hover:bg-violet-500/10 transition-colors">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default SectionWrapper(Tech, "skills");
