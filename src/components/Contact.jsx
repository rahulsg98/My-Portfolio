import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { profile } from "../constants";
import SectionHeading from "./ui/SectionHeading";
import { CodeIcon, GithubIcon, LinkedinIcon, MailIcon } from "./ui/Icons";

const field =
  "w-full rounded-xl bg-white/[0.04] border border-white/10 px-4 py-3.5 text-white placeholder:text-secondary/60 outline-none focus:border-violet-400/70 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(139,92,246,.15)] transition";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: "LinkedIn", value: "rahul-singh-gurjar", href: profile.socials.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", value: "rahulsg98", href: profile.socials.github, Icon: GithubIcon },
  { label: "LeetCode", value: "rahul_9_8", href: profile.socials.leetcode, Icon: CodeIcon },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs
      .send(
        "service_xtad3ri",
        "template_90aozwq",
        {
          from_name: form.name,
          to_name: "Rahul Singh Gurjar",
          from_email: form.email,
          to_email: "rahulsinghgurjar10000@gmail.com",
          message: form.message,
        },
        "g3oS9kqIg_9S9lDxx"
      )
      .then(
        () => {
          setStatus("sent");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <div data-section="contact">
      <SectionHeading index="06" sub="Get in touch" title={<>Let's build something <span className="text-gradient">together.</span></>} />
      <p className="mt-4 text-secondary text-[16px] max-w-2xl">
        Open to full-stack and backend roles, collaborations and interesting problems. My inbox is always open.
      </p>

      <div className="mt-12 grid xl:grid-cols-2 gap-10 items-center">
        <motion.div variants={slideIn("left", "tween", 0.2, 1)} className="rounded-3xl glass p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-white-100">Name</span>
                <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className={field} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[13px] font-medium text-white-100">Email</span>
                <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@company.com" className={field} />
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-white-100">Message</span>
              <textarea required rows={6} name="message" value={form.message} onChange={handleChange} placeholder="Tell me about the role or idea…" className={`${field} resize-none`} />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3 font-semibold text-white hover:shadow-[0_0_28px_rgba(168,85,247,.55)] transition-shadow disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              {status === "sent" && <p className="text-[14px] text-emerald-300">Thanks! I'll get back to you soon.</p>}
              {status === "error" && <p className="text-[14px] text-rose-300">Something went wrong. Email me directly instead.</p>}
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 grid sm:grid-cols-2 gap-3">
            {links.map(({ label, value, href, Icon }) => (
              <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer"
                 className="group flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-white/5 transition-colors min-w-0">
                <span className="grid place-items-center w-9 h-9 shrink-0 rounded-lg bg-white/5 text-secondary group-hover:text-white"><Icon width={18} height={18} /></span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-secondary/70">{label}</span>
                  <span className="block truncate text-[14px] text-white-100">{value}</span>
                </span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="h-[340px] sm:h-[460px] xl:h-[560px]">
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
