export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-section">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="mt-2 mx-auto h-1 w-16 rounded-full bg-primary" />

        <div className="glass-card mt-12 p-8 sm:p-12">
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm a dedicated cybersecurity enthusiast with a strong foundation in Linux systems,
            networking fundamentals, and low-level programming in C. Currently honing my skills
            through hands-on labs, CTF challenges, and personal security projects.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            My goal is to become a skilled penetration tester and security researcher, contributing
            to a more secure digital world. I thrive on solving complex problems, understanding
            system internals, and staying ahead of evolving threats.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: "CTFs Solved", value: "25+" },
              { label: "Projects Built", value: "2" },
              { label: "Certs Pursuing", value: "25+" },
              { label: "Coffee Cups", value: "∞" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-gradient">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
