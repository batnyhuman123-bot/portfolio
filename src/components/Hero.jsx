import { PencilRuler, Sparkles, WandSparkles } from 'lucide-react'

function SideTag({ icon: Icon, text, className }) {
  return (
    <div className={`hidden xl:flex xl:flex-col xl:items-center xl:gap-3 ${className}`}>
      <div className="rounded-full border border-zinc-600/70 bg-[#eaf5ff] px-6 py-3 text-base font-medium text-zinc-700 shadow-[0_6px_16px_rgba(30,30,30,0.08)]">
        {text}
      </div>
      <Icon className="text-zinc-500" size={28} strokeWidth={1.5} />
    </div>
  )
}

function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 rounded-[28px] border border-zinc-500/70 bg-[#cfccf0] px-6 py-20 text-center shadow-[0_10px_26px_rgba(32,32,32,0.08)] sm:px-10 lg:px-20"
    >
      <SideTag icon={Sparkles} text="Web Development" className="absolute left-6 top-44 -rotate-12" />
      <SideTag
        icon={PencilRuler}
        text="No-code Design"
        className="absolute right-6 top-44 rotate-12"
      />

      <h1 className="mx-auto flex flex-wrap items-center justify-center gap-4 text-5xl font-semibold tracking-tight text-zinc-900 sm:text-7xl">
        <span>Hi!</span>
        <img
          src="https://i.postimg.cc/3J5Dvph9/preety-bs.jpg"
          alt="Boon Siew profile"
          className="h-[74px] w-[74px] rounded-full border border-zinc-500 object-cover"
        />
        <span>I'm Boon Siew,</span>
      </h1>

      <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-zinc-700 sm:text-3xl sm:leading-snug">
        A Computer Science student who enjoys UI/UX design and mobile app flows.
      </p>

      <WandSparkles
        className="mx-auto mt-10 text-zinc-500/80"
        size={26}
        strokeWidth={1.5}
        aria-hidden="true"
      />
    </section>
  )
}

export default Hero
