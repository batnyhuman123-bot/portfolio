const projects = [
  {
    title: 'Moni Traka',
    image: 'https://i.postimg.cc/cJ6gfB52/MONI-TRAKA-Auto-Expense-Tracker-(1).png',
  },
  {
    title: 'I See You App',
    image: 'https://i.postimg.cc/Z5nsv14q/I-SEE-YOU-AI-Detection-Assistance-App-(1).png',
  },
  {
    title: 'Rainbow Falls Kennel',
    image: 'https://i.postimg.cc/bYLR036S/Rainbow-Falls-Kennel-Website-Redesign-(1).png',
  },
]

function ProjectPreview() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="group overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="h-52 w-full rounded-2xl border border-zinc-200 object-cover transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-md"
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectPreview
