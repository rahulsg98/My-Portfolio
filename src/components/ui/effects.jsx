import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue, useSpring, motion } from "framer-motion";

/** Sets --mx/--my CSS vars on the element for spotlight / glow-border effects. */
export const trackPointer = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

/** A card that tilts in 3D toward the pointer. */
export const TiltCard = ({ children, className = "", max = 10, ...rest }) => {
  const rx = useSpring(0, { stiffness: 200, damping: 18 });
  const ry = useSpring(0, { stiffness: 200, damping: 18 });
  const onMove = (e) => {
    trackPointer(e);
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * max * 2);
    rx.set(-py * max * 2);
  };
  const reset = () => { rx.set(0); ry.set(0); };
  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className={`h-full ${className}`}
        {...rest}
      >
        {children}
      </motion.div>
    </div>
  );
};

/** Number that counts up once it scrolls into view. */
export const CountUp = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{val.toLocaleString("en-IN")}{suffix}</span>;
};

/** Renders **bold** segments in a string as highlighted text. */
export const RichText = ({ text }) =>
  text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );

/** Soft glow that follows the cursor on devices with a fine pointer. */
export const CursorGlow = () => {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const move = (e) => { x.set(e.clientX - 250); y.set(e.clientY - 250); };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  if (!enabled) return null;
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-0 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.13),transparent_65%)]"
    />
  );
};
