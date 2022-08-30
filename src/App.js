import useLocalStorage from 'use-local-storage'
import Navbar from './components/navbar'
import './App.css'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches // checks if the user's browser is in dark mode
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  ) // similar to State except local storage

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light' // if theme is light, change to dark, vise versa
    console.log('theme changed')
    setTheme(newTheme)
  }

  return (
    <div className="App" data-theme={theme}>
      <Navbar changeTheme={changeTheme} />
    </div>
  )
}

export default App
