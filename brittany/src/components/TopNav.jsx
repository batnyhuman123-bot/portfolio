const navItems = ['home', 'about me', 'projects']

function TopNav() {
  return (
    <nav className="flex items-center justify-center gap-3">
      {navItems.map((item) => (
        <button
          key={item}
          type="button"
          className="rounded-full border border-zinc-300 px-5 py-2 text-sm text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-zinc-100"
        >
          {item}
        </button>
      ))}
    </nav>
  )
}

export default TopNav
