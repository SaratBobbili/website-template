import './styles/App.css'
import Home from './components/features/Home'
import ThemeToggle from './components/common/ThemeToggle'
import ExperienceTimeline from './components/features/experience/ExperienceTimeline'
import ProjectsList from './components/features/projects/ProjectsList'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'

const App: React.FC = () => {
  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault()
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='bg-background text-foreground relative'>
      <nav className="font-inter fixed w-full top-0 left-0 bg-background/90 backdrop-blur-sm z-50 border-b border-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1" />
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                {['home', 'experience', 'projects', 'notes', 'blog'].map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => smoothScroll(e, `#${section}`)}
                    className="text-sm font-medium hover:text-primary transition-colors capitalize"
                  >
                    {section}
                  </a>
                ))}
              </div>
              <div className="h-6 w-px bg-foreground/20" />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-20">
        <div id="home"><Home /></div>
        <div id="experience" className="scroll-mt-20"><ExperienceTimeline /></div>
        <div id="projects" className="scroll-mt-20"><ProjectsList /></div>
        <section id="notes" className="section-container scroll-mt-20">
          <Header text="Solution Manuals & Notes" />
          <p className="font-inter mt-3">Coming soon: notes and solution manuals for textbooks, courses, and classes.</p>
        </section>
        <section id="blog" className="section-container scroll-mt-20 pb-8">
          <Header text="Blog Posts" />
          <p className="font-inter mt-3">Coming soon: ML/RL/LLM blog posts and experiments.</p>
        </section>
        <Footer />
      </div>
    </div>
  )
}

export default App
