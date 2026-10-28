import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile-cropped.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-neon-purple/10 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-12 px-6 pt-28 pb-16 md:flex-row md:pt-0">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="animate-slide-up text-sm font-medium tracking-widest text-primary uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="animate-slide-up-delay-1 mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-gradient">Jayita Das</span>
          </h1>
          <p className="animate-slide-up-delay-2 mt-3 text-xl text-neon font-semibold font-[family-name:var(--font-heading)]">
            Aspiring Cybersecurity Expert
          </p>
          <p className="animate-slide-up-delay-3 mt-4 max-w-lg text-muted-foreground leading-relaxed">
            Passionate about securing digital systems, learning offensive &amp; defensive security, and building tools that make the internet a safer place.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start animate-slide-up-delay-3">
            <Button variant="glow" size="lg" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="glow-outline" size="lg" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>

        {/* Illustration */}
        <div className="flex-1 flex justify-center animate-float">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-[80px]" />
            <img
              src={profileImg}
              alt="Jayita Das"
              width={400}
              height={400}
              className="relative z-10 w-64 sm:w-80 lg:w-96 rounded-full drop-shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-glow-pulse">
        <span className="text-xs text-muted-foreground">Scroll down</span>
        <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-1">
          <div className="h-2 w-1 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
