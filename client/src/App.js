import useLocalStorage from 'use-local-storage'
import Navbar from './components/navbar'
import Home from './components/Home'
import Aboutme from './components/Aboutme'
import Post from './components/Post'
import './App.css'
import { Route } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import backgroundLight from './Images/background-light.mp4'
import backgroundDark from './Images/background-dark.mp4'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches // checks if the user's browser is in dark mode
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  ) // capture in localStorage to remember users previous chioce

  //also capture in state so we can re-render the page with the new background video
  const [stateTheme, setStateTheme] = useState(theme)

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light' // if theme is light, change to dark, vise versa
    setTheme(newTheme)
    setStateTheme(newTheme)
  }

  const videoRef = useRef(null)

  function restartVid() {
    videoRef.current.currentTime = videoRef.current.duration
    videoRef.current.playbackRate = -1
    videoRef.current.play()
  }
  // function restartVid(e) {
  //   console.log('video has ended')
  //   //if the video playbackrate is 1, set it to -1
  //   // else if the video playbackrate is -1, set it to 1
  //   //play video
  // }

  return (
    <>
      {stateTheme === 'light' && (
        <video
          id="video"
          className="backgroundVideo"
          autoPlay
          loop
          muted
          ref={videoRef}
          onEnded={(e) => restartVid(e)}
        >
          <source src={backgroundLight} />
        </video>
      )}
      {stateTheme === 'dark' && (
        <video
          id="video"
          className="backgroundVideo"
          autoPlay
          loop
          muted
          ref={videoRef}
          onEnded={(e) => restartVid(e)}
        >
          <source src={backgroundDark} />
        </video>
      )}

      <div className="App" datatheme={theme}>
        <Navbar changeTheme={changeTheme} datatheme={theme} />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about/:id">
          <Aboutme />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
        <Route path="*"></Route>
      </div>
    </>
  )
}

export default App
