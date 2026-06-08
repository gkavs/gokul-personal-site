import Image from "next/image";

const profileLinks = [
  {
    label: "LinkedIn",
    title: "Professional updates",
    description:
      "Connect with me for my work history, current projects, and the problems I am thinking through with teams and peers.",
    href: "https://www.linkedin.com/in/gokulkavaturi/",
    cta: "View LinkedIn",
  },
  {
    label: "Medium",
    title: "Writing and notes",
    description:
      "Read my essays, field notes, and practical reflections on building products, learning in public, and working with clarity.",
    href: "https://medium.com/@gokulkavaturi",
    cta: "Read Medium",
  },
];

const focusAreas = [
  "Building useful products",
  "Turning ambiguity into plans",
  "Learning quickly and sharing clearly",
];

const outsideWork = [
  "Exploring new places, food, and conversations that widen my point of view.",
  "Reading, writing, and collecting ideas that help me connect technology with real human needs.",
  "Staying active, trying creative side projects, and making time for people who matter.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#1f2933]">
      <section className="hero-shell overflow-hidden">
        <div className="mx-auto grid min-h-screen w-full max-w-6xl content-center gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_0.78fr] lg:px-10">
          <div className="flex flex-col justify-center">
            <nav className="mb-12 flex items-center justify-between gap-4 text-sm font-semibold text-[#4d5b68]">
              <a className="brand-mark" href="#top" aria-label="Home">
                GK
              </a>
              <div className="flex items-center gap-5">
                <a className="nav-link" href="#links">
                  Links
                </a>
                <a className="nav-link" href="#outside-work">
                  Outside work
                </a>
              </div>
            </nav>

            <div id="top" className="max-w-3xl">
              <p className="eyebrow">Personal brand</p>
              <h1 className="mt-4 text-5xl font-black leading-[0.98] text-[#17202a] sm:text-6xl lg:text-7xl">
                Hi, I&apos;m Gokul.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#3a4652] sm:text-xl">
                I build, learn, and write at the intersection of thoughtful
                technology and practical execution. I like turning unclear
                problems into useful systems, clear stories, and momentum people
                can feel.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a className="primary-link" href="#links">
                Explore my work
              </a>
              <a
                className="secondary-link"
                href="mailto:gokul.kavaturi@hotmail.com"
              >
                Get in touch
              </a>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {focusAreas.map((area) => (
                <div className="focus-pill" key={area}>
                  {area}
                </div>
              ))}
            </div>
          </div>

          <aside className="relative flex min-h-[360px] items-center justify-center lg:min-h-[680px]">
            <div className="portrait-panel" aria-hidden="true">
              <div className="portrait-sun" />
              <div className="portrait-card">
                <div className="portrait-avatar">
                  <Image
                    alt="Gokul Kavaturi"
                    height={184}
                    src="/IMG_9971.JPG?v=5"
                    width={184}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase text-[#5b6773]">
                    Current focus
                  </p>
                  <p className="mt-2 text-2xl font-black text-[#17202a]">
                    Products, writing, and thoughtful growth.
                  </p>
                </div>
              </div>
              <div className="portrait-note">
                <span>Open to meaningful conversations</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section id="links" className="content-band bg-[#fffaf2]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Where to find me</p>
            <h2 className="section-title">Follow the work and the thinking.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {profileLinks.map((link) => (
              <article className="link-card" key={link.label}>
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-sm font-black uppercase text-[#be5a38]">
                      {link.label}
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-[#17202a]">
                      {link.title}
                    </h3>
                  </div>
                  <span className="link-arrow" aria-hidden="true">
                    -&gt;
                  </span>
                </div>
                <p className="mt-5 text-base leading-7 text-[#4d5b68]">
                  {link.description}
                </p>
                <a className="card-link" href={link.href}>
                  {link.cta}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="outside-work" className="content-band bg-[#eaf3ef]">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1fr] lg:px-10">
          <div>
            <p className="eyebrow">Outside work</p>
            <h2 className="section-title">
              The parts of life that keep the work honest.
            </h2>
          </div>

          <div className="grid gap-4">
            {outsideWork.map((item, index) => (
              <article className="outside-row" key={item}>
                <span className="outside-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#17202a] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-white/70">
            Built as a home base for work, writing, and life outside the inbox.
          </p>
          <a className="text-sm font-black text-white" href="#top">
            Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}
