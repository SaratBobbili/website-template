import { useTheme } from 'next-themes'
import './styles/App.css'
import Home from './components/features/Home'
import { Button } from './components/common/ui/button'
import WorkExperienceTimeline from './components/features/Experience'
import ProjectsList from './components/features/Projects'
import Footer from './components/layout/Footer'

interface ThemeToggleProps {}

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      size="icon"
      variant="outline"
      aria-label="Toggle Theme"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <span>🌙</span> : <span>☀️</span>}
    </Button>
  )
}

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div className='bg-background text-foreground relative'>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Home />
      <WorkExperienceTimeline />
      <ProjectsList />
      <Footer />
    </div>
  )
}

export default App