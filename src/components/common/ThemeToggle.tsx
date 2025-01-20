import { useTheme } from 'next-themes'
import { Button } from './ui/button'

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

export default ThemeToggle 