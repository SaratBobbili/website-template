import { useTheme } from 'next-themes'
import './App.css'
import Home from './components/Home'
import { Button } from './components/ui/button'

function ThemeToggle() {
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

function App() {
  return (
    <div className='bg-background text-foreground relative'>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Home />
    </div>
  )
}

export default App