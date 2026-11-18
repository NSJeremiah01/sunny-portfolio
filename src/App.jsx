import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import {
  ArrowUpRight,
  Mail,
  Code2,
  BrainCircuit,
  Zap,
   MessageCircle,
  Menu,
  X,
  UserRound,
} from "lucide-react";

import { useState } from "react";
import sewaDashboard from "./assets/sewa-dashboard.png";
import profilePhoto from "./assets/passport.jpeg";
import guessingApp from "./assets/Word_guessing_app.png";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const skills = [
    {
      icon: Code2,
      title: "Programming",
      description: "Python, React",
    },
    {
      icon: BrainCircuit,
      title: "Machine Learning",
      description: "Scikit-learn, Model Evaluation",
    },
    {
      icon: Code2,
      title: "Data Analysis",
      description: "Pandas, NumPy, Matplotlib",
    },
    {
      icon: Zap,
      title: "Energy Engineering",
      description: "Electrical and Renewable Energy Systems",
    },
  ];

  return (
    <div className="min-h-screen bg-[#090D18] text-[#E9ECF5]">

      {/* NAVIGATION */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#090D18]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">

          <a href="#home" className="text-2xl font-bold tracking-tight">
            Sunny<span className="text-[#8295FF]">.</span>
          </a>

          <div className="hidden items-center gap-9 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 transition hover:text-[#8295FF]"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden rounded-lg border border-[#8295FF]/50 px-5 py-2.5 text-sm transition hover:bg-[#8295FF] hover:text-[#090D18] md:block"
          >
            Let's Connect
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FaXTwitter size={25} /> : <Menu size={25} />}
          </button>
        </nav>

        {menuOpen && (
          <div className="border-t border-white/10 bg-[#111827] px-6 py-5 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-gray-300 hover:text-[#8295FF]"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <main>
        <section
          id="home"
          className="mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-2 lg:px-10"
        >
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#8295FF]/30 bg-[#8295FF]/10 px-4 py-2 text-xs font-medium tracking-wider text-[#A7B4FF]">
              <span className="h-2 w-2 rounded-full bg-[#8295FF]" />
              ELECTRICAL ENGINEER · AI/ML ENTHUSIAST
            </div>

            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Engineering ideas into{" "}
              <span className="text-[#8295FF]">
                intelligent solutions.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              Hello, I'm Sunny. An Electrical & Electronics Engineer
              exploring the intersection of Artificial Intelligence,
              Machine Learning and energy systems.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[#8295FF] px-6 py-3.5 font-semibold text-[#090D18] transition hover:bg-[#A7B4FF]"
              >
                Explore My Projects
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#contact"
                className="rounded-lg border border-white/20 px-6 py-3.5 font-medium transition hover:border-[#8295FF] hover:text-[#8295FF]"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-12 flex items-center gap-5">
              <a
                href="https://github.com/NSJeremiah01"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-gray-400 transition hover:text-white"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/sunday-ndubuisi-9005a522b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 transition hover:text-[#8295FF]"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href="mailto:ndubuisisundayj05@gmail.com"
                aria-label="Email"
                className="text-gray-400 transition hover:text-white"
              >
                <Mail size={22} />
              </a>

              <a
                href="https://wa.me/2347046264942?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-green-500/40 px-2 py-2 font-semibold text-green-400 transition hover:bg-green-500/10"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* PROFILE PHOTO PLACEHOLDER */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-3xl bg-[#8295FF]/10 blur-3xl" />

            <div className="relative flex aspect-4/5 items-center justify-center overflow-hidden rounded-3xl border border-[#8295FF]/30 bg-linear-to-br from-[#202B40] to-[#111827]">
              <img
                src={profilePhoto}
                alt="Portrait of Sunny"
                className="relative w-full aspect-4/5 object-cover object-top rounded-3xl border border-[#8295FF]/30"
              />

              <div className="absolute bottom-6 left-6 rounded-xl border border-white/10 bg-[#090D18]/80 px-4 py-3 backdrop-blur">
                <p className="text-xs text-gray-400">My Focus</p>
                <p className="mt-1 text-sm font-semibold text-[#8295FF]">
                  Engineering × AI/ML × Energy
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="border-y border-white/10 bg-[#111827] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold tracking-widest text-[#8295FF]">
              01 / ABOUT ME
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A little about me.
            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
              I am an Electrical and Electronics Engineer with a strong interest in Artificial Intelligence and Machine Learning applications in the energy sector.

              My interests include renewable energy systems, electricity demand forecasting, energy optimisation and the use of data-driven methods to solve practical engineering problems.

              I enjoy learning, researching and building practical solutions that connect engineering principles with emerging technologies.
            </p>
          </div>
        </section>

        {/* PROJECTS SECTION */}
       
{/* PROJECTS SECTION */}
<section id="projects" className="px-6 py-24 lg:px-10">
  <div className="mx-auto max-w-7xl">
    <p className="text-sm font-semibold tracking-widest text-[#8295FF]">
      02 / SELECTED WORK
    </p>

    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
      Projects I've worked on.
    </h2>

    {/* PROJECT GRID */}
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* PROJECT 1 */}
      <div className="rounded-xl border border-white/10 bg-[#111827] p-4 transition hover:-translate-y-1 hover:border-[#8295FF]/50">
        <a
          href="https://sewa-peak-load-forecastinggit-4p4gsdmnmlvdjwuikabkgl.streamlit.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="mb-5 overflow-hidden rounded-lg">
            <img
              src={sewaDashboard}
              alt="SEWA Electricity Peak Load Forecasting Dashboard"
              className="h-40 w-full object-cover"
            />
          </div>
        </a>

        <span className="rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400">
          Completed · Deployed
        </span>

        <h3 className="mt-4 text-lg font-bold">
          SEWA Daily Peak Electricity Demand Forecasting
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Developed a machine learning application to estimate daily peak
          electricity demand using historical electricity and weather data
          from the Sharjah Electricity, Water and Gas Authority (SEWA).
          Linear Regression achieved an MAE of 42.53 MW and an R² score of
          0.9872.
        </p>

        <p className="mt-4 text-xs leading-6 text-[#8295FF]">
          Python · Pandas · NumPy · Scikit-learn · Streamlit
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <a
            href="https://github.com/NSJeremiah01/sewa-peak-load-forecasting"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium hover:text-[#8295FF]"
          >
            <FaGithub size={15} /> GitHub <ArrowUpRight size={13} />
          </a>

          <a
            href="https://sewa-peak-load-forecastinggit-4p4gsdmnmlvdjwuikabkgl.streamlit.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium hover:text-[#8295FF]"
          >
            Live Demo <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="rounded-xl border border-white/10 bg-[#111827] p-4 transition hover:-translate-y-1 hover:border-[#8295FF]/50">
        <a
          href="https://sentiment-and-word-guessing-app-fxuerqhzgsyahtzrcawub5.streamlit.app/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="mb-5 overflow-hidden rounded-lg">
            <img
              src={guessingApp}
              alt="Sentiment and Word Guessing Application"
              className="h-40 w-full object-cover"
            />
          </div>
        </a>

        <span className="rounded-full bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400">
          Completed · Deployed
        </span>

        <h3 className="mt-4 text-lg font-bold">
          Sentiment and Word Guessing App
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-400">
          Built a Streamlit application using pre-trained NLP models.
          It performs sentiment analysis by classifying text as positive
          or negative and predicts possible missing words in sentences
          containing a [MASK] token.
        </p>

        <p className="mt-4 text-xs leading-6 text-[#8295FF]">
          Python · Streamlit · Hugging Face Transformers · PyTorch
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <a
            href="https://github.com/NSJeremiah01/SENTIMENT-AND-WORD-GUESSING-APP"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium hover:text-[#8295FF]"
          >
            <FaGithub size={15} /> GitHub <ArrowUpRight size={13} />
          </a>

          <a
            href="https://sentiment-and-word-guessing-app-fxuerqhzgsyahtzrcawub5.streamlit.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium hover:text-[#8295FF]"
          >
            Live Demo <ArrowUpRight size={13} />
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


        {/* SKILLS SECTION */}
        <section id="skills" className="border-y border-white/10 bg-[#111827] px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold tracking-widest text-[#8295FF]">
              03 / TECHNICAL SKILLS
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Tools I work with.
            </h2>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.title}
                    className="rounded-xl border border-white/10 bg-[#202B40]/50 p-6 transition hover:-translate-y-1 hover:border-[#8295FF]/50"
                  >
                    <Icon size={30} className="text-[#8295FF]" />

                    <h3 className="mt-5 font-semibold">
                      {skill.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="px-6 py-24 lg:px-10">
          <div className="mx-auto max-w-7xl text-center">
            <p className="text-sm font-semibold tracking-widest text-[#8295FF]">
              04 / CONTACT
            </p>

            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
              Let's connect and build something meaningful.
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-400">
              I'm open to conversations, collaborations and
              opportunities in engineering, AI and energy technology.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

  {/* Email button */}
  <a
    href="mailto:ndubuisisundayj05@gmail.com"
    className="inline-flex items-center gap-2 rounded-lg bg-[#8295FF] px-7 py-4 font-semibold text-[#090D18] transition hover:bg-[#A7B4FF]"
  >
    Get in Touch
    <ArrowUpRight size={18} />
  </a>

  {/* WhatsApp button */}
  <a
    href="https://wa.me/2347046264942?text=Hello%2C%20I%20would%20like%20to%20connect%20with%20you."
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 rounded-lg border border-green-500/40 px-7 py-4 font-semibold text-green-400 transition hover:bg-green-500/10"
  >
    <MessageCircle size={18} />
    WhatsApp
  </a>

 </div> 
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Sunny. All rights reserved.
          </p>

          
        </div>
      </footer>
    </div>
  );
}

export default App;
