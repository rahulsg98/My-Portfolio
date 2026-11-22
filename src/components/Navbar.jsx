import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { navLinks, profile } from "../constants";
import { logo } from "../assets";
import { DownloadIcon, MenuIcon } from "./ui/Icons";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.dataset.section)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const el = document.querySelector(`[data-section="${id}"]`);
      if (el) io.observe(el);
    });
    return () => { window.removeEventListener("scroll", onScroll); io.disconnect(); };
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-primary/70 backdrop-blur-xl border-b border-white/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto sm:px-16 px-4 h-[68px] flex items-center justify-between">
        <a href="#top" onClick={() => setActive("")} className="flex items-center gap-2.5 group">
          <span className="relative grid place-items-center w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 p-[1.5px]">
            <span className="grid place-items-center w-full h-full rounded-[10px] bg-primary">
              <img src={logo} alt="" className="w-6 h-6 object-contain" />
            </span>
          </span>
          <span className="font-display font-semibold text-white text-[17px] tracking-tight">
            Rahul<span className="text-gradient">.dev</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1 rounded-full glass px-1.5 py-1.5">
          {navLinks.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                className={`relative z-10 block px-4 py-1.5 text-[14px] font-medium transition-colors ${active === link.id ? "text-white" : "text-secondary hover:text-white"}`}
              >
                {link.title}
              </a>
              {active === link.id && (
                <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-white/10 border border-white/10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
              )}
            </li>
          ))}
        </ul>

        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:shadow-[0_0_24px_rgba(168,85,247,.55)] transition-shadow"
        >
          <DownloadIcon width={16} height={16} /> Resume
        </a>

        <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen(!open)}>
          <MenuIcon open={open} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mx-4 mb-4 rounded-2xl glass p-4"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={`#${link.id}`} onClick={() => setOpen(false)} className={`block rounded-xl px-4 py-3 font-medium ${active === link.id ? "bg-white/10 text-white" : "text-secondary"}`}>
                    {link.title}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.resume} target="_blank" rel="noreferrer" className="mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-semibold text-white bg-gradient-to-r from-violet-600 to-fuchsia-600">
                  <DownloadIcon width={16} height={16} /> Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div style={{ scaleX: progress }} className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-violet-500 via-cyan-400 to-pink-500" />
    </nav>
  );
};

export default Navbar;
