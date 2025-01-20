import { useTheme } from 'next-themes'
import './App.css'
import Home from './components/Home'
import { Button } from './components/ui/button'
import WorkExperienceTimeline from './components/Experience'
import ProjectsList from './components/Projects'
import Footer from './components/Footer'

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