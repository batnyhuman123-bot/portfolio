import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProfileSection from './components/ProfileSection'
import SelectedWorks from './components/SelectedWorks'

function App() {
  return (
    <div className="min-h-screen bg-[#cbc8e9] px-4 pb-6 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
        <Navbar />
        <Hero />

        <ProfileSection />

        <SelectedWorks />

        <footer className="pb-6 pt-2 text-center">
          <p className="text-sm text-zinc-700/70">© 2026, Fong Boon Siew. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App
