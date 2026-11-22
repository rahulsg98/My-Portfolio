import { profile } from "../constants";
import { GithubIcon, LinkedinIcon, CodeIcon } from "./ui/Icons";

const Footer = () => (
  <footer className="relative border-t border-white/5">
    <div className="max-w-7xl mx-auto sm:px-16 px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-[13px] text-secondary">
        © {new Date().getFullYear()} {profile.name} · Built with React, Three.js &amp; Framer Motion
      </p>
      <div className="flex items-center gap-4 text-secondary">
        <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white"><GithubIcon width={18} height={18} /></a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white"><LinkedinIcon width={18} height={18} /></a>
        <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode" className="hover:text-white"><CodeIcon width={18} height={18} /></a>
      </div>
    </div>
  </footer>
);

export default Footer;
