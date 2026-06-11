"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { useTheme } from "@/lib/ThemeContext";

const DEMOS: Record<string, string> = {
  splitter: "https://splitter-fd759.web.app/?test",
  railbuild: "https://railwaypro-17927.web.app/",
  whatsapp: "https://whatsapp-sender-production-a440.up.railway.app/",
};

function Prompt() {
  return (
    <span className="select-none shrink-0">
      <span className="text-term-green">aaditya</span>
      <span className="text-term-muted">@</span>
      <span className="text-term-blue">portfolio</span>
      <span className="text-term-muted">:~$ </span>
    </span>
  );
}

const whoamiOutput = (
  <span>
    <span className="text-term-text font-semibold">Aaditya Mohan</span>
    <span className="text-term-muted"> — Software Engineer (Frontend) · SDE-1 @ </span>
    <span className="text-term-blue">PayRange</span>
  </span>
);

const aboutOutput = (
  <span className="text-term-muted">
    Frontend-focused engineer building production-grade web apps with{" "}
    <span className="text-term-magenta">React</span>,{" "}
    <span className="text-term-magenta">TypeScript</span> &{" "}
    <span className="text-term-magenta">Firebase</span>. Currently shipping a POS
    back-office platform at PayRange. B.Tech CSE, AKTU &apos;24.
  </span>
);

const socialsOutput = (
  <span className="flex flex-wrap gap-x-6 gap-y-2">
    <a
      href="https://github.com/aadityamohan"
      target="_blank"
      rel="noopener noreferrer"
      className="text-term-blue hover:underline inline-flex items-center gap-1.5"
    >
      <Github size={14} /> github/
    </a>
    <a
      href="https://www.linkedin.com/in/aadityaamohan/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-term-blue hover:underline inline-flex items-center gap-1.5"
    >
      <Linkedin size={14} /> linkedin/
    </a>
    <a
      href="mailto:mohanaaditya@gmail.com"
      className="text-term-blue hover:underline inline-flex items-center gap-1.5"
    >
      <Mail size={14} /> email/
    </a>
  </span>
);

const helpOutput = (
  <div className="text-term-muted space-y-0.5">
    <p className="text-term-text">available commands:</p>
    {[
      ["whoami", "who am I"],
      ["about", "cat about.txt"],
      ["skills", "what I work with"],
      ["projects", "ls ~/projects"],
      ["open <name>", "open live demo (splitter | railbuild | whatsapp)"],
      ["socials", "ls ./socials"],
      ["theme", "toggle dark / light"],
      ["sudo hire-me", "???"],
      ["clear", "clear terminal"],
    ].map(([cmd, desc]) => (
      <p key={cmd} className="pl-2">
        <span className="text-term-green inline-block w-36">{cmd}</span>
        <span>{desc}</span>
      </p>
    ))}
  </div>
);

const projectsOutput = (
  <div className="text-term-muted">
    <p>
      <span className="text-term-blue">splitter/</span>{"      "}group expense manager · React + Firebase PWA
    </p>
    <p>
      <span className="text-term-blue">railbuild/</span>{"     "}railway construction management PWA
    </p>
    <p>
      <span className="text-term-blue">whatsapp/</span>{"      "}bulk messaging desktop app · 95% delivery
    </p>
    <p>
      <span className="text-term-blue">ecommerce/</span>{"     "}JAMstack store · Stripe + Sanity
    </p>
    <p className="mt-1 text-term-muted/70"># try: open splitter</p>
  </div>
);

const skillsOutput = (
  <div className="text-term-muted space-y-0.5">
    <p>
      <span className="text-term-yellow">frontend</span> → React, Next.js, TypeScript, Redux, Tailwind, shadcn/ui, PWA
    </p>
    <p>
      <span className="text-term-yellow">backend</span>{"  "}→ Node.js, Express, MongoDB, Firebase, RESTful APIs
    </p>
    <p>
      <span className="text-term-yellow">practices</span> → Agile, Code Reviews, OOP, Performance Optimization
    </p>
  </div>
);

type HistoryEntry = { id: number; cmd: string; out: ReactNode };

const autoplayScript: { cmd: string; out: ReactNode }[] = [
  { cmd: "whoami", out: whoamiOutput },
  { cmd: "cat about.txt", out: aboutOutput },
  { cmd: "ls ./socials", out: socialsOutput },
];

let entryId = 100;

