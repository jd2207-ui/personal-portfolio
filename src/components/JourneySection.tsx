const timeline = [
  {
    year: "2025",
    title: "Computer Science & Engineering Student",
    description: "Pursuing CSE at Jalpaiguri Government Engineering College (Autonomous), combining academic foundations with hands-on cybersecurity practice.",
  },
  {
    year: "2025",
    title: "First CTF Competitions",
    description: "Started competing in Capture The Flag events, solving challenges in web exploitation, cryptography, and forensics.",
  },
  {
    year: "2026",
    title: "Linux & Networking Foundations",
    description: "Built a home lab environment, mastered Linux administration, and gained hands-on networking experience.",
  },
  {
    year: "2026",
    title: "Programming in C, C++ & Python",
    description: "Learned low-level programming in C, object-oriented programming in C++, and scripting with Python for automation and security tool development.",
  },
];

export default function JourneySection() {
  return (
    <section id="journey" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          My <span className="text-gradient">Journey</span>
        </h2>
        <div className="mt-2 mx-auto h-1 w-16 rounded-full bg-primary" />

        <div className="relative mt-12">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-neon-purple to-primary/20 sm:left-1/2 sm:-translate-x-px" />

          <div className="flex flex-col gap-10">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-6 sm:gap-0 ${
                  i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary glow-primary sm:left-1/2" />

                {/* Card */}
                <div className={`ml-10 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                  <span className="text-xs font-semibold text-primary tracking-widest">{item.year}</span>
                  <h3 className="mt-1 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
