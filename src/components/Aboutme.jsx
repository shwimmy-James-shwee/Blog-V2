import './componentStyles/Aboutme.css'
import AboutJames from './Aboutme-me'
import AboutBlog from './Aboutme-blog'
import AboutCV from './Aboutme-cv'
import { useState } from 'react'

export default function Aboutme() {
  const [aboutPage, setAboutPage] = useState('aboutMeButton')

  function displayContent(page, event) {
    setAboutPage(page)

    // const buttons = document.getElementById('aboutMeNav') //couldn't resolve, substitued with below until later review
    // buttons.forEach((button) => {
    //   button.classList.remove('aboutMeSelected')
    // })

    document
      .getElementById('aboutBlogButton')
      .classList.remove('aboutMeSelected')
    document.getElementById('aboutMeButton').classList.remove('aboutMeSelected')
    document.getElementById('cvButton').classList.remove('aboutMeSelected')

    event.target.classList.add('aboutMeSelected')
  }

  return (
    <div className="aboutMeWrapper">
      <div className="aboutMeNav">
        <span
          className="aboutMeSelected"
          id="aboutMeButton"
          onClick={(e) => displayContent('aboutMeButton', e)}
        >
          About Me
        </span>
        <span
          id="aboutBlogButton"
          onClick={(e) => displayContent('aboutBlogButton', e)}
        >
          About This Blog
        </span>
        <span id="cvButton" onClick={(e) => displayContent('cvButton', e)}>
          My CV
        </span>
      </div>
      <div className="aboutMeContent">
        {aboutPage === 'aboutMeButton' && <AboutJames />}
        {aboutPage === 'aboutBlogButton' && <AboutBlog />}
        {aboutPage === 'cvButton' && <AboutCV />}
      </div>
    </div>
  )
}
