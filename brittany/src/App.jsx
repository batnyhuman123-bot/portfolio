import FooterNote from './components/FooterNote'
import HeroIntro from './components/HeroIntro'
import ProjectPreview from './components/ProjectPreview'
import TopNav from './components/TopNav'

function App() {
  return (
    <main className="min-h-screen bg-[#f8f8f7] px-5 py-12 text-zinc-900 sm:py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-14">
        <TopNav />
        <HeroIntro />
        <ProjectPreview />
        <FooterNote />
      </div>
    </main>
  )
}

export default App
