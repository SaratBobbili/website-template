import { useTheme } from 'next-themes'
import { Button } from './ui/button'

const ThemeToggle: React.FC = (): JSX.Element => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = (): void => {
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