function FooterNote() {
  return (
    <footer className="pt-4 text-center">
      <div className="mb-5 flex items-center justify-center gap-2 text-sm text-zinc-500">
        <a
          href="mailto:fboonsiew@gmail.com"
          className="rounded-full border border-zinc-200 px-3 py-1.5 transition hover:bg-zinc-100"
        >
          email
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-zinc-200 px-3 py-1.5 transition hover:bg-zinc-100"
        >
          instagram
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-zinc-200 px-3 py-1.5 transition hover:bg-zinc-100"
        >
          linkedin
        </a>
      </div>
      <p className="text-xs text-zinc-500">© 2026, Fong Boon Siew</p>
    </footer>
  )
}

export default FooterNote
