import './componentStyles/Aboutme.css'
import AboutJames from './Aboutme-me'
import AboutBlog from './Aboutme-blog'
import AboutCV from './Aboutme-cv'
//import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Aboutme() {
  const { id } = useParams()
  //const [aboutPage, setAboutPage] = useState('aboutMeButton') // Replaced the use of state with URL IDs

  function displayContent(page, event) {
    //setAboutPage(page)

    // const buttons = document.getElementById('aboutMeNav') //couldn't resolve, substitued with below until later review
    // buttons.forEach((button) => {
    //   button.classList.remove('aboutSelected')
    // })

    document.getElementById('aboutBlogButton').classList.remove('aboutSelected')
    document.getElementById('aboutMeButton').classList.remove('aboutSelected')
    document.getElementById('cvButton').classList.remove('aboutSelected')

    event.target.classList.add('aboutSelected')
  }

  return (
    <div className="aboutMeWrapper">
      <div className="aboutMeNav">
        <Link
          to="/about/me"
          className="aboutSelected"
          id="aboutMeButton"
          onClick={(e) => displayContent('aboutMeButton', e)}
        >
          About Me
        </Link>
        <Link
          to="/about/blog"
          id="aboutBlogButton"
          onClick={(e) => displayContent('aboutBlogButton', e)}
        >
          About This Blog
        </Link>
        <Link
          to="/about/cv"
          id="cvButton"
          onClick={(e) => displayContent('cvButton', e)}
        >
          My CV
        </Link>
      </div>
      <div className="aboutMeContent">
        {id === 'me' && <AboutJames />}
        {id === 'blog' && <AboutBlog />}
        {id === 'cv' && <AboutCV />}
      </div>
    </div>
  )
}
