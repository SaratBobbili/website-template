import './styles/App.css'
import Home from './components/features/Home'
import ThemeToggle from './components/common/ThemeToggle'
import ExperienceTimeline from './components/features/experience/ExperienceTimeline'
import ProjectsList from './components/features/projects/ProjectsList'
import Footer from './components/layout/Footer'

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
      {/* Navigation Bar */}
      <nav className="font-inter fixed w-full top-0 left-0 bg-background/90 backdrop-blur-sm z-50 border-b border-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Empty spacer to push nav items to right */}
            <div className="flex-1" />
            
            {/* Navigation items grouped with theme toggle */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-4">
                <a
                  href="#home"
                  onClick={(e) => smoothScroll(e, '#home')}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Home
                </a>
                <a
                  href="#experience"
                  onClick={(e) => smoothScroll(e, '#experience')}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Experience
                </a>
                <a
                  href="#projects"
                  onClick={(e) => smoothScroll(e, '#projects')}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </div>
              <div className="h-6 w-px bg-foreground/20" /> {/* Vertical separator */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20">
        <div id="home">
          <Home />
        </div>
        <div id="experience" className="scroll-mt-20">
          <ExperienceTimeline />
        </div>
        <div id="projects" className="scroll-mt-20">
          <ProjectsList />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default App