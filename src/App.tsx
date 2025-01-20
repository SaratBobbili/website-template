import { useTheme } from 'next-themes'
import './styles/App.css'
import Home from './components/features/Home'
import ThemeToggle from './components/common/ThemeToggle'
import ExperienceTimeline from './components/features/experience/ExperienceTimeline'
import ProjectsList from './components/features/projects/ProjectsList'
import Footer from './components/layout/Footer'

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className='bg-background text-foreground relative'>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Home />
      <ExperienceTimeline />
      <ProjectsList />
      <Footer />
    </div>
  )
}

export default App