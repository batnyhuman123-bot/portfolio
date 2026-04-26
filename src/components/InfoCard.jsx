import { ArrowRight } from 'lucide-react'

function InfoCard({ icon: Icon, title, description, buttonColor }) {
  return (
    <article className="flex min-h-72 flex-col items-center rounded-[24px] border border-zinc-500/70 bg-[#f6f6f6] px-8 py-10 text-center shadow-[0_8px_20px_rgba(30,30,30,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(30,30,30,0.12)]">
      <Icon size={42} className="text-zinc-500" strokeWidth={1.4} />
      <h2 className="mt-6 text-3xl font-medium text-zinc-800">{title}</h2>
      <p className="mt-3 text-lg leading-relaxed text-zinc-600">{description}</p>
      <button
        type="button"
        className={`mt-8 rounded-full border border-zinc-500/70 px-4 py-2 transition-all duration-300 hover:scale-105 ${buttonColor}`}
        aria-label={`Learn more about ${title}`}
      >
        <ArrowRight size={18} />
      </button>
    </article>
  )
}

export default InfoCard
