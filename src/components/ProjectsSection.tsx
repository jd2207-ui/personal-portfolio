export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gradient-section">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="mt-2 mx-auto h-1 w-16 rounded-full bg-primary" />

        <div className="glass-card mt-12 flex flex-col items-center p-12 text-center">
          <span className="text-5xl">🚀</span>
          <h3 className="mt-4 text-xl font-semibold">Coming Soon</h3>
          <p className="mt-2 max-w-md text-muted-foreground">
            I'm currently working on exciting cybersecurity projects. Stay tuned — they'll be showcased here soon!
          </p>
        </div>
      </div>
    </section>
  );
}