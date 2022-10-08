import useLocalStorage from 'use-local-storage'
import Navbar from './components/navbar'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import './App.css'
import { Route } from 'react-router-dom'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches // checks if the user's browser is in dark mode
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  ) // similar to State except local storage

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light' // if theme is light, change to dark, vise versa
    setTheme(newTheme)
  }

  return (
    <div className="App" dataTheme={theme}>
      <Navbar changeTheme={changeTheme} dataTheme={theme} />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <Aboutme />
      </Route>
    </div>
  )
}

export default App
