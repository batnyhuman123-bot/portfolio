import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'

function SelectedWorks() {
  return (
    <section id="projects" className="scroll-mt-24 pb-10 pt-6">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-zinc-900 sm:text-6xl">
          My Projects
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default SelectedWorks
