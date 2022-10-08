import './componentStyles/Aboutme.css'
import AboutJames from './Aboutme-me'
import AboutBlog from './Aboutme-blog'
import AboutCV from './Aboutme-cv'
import { useState } from 'react'

export default function Aboutme() {
  const [aboutPage, setAboutPage] = useState('me')

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
        <span id="aboutMeButton" onClick={(e) => displayContent('me', e)}>
          About Me
        </span>
        <span id="aboutBlogButton" onClick={(e) => displayContent('blog', e)}>
          About This Blog
        </span>
        <span id="cvButton" onClick={(e) => displayContent('cv', e)}>
          My CV
        </span>
      </div>
      <div className="aboutMeContent">
        {aboutPage === 'me' && <AboutJames />}
        {aboutPage === 'blog' && <AboutBlog />}
        {aboutPage === 'cv' && <AboutCV />}
      </div>
    </div>
  )
}
