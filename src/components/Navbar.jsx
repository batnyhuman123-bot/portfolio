const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Projects', href: '#projects' },
]

function Navbar() {
  return (
    <header className="fixed left-1/2 top-2 z-50 -translate-x-1/2">
      <nav className="rounded-full border border-zinc-500/60 bg-white/85 px-6 py-2.5 shadow-[0_8px_22px_rgba(20,20,20,0.1)] backdrop-blur-sm">
        <ul className="flex items-center justify-center gap-7 text-sm font-medium text-zinc-700">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="transition-all duration-300 hover:text-zinc-900 hover:opacity-90"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