function TerminalSession() {
  const { toggleTheme } = useTheme();

  const [autoLine, setAutoLine] = useState(0);
  const [autoChar, setAutoChar] = useState(0);
  const autoplayDone = autoLine >= autoplayScript.length;

  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [cleared, setCleared] = useState(false);
  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // autoplay typing
  useEffect(() => {
    if (autoplayDone) return;
    const line = autoplayScript[autoLine];
    if (autoChar < line.cmd.length) {
      const t = setTimeout(() => setAutoChar((c) => c + 1), 40);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setAutoLine((l) => l + 1);
      setAutoChar(0);
    }, 380);
    return () => clearTimeout(t);
  }, [autoLine, autoChar, autoplayDone]);

  // keep scrolled to bottom
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, autoLine, autoChar, input]);

  const runCommand = useCallback(
    (raw: string): ReactNode | "clear" => {
      const [cmd, ...args] = raw.trim().split(/\s+/);
      const arg = args.join(" ").toLowerCase();

      switch (cmd.toLowerCase()) {
        case "":
          return null;
        case "help":
          return helpOutput;
        case "whoami":
          return whoamiOutput;
        case "about":
        case "cat":
          return aboutOutput;
        case "skills":
          return skillsOutput;
        case "projects":
        case "ls":
          return arg.includes("social") ? socialsOutput : projectsOutput;
        case "socials":
          return socialsOutput;
        case "open": {
          const key = Object.keys(DEMOS).find((k) => arg.includes(k));
          if (key) {
            window.open(DEMOS[key], "_blank", "noopener,noreferrer");
            return (
              <span className="text-term-muted">
                opening <span className="text-term-blue">{DEMOS[key]}</span> ↗
              </span>
            );
          }
          return (
            <span className="text-term-red">
              usage: open splitter | railbuild | whatsapp
            </span>
          );
        }
        case "theme":
          toggleTheme();
          return <span className="text-term-muted">theme toggled ✓</span>;
        case "sudo":
          if (arg.includes("hire")) {
            setTimeout(() => {
              window.location.href = "mailto:mohanaaditya@gmail.com?subject=Let%27s%20work%20together";
            }, 900);
            return (
              <div>
                <p className="text-term-muted">[sudo] password for recruiter: ········</p>
                <p className="text-term-green">access granted ✓ drafting email...</p>
              </div>
            );
          }
          return <span className="text-term-red">{args[0] ?? ""}: permission denied</span>;
        case "clear":
          return "clear";
        case "exit":
          return <span className="text-term-muted">there is no escape. try &apos;sudo hire-me&apos;</span>;
        default:
          return (
            <span>
              <span className="text-term-red">zsh: command not found: {cmd}</span>{" "}
              <span className="text-term-muted">— try &apos;help&apos;</span>
            </span>
          );
      }
    },
    [toggleTheme]
  );

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const out = runCommand(input);
    if (out === "clear") {
      setHistory([]);
      setCleared(true);
    } else {
      setHistory((h) => [...h, { id: entryId++, cmd: input, out }]);
    }
    setInput("");
  };

  return (
    <div
      ref={scrollRef}
      onClick={() => inputRef.current?.focus()}
      className="px-4 sm:px-6 py-5 text-sm sm:text-base leading-relaxed space-y-3 h-[340px] sm:h-[380px] overflow-y-auto cursor-text"
    >
      {!cleared &&
        autoplayScript.slice(0, autoplayDone ? autoplayScript.length : autoLine + 1).map((line, i) => {
          const isCurrent = i === autoLine && !autoplayDone;
          return (
            <div key={i}>
              <div>
                <Prompt />
                <span className="text-term-text">
                  {isCurrent ? line.cmd.slice(0, autoChar) : line.cmd}
                </span>
                {isCurrent && <span className="term-cursor ml-0.5" />}
              </div>
              {!isCurrent && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-1">
                  {line.out}
                </motion.div>
              )}
            </div>
          );
        })}

      {autoplayDone && !cleared && history.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-term-yellow/90 text-xs sm:text-sm"
        >
          # this terminal is interactive — type &apos;help&apos; and hit enter
        </motion.p>
      )}

      {history.map((entry) => (
        <div key={entry.id}>
          <div className="break-all">
            <Prompt />
            <span className="text-term-text">{entry.cmd}</span>
          </div>
          {entry.out && <div className="mt-1">{entry.out}</div>}
        </div>
      ))}

      {autoplayDone && (
        <form onSubmit={onSubmit} className="flex items-center">
          <Prompt />
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 min-w-0 bg-transparent outline-none border-none text-term-text caret-term-green"
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            aria-label="terminal input"
          />
        </form>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-24 pb-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 w-full"
      >
        <p className="text-term-green text-sm sm:text-base mb-5">
          ~/portfolio <span className="text-term-muted">on</span>{" "}
          <span className="text-term-magenta">main</span>{" "}
          <span className="text-term-muted">via</span>{" "}
          <span className="text-term-blue">⬢ node</span>
        </p>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight ascii-name leading-[1.05]">
          Aaditya
          <br className="sm:hidden" /> Mohan
          <span className="term-cursor ml-2 sm:ml-4 align-baseline" />
        </h1>

        <p className="mt-5 text-term-muted text-base sm:text-lg">
          software engineer <span className="text-term-green">·</span> frontend{" "}
          <span className="text-term-green">·</span> full-stack
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="term-window w-full max-w-3xl"
      >
        <div className="term-chrome">
          <span className="term-dot bg-term-red" />
          <span className="term-dot bg-term-yellow" />
          <span className="term-dot bg-term-green" />
          <span className="ml-3 text-xs text-term-muted truncate">
            aaditya@portfolio: ~ — zsh
          </span>
          <span className="ml-auto text-[10px] text-term-green/80 border border-term-green/30 rounded px-1.5 py-0.5 hidden sm:block">
            interactive
          </span>
        </div>
        <TerminalSession />
      </motion.div>

      <motion.a
        href="#skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-12 text-term-muted hover:text-term-green transition-colors text-sm"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          ↓ scroll --down
        </motion.span>
      </motion.a>
    </section>
  );
}
