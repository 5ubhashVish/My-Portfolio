import React, { useState } from "react";
import { personalInfo, projects, skills, experience } from "./info";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Linkedin,
  GithubIcon,
  Mail,
  ExternalLink,
  ChevronDown,
  DownloadIcon,
} from "lucide-react";
import resumePDF from "../resume.pdf";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>

            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Skills
              </a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute w-full bg-white/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#experience"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Experience
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="block px-3 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                Skills
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:20px_20px]"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50"></div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className="text-2xl text-gray-600 mb-8 font-light">
              {personalInfo.title}
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              {personalInfo.about}
            </p>

            <div className="flex justify-center space-x-6 mb-12">
              <a
                href={personalInfo.github}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={28} />
              </a>
              <a
                href={personalInfo.linkedin}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={28} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-600 hover:text-blue-600 transition-colors"
                rel="noreferrer"
                target="_blank"
              >
                <Mail size={28} />
              </a>
              <a
                href={resumePDF}
                download
                title="Download Resume"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <DownloadIcon size={28} />
              </a>
            </div>

            <a
              href="#experience"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors"
            >
              Scroll to see more <ChevronDown size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="bg-white/50 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {exp.position}
                </h3>
                <p className="text-blue-600 mb-4">
                  {exp.company} | {exp.duration}
                </p>
                <ul className="text-gray-600 text-left leading-relaxed list-disc">
                  {exp.description.map((elm) => (
                    <li key={elm}> {elm}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {project.title}
                  </h3>
                  {project.id === "game" ? (
                    <Link
                      to="/memoryGame"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </Link>
                  ) : (
                    <a
                      href={project.link}
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                <p className="text-gray-600 mb-6 text-left leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white/70 backdrop-blur-sm text-gray-700 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
