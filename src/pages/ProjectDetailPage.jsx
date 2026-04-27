import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { projects } from '../data/projects'

function DotHeading({ title, colorClass }) {
  return (
    <h2 className="flex items-center gap-3 text-4xl font-semibold text-zinc-900">
      <span className={`h-5 w-5 rounded-full ${colorClass}`} aria-hidden="true" />
      {title}
    </h2>
  )
}

function BulletList({ items }) {
  return (
    <ul className="mt-5 list-disc space-y-3 pl-8 text-xl leading-relaxed text-zinc-800">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function ProjectDetailPage({ projectSlug }) {
  const [solutionSlideIndex, setSolutionSlideIndex] = useState(0)
  const [processSlideIndex, setProcessSlideIndex] = useState(0)
  const [shinChanScreenshotIndex, setShinChanScreenshotIndex] = useState(0)
  const processTouchStartX = useRef(null)
  const screenshotTouchStartX = useRef(null)
  const location = useLocation()
  const { slug: slugFromParams } = useParams()
  const slug = projectSlug ?? slugFromParams
  const project = projects.find((item) => item.slug === slug)
  const isRainbowFalls = project?.slug === 'rainbow-falls'
  const isMoniTraka = project?.slug === 'moni-traka'
  const isShinChan = project?.slug === 'shinchan-adventures'
  const moniSolutionSlides = [
    {
      title: 'Smart Dashboard & Cash Tracking',
      image: 'https://i.postimg.cc/1XFcLCf6/Solution-2-(1).png',
    },
    {
      title: 'Auto Transaction Tracking',
      image: 'https://i.postimg.cc/632dvjLs/Solution-1-(1).png',
    },
    {
      title: 'Multi-Card Management',
      image: 'https://i.postimg.cc/qvJyLMX6/Solution-3-(1).png',
    },
  ]

  const showPreviousSolutionSlide = () => {
    setSolutionSlideIndex((prev) => (prev === 0 ? moniSolutionSlides.length - 1 : prev - 1))
  }

  const showNextSolutionSlide = () => {
    setSolutionSlideIndex((prev) => (prev === moniSolutionSlides.length - 1 ? 0 : prev + 1))
  }

  const moniProcessSlides = [
    {
      title: '👤 User Research',
      image: 'https://i.postimg.cc/vBVVB1bs/Group-32-(1).png',
      body:
        'A user persona was created to understand user needs, behaviors, and pain points in managing daily expenses.',
    },
    {
      title: '✏️ Sketches',
      image: 'https://i.postimg.cc/jSSnf3tX/sketches.png',
      body:
        'I started the design process by creating hand-drawn sketches to quickly explore layout ideas and screen structure. These sketches helped me visualize the main features such as the dashboard, card management, and transaction history before moving into digital design.',
    },
    {
      title: '📱 Wireframes & Prototypes',
      image: 'https://i.postimg.cc/zDwycYBZ/sketches-(1).png',
      body:
        'Based on the sketches, I developed low-fidelity wireframes to define the layout, user flow, and content placement for each screen. This step helped ensure a clear structure and smooth navigation before designing the final high-fidelity UI.',
    },
  ]
  const moniContents = [
    { id: 'problem', label: 'Problem', accent: 'bg-rose-400' },
    { id: 'solution', label: 'Solution', accent: 'bg-cyan-500' },
    { id: 'process', label: 'Process', accent: 'bg-indigo-500' },
    { id: 'final-design', label: 'Final Design', accent: 'bg-sky-500' },
    { id: 'product-success', label: 'Product Successes', accent: 'bg-amber-400' },
    { id: 'learning', label: 'What I Learned', accent: 'bg-emerald-400' },
  ]
  const shinChanContents = [
    { id: 'intro', label: 'Intro', accent: 'bg-emerald-400' },
    { id: 'goal', label: 'Goal', accent: 'bg-rose-400' },
    { id: 'features', label: 'Features', accent: 'bg-indigo-500' },
    { id: 'gameplay-rules', label: 'Gameplay Rules', accent: 'bg-sky-500' },
    { id: 'objectives', label: 'Game Objectives', accent: 'bg-amber-400' },
    { id: 'gameplay-flow', label: 'Gameplay Flow', accent: 'bg-cyan-500' },
    { id: 'development', label: 'Development', accent: 'bg-yellow-400' },
    { id: 'process', label: 'Process', accent: 'bg-violet-500' },
    { id: 'testing-feedback', label: 'Testing & Feedback', accent: 'bg-orange-400' },
    { id: 'screenshots', label: 'Screenshots', accent: 'bg-pink-400' },
    { id: 'demo-video', label: 'Demo Video', accent: 'bg-red-500' },
    { id: 'learning', label: 'What I Learned', accent: 'bg-emerald-500' },
  ]
  const rainbowContents = [
    { id: 'problem', label: 'Problem', accent: 'bg-rose-400' },
    { id: 'solution', label: 'Solution', accent: 'bg-cyan-500' },
    { id: 'process', label: 'Process', accent: 'bg-sky-500' },
    { id: 'key-features', label: 'Key Features', accent: 'bg-violet-500' },
    { id: 'before-after', label: 'Before & After', accent: 'bg-amber-400' },
    { id: 'reflection', label: 'Reflection', accent: 'bg-emerald-400' },
  ]
  const shinChanScreenshotSlides = [
    {
      src: 'https://i.postimg.cc/NFQ1L1D8/image.png',
      alt: 'Shin-Chan Adventures gameplay screenshot 1',
      caption:
        'This is the main menu where players choose the game difficulty (Easy, Medium, Hard) to start playing.',
    },
    {
      src: 'https://i.postimg.cc/NFNrMZLV/image.png',
      alt: 'Shin-Chan Adventures gameplay screenshot 2',
      caption:
        'This screen appears when the player loses the game (runs out of lives or time). It shows a “Game Over” message and gives the option to play again or return, making it easy for players to restart quickly.',
    },
    { src: 'https://i.postimg.cc/rmMd9q4c/image.png', alt: 'Shin-Chan Adventures gameplay screenshot 3' },
    { src: 'https://i.postimg.cc/MZscy2p2/image.png', alt: 'Shin-Chan Adventures gameplay screenshot 4' },
  ]
  const moniFigmaUrl =
    'https://www.figma.com/design/lmuOkQEvos55ir5E676haI/MONI-TRAKA?node-id=0-1&t=hwkNYeyZZyvuc6Wm-1'
  const rainbowFigmaUrl =
    'https://www.figma.com/design/ArSE9ytfAf7tseEJn1PxUw/Redesign-website?t=hwkNYeyZZyvuc6Wm-1'
  const moniFigmaEmbed = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(moniFigmaUrl)}`
  const rainbowFigmaEmbed = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(rainbowFigmaUrl)}`
  const shinChanVideoUrl = 'https://www.youtube.com/watch?v=oF9LcAQkAxQ'
  const shinChanVideoEmbed = 'https://www.youtube.com/embed/oF9LcAQkAxQ'

  const showPreviousProcessSlide = () => {
    setProcessSlideIndex((prev) => (prev === 0 ? moniProcessSlides.length - 1 : prev - 1))
  }

  const showNextProcessSlide = () => {
    setProcessSlideIndex((prev) => (prev === moniProcessSlides.length - 1 ? 0 : prev + 1))
  }

  const onProcessTouchStart = (event) => {
    processTouchStartX.current = event.touches[0].clientX
  }

  const onProcessTouchEnd = (event) => {
    if (processTouchStartX.current === null) {
      return
    }
    const deltaX = event.changedTouches[0].clientX - processTouchStartX.current
    processTouchStartX.current = null
    if (Math.abs(deltaX) < 40) {
      return
    }
    if (deltaX < 0) {
      showNextProcessSlide()
    } else {
      showPreviousProcessSlide()
    }
  }

  const showPreviousShinChanScreenshot = () => {
    setShinChanScreenshotIndex((prev) =>
      prev === 0 ? shinChanScreenshotSlides.length - 1 : prev - 1,
    )
  }

  const showNextShinChanScreenshot = () => {
    setShinChanScreenshotIndex((prev) =>
      prev === shinChanScreenshotSlides.length - 1 ? 0 : prev + 1,
    )
  }

  const onScreenshotTouchStart = (event) => {
    screenshotTouchStartX.current = event.touches[0].clientX
  }

  const onScreenshotTouchEnd = (event) => {
    if (screenshotTouchStartX.current === null) {
      return
    }
    const deltaX = event.changedTouches[0].clientX - screenshotTouchStartX.current
    screenshotTouchStartX.current = null
    if (Math.abs(deltaX) < 40) {
      return
    }
    if (deltaX < 0) {
      showNextShinChanScreenshot()
    } else {
      showPreviousShinChanScreenshot()
    }
  }

  useEffect(() => {
    if (!location.hash) {
      return
    }
    const id = location.hash.replace(/^#/, '')
    if (!id) {
      return
    }
    const t = requestAnimationFrame(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
    return () => cancelAnimationFrame(t)
  }, [location.pathname, location.hash])

  if (!project) {
    return (
      <main className="min-h-screen bg-[#cbc8e9] px-4 pb-10 pt-8 sm:px-6 lg:px-10">
        <section className="mx-auto max-w-5xl rounded-[28px] border border-zinc-500/70 bg-[#cfccf0] p-8 text-center shadow-[0_10px_26px_rgba(32,32,32,0.08)]">
          <h1 className="text-4xl font-semibold text-zinc-900">Project not found</h1>
          <Link
            to="/#home"
            className="mt-6 inline-block rounded-xl border border-zinc-500/80 bg-[#f9f9f9] px-5 py-3 text-base font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            ← Back to Home
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#cbc8e9] px-4 pb-10 pt-8 sm:px-6 lg:px-10">
      <section className="mx-auto max-w-5xl rounded-[28px] border border-zinc-500/70 bg-[#cfccf0] px-6 py-8 shadow-[0_10px_26px_rgba(32,32,32,0.08)] sm:px-8 lg:px-10">
        <header className="text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-4 text-sm font-medium tracking-wide text-zinc-700">{project.subtitle}</p>
        </header>

        <div className="mt-8 rounded-[24px] border border-zinc-500/70 bg-[#f6f6f6] p-4 shadow-[0_8px_20px_rgba(30,30,30,0.05)] sm:p-6">
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            className="h-auto w-full rounded-[16px] border border-zinc-500/60 object-contain"
          />
        </div>

        {isMoniTraka ? (
          <>
            <div className="mt-8 rounded-[24px] border border-zinc-500/70 bg-[#f6f6f6] px-6 py-8 shadow-[0_8px_20px_rgba(30,30,30,0.05)] sm:px-8">
              <section className="rounded-[18px] border border-zinc-500/60 bg-[#fffde9] px-6 py-6">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Contents</h2>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {moniContents.map((item, idx) => (
                    <Link
                      key={item.id}
                      to={`/moni-traka#${item.id}`}
                      className="rounded-[14px] border border-zinc-400/50 bg-[#f6f6f6] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                      <span className={`block h-2 w-12 rounded-full ${item.accent}`} aria-hidden="true" />
                      <p className="mt-2 text-3xl font-semibold leading-none text-zinc-900">
                        {String(idx + 1).padStart(2, '0')}
                      </p>
                      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-700">
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-8 rounded-[24px] border border-zinc-500/70 bg-[#f6f6f6] px-6 py-8 shadow-[0_8px_20px_rgba(30,30,30,0.05)] sm:px-8">
            <section id="problem" className="mt-1 scroll-mt-24">
              <DotHeading title="Problem" colorClass="bg-red-500" />
              <p className="mt-5 text-xl leading-relaxed text-zinc-800">
                Many users find it difficult to track their expenses because most apps require manual
                input, which is time-consuming and easy to forget.
                <br />
                As a result, users often have incomplete records and poor visibility of their
                spending.
              </p>
            </section>

            <section id="solution" className="mt-12 scroll-mt-24">
              <DotHeading title="Solution" colorClass="bg-lime-600" />
              <p className="mt-5 text-xl leading-relaxed text-zinc-800">
                Moni Traka simplifies money tracking with automatic recording and a clear dashboard.
              </p>
            </section>

            <section className="mt-10">
              <div className="w-full min-w-0 overflow-hidden rounded-[28px]">
                <div
                  className="flex w-full transition-transform duration-500 ease-out will-change-transform"
                  style={{ transform: `translate3d(-${solutionSlideIndex * 100}%, 0, 0)` }}
                >
                  {moniSolutionSlides.map((slide) => (
                    <div
                      key={slide.title}
                      className="box-border min-w-0 max-w-full shrink-0 grow-0"
                      style={{ flex: '0 0 100%' }}
                    >
                      <div className="rounded-[28px] bg-[#fffde9] p-8 lg:p-10">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="mx-auto h-auto w-full rounded-[16px] object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={showPreviousSolutionSlide}
                  className="rounded-full border border-zinc-500/70 bg-white/70 px-4 py-2 text-lg text-zinc-700 transition-colors duration-300 hover:bg-white"
                  aria-label="Previous solution slide"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={showNextSolutionSlide}
                  className="rounded-full border border-zinc-500/70 bg-white/70 px-4 py-2 text-lg text-zinc-700 transition-colors duration-300 hover:bg-white"
                  aria-label="Next solution slide"
                >
                  →
                </button>
              </div>

              <div className="mt-3 flex items-center justify-center gap-2">
                {moniSolutionSlides.map((slide, idx) => (
                  <button
                    key={slide.title}
                    type="button"
                    onClick={() => setSolutionSlideIndex(idx)}
                    className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                      idx === solutionSlideIndex ? 'bg-zinc-800' : 'bg-zinc-400/70'
                    }`}
                    aria-label={`Go to ${slide.title}`}
                  />
                ))}
              </div>
            </section>

            <section id="process" className="mt-16 scroll-mt-24">
              <DotHeading title="Process" colorClass="bg-sky-500" />

              <div
                className="mt-6"
                onTouchStart={onProcessTouchStart}
                onTouchEnd={onProcessTouchEnd}
                role="presentation"
              >
                <div className="w-full min-w-0 overflow-hidden rounded-[28px]">
                  <div
                    className="flex w-full transition-transform duration-500 ease-out will-change-transform"
                    style={{ transform: `translate3d(-${processSlideIndex * 100}%, 0, 0)` }}
                  >
                    {moniProcessSlides.map((slide) => (
                      <div
                        key={slide.title}
                        className="box-border min-w-0 max-w-full shrink-0 grow-0"
                        style={{ flex: '0 0 100%' }}
                      >
                        <div className="rounded-[28px] bg-[#fffde9] p-8 lg:p-10">
                          <h3 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">{slide.title}</h3>
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="mx-auto mt-5 h-auto w-full max-w-full rounded-[16px] object-contain"
                          />
                          <p className="mt-5 text-xl leading-relaxed text-zinc-800">{slide.body}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={showPreviousProcessSlide}
                    className="rounded-full border border-zinc-500/70 bg-white/70 px-4 py-2 text-lg text-zinc-700 transition-colors duration-300 hover:bg-white"
                    aria-label="Previous process slide"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={showNextProcessSlide}
                    className="rounded-full border border-zinc-500/70 bg-white/70 px-4 py-2 text-lg text-zinc-700 transition-colors duration-300 hover:bg-white"
                    aria-label="Next process slide"
                  >
                    →
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-center gap-2">
                  {moniProcessSlides.map((slide, idx) => (
                    <button
                      key={slide.title}
                      type="button"
                      onClick={() => setProcessSlideIndex(idx)}
                      className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                        idx === processSlideIndex ? 'bg-zinc-800' : 'bg-zinc-400/70'
                      }`}
                      aria-label={`Go to ${slide.title}`}
                    />
                  ))}
                </div>
              </div>
            </section>

            <section id="final-design" className="mt-16 scroll-mt-24">
              <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">Final Design</h2>
              <img
                src="https://i.postimg.cc/02W2Tk1H/full-app-(2).png"
                alt="Moni Traka final design screens"
                className="mt-5 h-auto w-full rounded-[16px] border border-zinc-500/60 object-contain"
              />
              <p className="mt-5 text-xl leading-relaxed text-zinc-800">
                The final design of Moni Traka focuses on simplicity, clarity, and ease of use. The
                interface uses a clean layout with a consistent color scheme to highlight important
                information such as balance, transactions, and actions. Key screens include the
                dashboard, transaction report, card management, and profile page, allowing users to
                easily track and manage their finances in one place.
              </p>
            </section>

            <section id="product-success" className="mt-12 scroll-mt-24">
              <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">Product Successes 👏</h2>
              <p className="mt-5 text-xl leading-relaxed text-zinc-800">
                The final design improved usability by simplifying expense tracking and reducing the
                need for manual input. Users were able to track their spending more consistently and
                understand their financial habits more clearly. Early feedback showed that users
                appreciated the clean interface, real-time dashboard, and automatic tracking
                features, making the app easy and enjoyable to use.
              </p>
            </section>

            <section id="learning" className="mt-12 scroll-mt-24">
              <h2 className="text-4xl font-semibold tracking-tight text-zinc-900">What I Learned 🌱</h2>
              <p className="mt-5 text-xl leading-relaxed text-zinc-800">
                Through this project, I learned that good UI/UX design is not just about visual
                design, but about solving real user problems. I realized the importance of
                understanding user behavior, especially how users prefer fast and simple solutions in
                daily tasks. I also learned how to design clear user flows, improve usability through
                iteration, and create interfaces that balance functionality and simplicity.
              </p>
            </section>

            <section className="mt-12 scroll-mt-24">
              <DotHeading title="Figma File" colorClass="bg-indigo-500" />
              <a
                href={moniFigmaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 block rounded-[16px] border border-zinc-500/60 bg-white/40 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70"
              >
                <img
                  src={project.imageSrc}
                  alt="Moni Traka cover preview"
                  className="h-auto w-full rounded-[12px] object-contain"
                />
              </a>
              <a
                href={moniFigmaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block rounded-xl border border-zinc-500/80 bg-[#f9f9f9] px-5 py-3 text-base font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                Open Moni Traka Figma
              </a>
              <div className="mt-4 overflow-hidden rounded-[16px] border border-zinc-500/60 bg-white">
                <iframe
                  title="Moni Traka Figma Embed"
                  src={moniFigmaEmbed}
                  className="h-[480px] w-full"
                  allowFullScreen
                />
              </div>
            </section>
            </div>
          </>
        ) : isShinChan ? (
          <>
            <div className="mt-8 rounded-[24px] border border-zinc-500/70 bg-[#f6f6f6] px-6 py-8 shadow-[0_8px_20px_rgba(30,30,30,0.05)] sm:px-8">
              <section className="rounded-[18px] border border-zinc-500/60 bg-[#fffde9] px-6 py-6">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Contents</h2>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                  {shinChanContents.map((item, idx) => (
                    <Link
                      key={item.id}
                      to={`/shinchan-adventures#${item.id}`}
                      className="rounded-[14px] border border-zinc-400/50 bg-[#f6f6f6] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                      <span className={`block h-2 w-12 rounded-full ${item.accent}`} aria-hidden="true" />
                      <p className="mt-2 text-3xl font-semibold leading-none text-zinc-900">
                        {String(idx + 1).padStart(2, '0')}
                      </p>
                      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-700">
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-8 rounded-[24px] border border-zinc-500/70 bg-[#f6f6f6] px-6 py-8 shadow-[0_8px_20px_rgba(30,30,30,0.05)] sm:px-8">
              <section id="intro" className="mt-1 scroll-mt-24">
                <DotHeading title="Intro" colorClass="bg-indigo-500" />
                <p className="mt-5 text-xl leading-relaxed text-zinc-800">
                  A simple and fun 2D game where players collect snacks, avoid obstacles, and
                  complete levels with increasing difficulty.
                </p>
              </section>

              <section id="goal" className="mt-12 scroll-mt-24">
                <DotHeading title="🎯 Goal" colorClass="bg-red-500" />
                <p className="mt-5 text-xl leading-relaxed text-zinc-800">
                  The goal of this project was to design a simple and engaging game using Canva for
                  initial design and Unity for development, focusing on gameplay mechanics and user
                  interaction.
                </p>
              </section>

              <section id="features" className="mt-12 scroll-mt-24">
                <DotHeading title="🎮 Features" colorClass="bg-lime-600" />
                <BulletList
                  items={[
                    'Side-scrolling gameplay',
                    'Jump mechanic (spacebar)',
                    'Snack collection system',
                    'Obstacles (stones)',
                    'Lives system',
                    'Timer challenge',
                    'Multiple difficulty levels',
                  ]}
                />
              </section>

              <section id="gameplay-rules" className="mt-12 scroll-mt-24">
                <DotHeading title="🎬 Gameplay Rules" colorClass="bg-sky-500" />
                <BulletList
                  items={[
                    'Press spacebar to jump',
                    'Avoid obstacles or lose a life',
                    'Collect snacks to increase score',
                    'Complete level before time runs out',
                  ]}
                />
              </section>

              <section id="objectives" className="mt-12 scroll-mt-24">
                <DotHeading title="🏁 Game Objectives" colorClass="bg-amber-500" />
                <div className="mt-5 space-y-6 text-xl leading-relaxed text-zinc-800">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Easy</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-8">
                      <li>Collect 5 snacks in 15 seconds</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Medium</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-8">
                      <li>Collect 25 snacks in 50 seconds</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Hard</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-8">
                      <li>Collect 25 snacks with more difficulty</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="gameplay-flow" className="mt-12 scroll-mt-24">
                <DotHeading title="🎮 Gameplay Flow" colorClass="bg-cyan-500" />
                <div className="mt-5 space-y-6 text-xl leading-relaxed text-zinc-800">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Win</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-8">
                      <li>Collect required snacks</li>
                      <li>Reach goal</li>
                      <li>Go to next level</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Lose</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-8">
                      <li>Lives = 0</li>
                      <li>Time runs out</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="development" className="mt-12 scroll-mt-24">
                <DotHeading title="⚙️ Development" colorClass="bg-yellow-500" />
                <BulletList
                  items={[
                    'Designed UI and idea using Canva',
                    'Developed game using Unity',
                    'Programming language: C#',
                  ]}
                />
              </section>

              <section id="process" className="mt-12 scroll-mt-24">
                <DotHeading title="🧠 Process" colorClass="bg-violet-500" />
                <BulletList
                  items={[
                    'Planned game concept',
                    'Created visual idea in Canva',
                    'Built gameplay in Unity',
                    'Tested game with users',
                  ]}
                />
              </section>

              <section id="testing-feedback" className="mt-12 scroll-mt-24">
                <DotHeading title="🧪 Testing & Feedback" colorClass="bg-orange-500" />
                <div className="mt-5 space-y-6 text-xl leading-relaxed text-zinc-800">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Players found the game:</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-8">
                      <li>Fun and addictive</li>
                      <li>Challenging and engaging</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Some issues found:</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-8">
                      <li>Game can feel too fast</li>
                      <li>Jump timing is difficult</li>
                      <li>Rules were not clear at first</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">Improvements:</h3>
                    <ul className="mt-3 list-disc space-y-2 pl-8">
                      <li>Add clearer instructions</li>
                      <li>Adjust difficulty balance</li>
                      <li>Improve user understanding</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="screenshots" className="mt-12 scroll-mt-24">
                <DotHeading title="🖼️ Screenshots" colorClass="bg-rose-400" />
                <div
                  className="mt-5"
                  onTouchStart={onScreenshotTouchStart}
                  onTouchEnd={onScreenshotTouchEnd}
                  role="presentation"
                >
                  <div className="w-full min-w-0 overflow-hidden rounded-[20px]">
                    <div
                      className="flex w-full transition-transform duration-500 ease-out will-change-transform"
                      style={{ transform: `translate3d(-${shinChanScreenshotIndex * 100}%, 0, 0)` }}
                    >
                      {shinChanScreenshotSlides.map((shot) => (
                        <div
                          key={shot.src}
                          className="box-border min-w-0 max-w-full shrink-0 grow-0"
                          style={{ flex: '0 0 100%' }}
                        >
                          <img
                            src={shot.src}
                            alt={shot.alt}
                            className="h-full min-h-[220px] w-full rounded-[16px] border border-zinc-500/60 object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {shinChanScreenshotSlides[shinChanScreenshotIndex]?.caption ? (
                    <p className="mt-4 text-center text-base leading-relaxed text-zinc-700">
                      {shinChanScreenshotSlides[shinChanScreenshotIndex].caption}
                    </p>
                  ) : null}

                  <div className="mt-5 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={showPreviousShinChanScreenshot}
                      className="rounded-full border border-zinc-500/70 bg-white/70 px-4 py-2 text-lg text-zinc-700 transition-colors duration-300 hover:bg-white"
                      aria-label="Previous screenshot"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={showNextShinChanScreenshot}
                      className="rounded-full border border-zinc-500/70 bg-white/70 px-4 py-2 text-lg text-zinc-700 transition-colors duration-300 hover:bg-white"
                      aria-label="Next screenshot"
                    >
                      →
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-center gap-2">
                    {shinChanScreenshotSlides.map((shot, idx) => (
                      <button
                        key={shot.src}
                        type="button"
                        onClick={() => setShinChanScreenshotIndex(idx)}
                        className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                          idx === shinChanScreenshotIndex ? 'bg-zinc-800' : 'bg-zinc-400/70'
                        }`}
                        aria-label={`Go to screenshot ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </section>

              <section id="demo-video" className="mt-12 scroll-mt-24">
                <DotHeading title="🎥 Demo Video" colorClass="bg-red-500" />
                <a
                  href={shinChanVideoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block rounded-xl border border-zinc-500/80 bg-[#f9f9f9] px-5 py-3 text-base font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                >
                  Open Video on YouTube
                </a>
                <div className="mt-5 overflow-hidden rounded-[16px] border border-zinc-500/60 bg-black">
                  <iframe
                    className="aspect-video w-full"
                    src={shinChanVideoEmbed}
                    title="Shin-Chan Adventures gameplay demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </section>

              <section id="learning" className="mt-12 scroll-mt-24">
                <DotHeading title="🌱 What I Learned" colorClass="bg-emerald-500" />
                <BulletList
                  items={[
                    'Learned Unity basics and C# scripting',
                    'Learned how to design gameplay mechanics',
                    'Learned importance of user testing and feedback',
                    'Improved problem-solving skills',
                  ]}
                />
              </section>
            </div>
          </>
        ) : isRainbowFalls ? (
          <>
            <div className="mt-8 rounded-[24px] border border-zinc-500/70 bg-[#f6f6f6] px-6 py-8 shadow-[0_8px_20px_rgba(30,30,30,0.05)] sm:px-8">
              <section className="rounded-[18px] border border-zinc-500/60 bg-[#fffde9] px-6 py-6">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Contents</h2>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {rainbowContents.map((item, idx) => (
                    <Link
                      key={item.id}
                      to={`/rainbow-falls#${item.id}`}
                      className="rounded-[14px] border border-zinc-400/50 bg-[#f6f6f6] px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                    >
                      <span className={`block h-2 w-12 rounded-full ${item.accent}`} aria-hidden="true" />
                      <p className="mt-2 text-3xl font-semibold leading-none text-zinc-900">
                        {String(idx + 1).padStart(2, '0')}
                      </p>
                      <p className="mt-2 text-sm font-medium uppercase tracking-wide text-zinc-700">
                        {item.label}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-8 rounded-[24px] border border-zinc-500/70 bg-[#f6f6f6] px-6 py-8 shadow-[0_8px_20px_rgba(30,30,30,0.05)] sm:px-8">
            <section id="problem" className="mt-1 scroll-mt-24">
              <DotHeading title="Problem" colorClass="bg-red-500" />
              <BulletList
                items={[
                  'The original website has an outdated and unattractive design',
                  'Poor layout makes content hard to read and navigate',
                  'Weak visual hierarchy, important information is not clear',
                  'Not responsive across different devices',
                ]}
              />
            </section>

            <section id="solution" className="mt-12 scroll-mt-24">
              <DotHeading title="Solution" colorClass="bg-lime-600" />
              <BulletList
                items={[
                  'Redesigned with a clean and modern interface',
                  'Improved visual hierarchy with clear headings and structure',
                  'Created responsive layouts for desktop, tablet, and mobile',
                  'Enhanced usability and readability',
                ]}
              />
            </section>

            <section id="process" className="mt-12 scroll-mt-24">
              <DotHeading title="Process" colorClass="bg-sky-500" />
              <BulletList
                items={[
                  'Reviewed the existing website and identified key issues',
                  'Created wireframes to plan layout and structure',
                  'Designed high-fidelity UI in Figma',
                  'Adapted the design for different screen sizes',
                ]}
              />
            </section>

            <section id="key-features" className="mt-12 scroll-mt-24">
              <DotHeading title="Key Features" colorClass="bg-violet-400" />
              <BulletList
                items={[
                  'Responsive design across multiple devices',
                  'Clean and modern visual style',
                  'Improved navigation and user flow',
                ]}
              />
            </section>

            <section id="before-after" className="mt-16 scroll-mt-24">
              <h2 className="text-5xl font-semibold tracking-tight text-zinc-900">BEFORE &amp; AFTER</h2>

              <div className="mt-8">
                <DotHeading title="Before" colorClass="bg-amber-500" />
                <BulletList
                  items={[
                    'Inconsistent font sizes and unclear text hierarchy',
                    'Low contrast between text and background',
                    'No clear color system, making the design look outdated',
                  ]}
                />
                <img
                  src="https://i.postimg.cc/mr7XHrb5/Screenshot-2025-07-18-014613-cleanup-1.png"
                  alt="Rainbow Falls old website design"
                  className="mt-6 h-auto w-full rounded-[16px] border border-zinc-500/60 object-contain"
                />
              </div>

              <div className="mt-10">
                <DotHeading title="After" colorClass="bg-lime-600" />
                <BulletList
                  items={[
                    'Clear typography hierarchy with consistent font styles',
                    'High contrast for better readability and accessibility',
                    'Modern color palette that improves visual appeal and user experience',
                  ]}
                />
                <img
                  src="https://i.postimg.cc/bYLR036S/Rainbow-Falls-Kennel-Website-Redesign-(1).png"
                  alt="Rainbow Falls redesigned website"
                  className="mt-6 h-auto w-full rounded-[16px] border border-zinc-500/60 object-contain"
                />
              </div>
            </section>

            <section id="reflection" className="mt-12 scroll-mt-24">
              <DotHeading title="Reflection" colorClass="bg-sky-500" />
              <BulletList
                items={[
                  'Learned how to redesign outdated interfaces',
                  'Improved skills in responsive design',
                  'Gained better understanding of visual hierarchy and layout',
                ]}
              />
            </section>

            <section className="mt-12 scroll-mt-24">
              <DotHeading title="Figma File" colorClass="bg-indigo-500" />
              <a
                href={rainbowFigmaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 block rounded-[16px] border border-zinc-500/60 bg-white/40 p-3 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/70"
              >
                <img
                  src={project.imageSrc}
                  alt="Redesign website cover preview"
                  className="h-auto w-full rounded-[12px] object-contain"
                />
              </a>
              <a
                href={rainbowFigmaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block rounded-xl border border-zinc-500/80 bg-[#f9f9f9] px-5 py-3 text-base font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
              >
                Open Redesign Website Figma
              </a>
              <div className="mt-4 overflow-hidden rounded-[16px] border border-zinc-500/60 bg-white">
                <iframe
                  title="Redesign Website Figma Embed"
                  src={rainbowFigmaEmbed}
                  className="h-[480px] w-full"
                  allowFullScreen
                />
              </div>
            </section>
            </div>
          </>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-5">
            <section className="rounded-[18px] border border-zinc-500/60 bg-[#f6f6f6] px-5 py-5">
              <h2 className="text-lg font-semibold text-zinc-800">Overview</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-700">{project.overview}</p>
            </section>

            <section className="rounded-[18px] border border-zinc-500/60 bg-[#f6f6f6] px-5 py-5">
              <h2 className="text-lg font-semibold text-zinc-800">Problem</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-700">{project.problem}</p>
            </section>

            <section className="rounded-[18px] border border-zinc-500/60 bg-[#f6f6f6] px-5 py-5">
              <h2 className="text-lg font-semibold text-zinc-800">Solution</h2>
              <p className="mt-3 text-base leading-relaxed text-zinc-700">{project.solution}</p>
            </section>

            <section className="rounded-[18px] border border-zinc-500/60 bg-[#f6f6f6] px-5 py-5">
              <h2 className="text-lg font-semibold text-zinc-800">Tools Used</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-zinc-500/70 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </section>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/#home"
            className="inline-block rounded-xl border border-zinc-500/80 bg-[#f9f9f9] px-5 py-3 text-base font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  )
}

export default ProjectDetailPage
