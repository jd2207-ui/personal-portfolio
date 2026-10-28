const skills = [
  { name: "Linux", level: 30, icon: "🐧" },
  { name: "Networking", level: 30, icon: "🌐" },
  { name: "C Programming", level: 30, icon: "⚙️" },
  { name: "Cybersecurity", level: 30, icon: "🔒" },
  { name: "Python", level: 20, icon: "🐍" },
  { name: "Web Security", level: 20, icon: "🛡️" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="mt-2 mx-auto h-1 w-16 rounded-full bg-primary" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="glass-card group p-6 transition-all duration-300 hover:scale-105 hover:glow-primary"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{skill.icon}</span>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>Proficiency</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-neon transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
