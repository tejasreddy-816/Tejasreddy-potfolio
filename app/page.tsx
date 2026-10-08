"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = [
    {
      title: "Remote Sensing & GIS Internship",
      description:
        "Remote Sensing and GIS projects using Python and satellite data, including Urban Heat Island Analysis and Air Quality & Aerosol Pattern Mapping.",
      tech: "Python • Remote Sensing • GIS • Satellite Data",
      link: "https://github.com/tejasreddy-816/remote-sensing-gis-internship",
    },
    {
      title: "College Enquiry Chatbot",
      description:
        "Python-based chatbot designed to answer college-related questions such as admissions, fees, courses and other enquiries.",
      tech: "Python • NLP • Machine Learning",
      link: "https://github.com/tejasreddy-816/College-chat-bot",
    },
    {
      title: "Trading Bot",
      description:
        "A Python trading bot project developed for automated trading workflows and experimentation.",
      tech: "Python",
      link: "https://github.com/tejasreddy-816/trading-bot",
    },
    {
      title: "JGU Landing Page",
      description:
        "Responsive landing page designed using modern web technologies with a clean and professional interface.",
      tech: "HTML • CSS • JavaScript",
      link: "https://github.com/tejasreddy-816/jgu-landing-page",
    },
    {
      title: "Smart Attendance System",
      description:
        "Face recognition attendance application that uses a webcam to identify students and record attendance.",
      tech: "Python • OpenCV • SQLite",
      link: "",
    },
    {
      title: "AI Resume Screening",
      description:
        "Machine-learning based project for analyzing and screening resumes using NLP and Python.",
      tech: "Python • NLP • Machine Learning",
      link: "",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-xl font-bold">
            Tejas Reddy
          </a>

          <div className="hidden gap-8 md:flex">
            <a href="#home" className="hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#skills" className="hover:text-blue-400">
              Skills
            </a>
            <a href="#experience" className="hover:text-blue-400">
              Experience
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>

          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-5 md:hidden">
            <a href="#home" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="#about" onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a href="#projects" onClick={() => setMenuOpen(false)}>
              Projects
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* HOME */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6 pt-20"
      >
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-blue-400">Hello, I'm</p>

          <h1 className="text-5xl font-bold md:text-7xl">
            I. Tejas Reddy
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-slate-300 md:text-3xl">
            Python | AI/ML | Cloud & DevOps
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            B.Tech Computer Science student passionate about Python,
            Artificial Intelligence, Machine Learning, Cloud technologies
            and building practical software solutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
            >
              View My Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold">About Me</h2>

        <p className="mt-6 max-w-4xl leading-8 text-slate-400">
          I am a B.Tech Computer Science student at GITAM University,
          Hyderabad. I enjoy building practical applications using Python,
          AI/ML, cloud technologies and web development. I am continuously
          improving my technical skills through projects, internships and
          hands-on learning.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Skills</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Python",
              "AWS",
              "AI / Machine Learning",
              "Microsoft Excel",
              "HTML / CSS / JavaScript",
              "OpenCV",
              "NLP / Chatbots",
              "SQLite",
              "Git & GitHub",
              "Cloud Computing",
              "Remote Sensing",
              "GIS",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-xl border border-white/10 bg-slate-950 p-5 text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold">Experience</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <p className="text-blue-400">May 2026 – July 2026</p>
            <h3 className="mt-2 text-xl font-bold">
              Remote Sensing and GIS Intern
            </h3>
            <p className="mt-1 text-slate-400">India Space Academy</p>

            <p className="mt-5 leading-7 text-slate-400">
              Completed a six-week internship focused on Remote Sensing and
              GIS using Python and satellite data. Worked on Urban Heat Island
              Analysis and Air Quality & Aerosol Pattern Mapping.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900 p-6">
            <p className="text-blue-400">Sep 2025 – Nov 2025</p>
            <h3 className="mt-2 text-xl font-bold">AIML Intern</h3>
            <p className="mt-1 text-slate-400">EDUFYI TECH SOLUTIONS</p>

            <p className="mt-5 leading-7 text-slate-400">
              Worked with Python and Machine Learning on anomaly detection,
              including data preprocessing, model training and evaluation.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-blue-400">MY WORK</p>

          <h2 className="mt-2 text-4xl font-bold">
            Featured Projects
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-blue-500/50"
              >
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-3 text-sm text-blue-400">
                  {project.tech}
                </p>

                <p className="mt-5 flex-1 leading-7 text-slate-400">
                  {project.description}
                </p>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-fit rounded-lg bg-blue-600 px-5 py-3 font-semibold transition hover:bg-blue-700"
                  >
                    View Project →
                  </a>
                ) : (
                  <span className="mt-6 inline-flex w-fit cursor-not-allowed rounded-lg bg-slate-700 px-5 py-3 font-semibold text-slate-400">
                    <a
  href="https://github.com/tejasreddy-816/smart-attendance-system"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-flex w-fit rounded-lg bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
>
  View Project →
</a>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl font-bold">Certifications</h2>

        <div className="mt-8 space-y-4">
          <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
            <h3 className="font-bold">
              AWS Academy Cloud Foundations
            </h3>
            <p className="mt-1 text-slate-400">2025</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
            <h3 className="font-bold">
              Python for Everybody – Coursera
            </h3>
            <p className="mt-1 text-slate-400">2025</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
            <h3 className="font-bold">
              Remote Sensing and GIS Internship
            </h3>
            <p className="mt-1 text-slate-400">
              India Space Academy • 2026
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-slate-900 p-5">
            <h3 className="font-bold">
              AIML Internship
            </h3>
            <p className="mt-1 text-slate-400">
              EDUFYI TECH SOLUTIONS • 2025
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">Let's Connect</h2>

          <p className="mt-5 text-slate-400">
            Interested in working together or discussing an opportunity?
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:tejasreddy230@gmail.com"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/tejas-reddy-933767336"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/tejasreddy-816"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-6 py-3 font-semibold hover:bg-white/10"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-slate-500">
        © 2026 I. Tejas Reddy. All rights reserved.
      </footer>
    </main>
  );
}