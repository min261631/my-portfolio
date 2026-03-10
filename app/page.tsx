import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-black/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-black dark:text-zinc-50">
              Portfolio
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors">
                About
              </a>
              <a href="#skills" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-50 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Welcome to my portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-black dark:text-zinc-50 leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
            A passionate developer creating beautiful and functional web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-black dark:bg-zinc-50 text-white dark:text-black font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border-2 border-black dark:border-zinc-50 text-black dark:text-zinc-50 font-medium hover:bg-black hover:text-white dark:hover:bg-zinc-50 dark:hover:text-black transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-black dark:text-zinc-50">About Me</h2>
          <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I&apos;m a developer passionate about creating innovative solutions and beautiful user experiences. 
              With a focus on clean code and modern technologies, I bring ideas to life through thoughtful design 
              and robust implementation.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black dark:text-zinc-50">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "Tailwind CSS",
              "Git",
              "Docker",
            ].map((skill) => (
              <div
                key={skill}
                className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-center hover:shadow-lg transition-shadow"
              >
                <span className="text-lg font-medium text-black dark:text-zinc-50">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-black dark:text-zinc-50">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mb-4"></div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-zinc-50">
                  Project {project}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                  A brief description of the project and its key features.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["React", "TypeScript"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
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

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black dark:text-zinc-50">Get In Touch</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-3 rounded-full bg-black dark:bg-zinc-50 text-white dark:text-black font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-black dark:border-zinc-50 text-black dark:text-zinc-50 font-medium hover:bg-black hover:text-white dark:hover:bg-zinc-50 dark:hover:text-black transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border-2 border-black dark:border-zinc-50 text-black dark:text-zinc-50 font-medium hover:bg-black hover:text-white dark:hover:bg-zinc-50 dark:hover:text-black transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-6xl mx-auto text-center text-sm text-zinc-600 dark:text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
