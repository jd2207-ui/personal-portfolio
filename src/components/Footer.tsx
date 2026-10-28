export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">&lt;CyberDev /&gt;</span> — All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with passion & caffeine ☕
        </p>
      </div>
    </footer>
  );
}
