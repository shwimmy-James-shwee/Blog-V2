import Navbar from './components/navbar'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Post from './components/Post'
import PageNotFound from './components/PageNotFound'
import CalculatorProject from './components/Project-Calculator'
import CursorArtProject from './components/Project-CursorArt'
import './App.css'
import backgroundLight from './Images/background-light.mp4'
import backgroundDark from './Images/background-dark.mp4'
import useLocalStorage from 'use-local-storage'
import { Route, Switch } from 'react-router-dom'
import { useState } from 'react'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches // checks if the user's browser is in dark mode
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  ) // capture in localStorage to remember users previous chioce

  //also capture theme in state so we can re-render the page with the new background video
  const [stateTheme, setStateTheme] = useState(theme)

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light' // if theme is light, change to dark, vise versa
    setTheme(newTheme)
    setStateTheme(newTheme)
  }

  return (
    <>
      <div className="background-wrapper">
        {stateTheme === 'light' && (
          <video id="video" className="backgroundVideo" autoPlay muted loop>
            <source src={backgroundLight} />
          </video>
        )}
        {stateTheme === 'dark' && (
          <video id="video" className="backgroundVideo" autoPlay muted loop>
            <source src={backgroundDark} />
          </video>
        )}
      </div>

      <div className="App" datatheme={theme}>
        <Navbar changeTheme={changeTheme} datatheme={theme} />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about/:id">
            <Aboutme />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/mini-project/9">
            <CalculatorProject /> {/* mini projects hard coded */}
          </Route>
          <Route path="/mini-project/10">
            <CursorArtProject /> {/* mini projects hard coded */}
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
