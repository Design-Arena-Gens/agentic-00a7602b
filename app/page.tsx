const signalBeacons = [
  {
    title: "Creative Technologist",
    description:
      "Building immersive web experiences that merge art direction with code craftsmanship.",
    icon: "🪐"
  },
  {
    title: "AI Storyteller",
    description:
      "Translating data into interactive narratives that feel alive, adaptive, and personal.",
    icon: "🤖"
  },
  {
    title: "Experience Architect",
    description:
      "Designing hyper-personalized journeys with sensory depth and lucid futurism.",
    icon: "🌌"
  }
];

const timeline = [
  {
    year: "2024",
    heading: "Neon Atlas",
    detail: "Launched a self-evolving portfolio that re-skins itself with live data feeds."
  },
  {
    year: "2022",
    heading: "Quantum Studio",
    detail: "Co-founded an XR lab prototyping spatial storytelling for future brands."
  },
  {
    year: "2020",
    heading: "Deep Signal",
    detail: "Led design systems for adaptive websites with real-time accessibility tuning."
  }
];

const constellationLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Email", href: "mailto:hello@novapersona.studio" }
];

export default function Page() {
  return (
    <main className="page">
      <div className="nebula" />
      <div className="grid" />

      <header className="hero">
        <span className="halo">Personal Signal</span>
        <h1>
          Nova Persona
          <span className="glow"> / Future-Facing Creator</span>
        </h1>
        <p>
          I craft immersive digital worlds that feel like tomorrow. From cinematic web experiences
          to adaptive interfaces, my work blends speculative design with empathetic storytelling.
        </p>
        <div className="cta-row">
          <a className="primary" href="#about">
            Explore My Orbit
          </a>
          <a className="secondary" href="#constellation">
            View Network →
          </a>
        </div>
      </header>

      <section className="beacons" id="about">
        {signalBeacons.map((beacon) => (
          <article key={beacon.title} className="beacon">
            <span className="icon" aria-hidden>
              {beacon.icon}
            </span>
            <h2>{beacon.title}</h2>
            <p>{beacon.description}</p>
          </article>
        ))}
      </section>

      <section className="about">
        <div className="panel">
          <h3>About Nova</h3>
          <p>
            I am a multidisciplinary creator shaping luminous digital narratives. My method fuses
            motion design, code-driven storytelling, and human-centered futures thinking. I explore
            how interfaces can respond to mood, rhythm, and intent.
          </p>
          <p>
            Currently based in a hybrid lab between London and the Metaverse, I collaborate with
            visionary teams to prototype experiential brands, AI companions, and immersive learning
            worlds.
          </p>
        </div>
        <div className="panel">
          <h3>Core Frequencies</h3>
          <ul>
            <li>Speculative UI architecture</li>
            <li>Immersive interaction design</li>
            <li>Creative coding & shader prototyping</li>
            <li>AI-assisted narrative design</li>
            <li>Spatial audio experience mapping</li>
          </ul>
        </div>
      </section>

      <section className="timeline">
        <h3>Chrono Log</h3>
        <div className="timeline-list">
          {timeline.map((entry) => (
            <article key={entry.year}>
              <span className="year">{entry.year}</span>
              <h4>{entry.heading}</h4>
              <p>{entry.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="constellation" id="constellation">
        <h3>Signal Links</h3>
        <div className="link-cloud">
          {constellationLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Nova Persona. Crafted in a quantum studio.</p>
      </footer>
    </main>
  );
}
