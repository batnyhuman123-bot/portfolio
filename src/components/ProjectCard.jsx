import { Link } from 'react-router-dom'

function ProjectCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  route,
  imageFit = 'object-cover',
}) {
  return (
    <article className="grid grid-cols-1 items-center gap-8 rounded-[24px] border border-zinc-500/70 bg-[#f6f6f6] p-6 shadow-[0_8px_20px_rgba(30,30,30,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(30,30,30,0.12)] md:grid-cols-[1fr_1.4fr] md:gap-12 md:p-10">
      <div className="text-left">
        <h3 className="text-4xl font-medium leading-tight text-zinc-800">{title}</h3>
        <p className="mt-5 text-sm font-medium tracking-wide text-zinc-600">{subtitle}</p>
        <p className="mt-7 max-w-md text-xl leading-relaxed text-zinc-700">{description}</p>
        <Link
          to={route}
          className="mt-10 inline-flex rounded-xl border border-zinc-500/80 bg-[#f9f9f9] px-5 py-3 text-base font-medium text-zinc-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
        >
          View Project
        </Link>
      </div>

      <div>
        <img
          src={imageSrc}
          alt={imageAlt}
          className={`h-full min-h-[220px] w-full rounded-[16px] border border-zinc-500/60 ${imageFit}`}
          loading="lazy"
        />
      </div>
    </article>
  )
}

export default ProjectCard
