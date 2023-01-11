import './componentStyles/Aboutme-me.css'
import jamesPhoto from '../Images/james-photo-india.jpg'

export default function AboutJames() {
  const dateString = '07/21/1998'
  const birthday = new Date(dateString)
  const age = Math.floor((Date.now() - birthday) / 3.15576e10) // this number is a year in milliseconds (365.25 * 24 * 60 * 60 * 1000)

  return (
    <div className="about-me-wrapper">
      <div>
        <h2>About Me</h2>
        <p>
          Hey! I'm James, a {age} year old tech consultant working at KPMG
          Auckland and an aspiring web developer.
        </p>
        <p>
          My current role includes supporting and facilitating the
          implementation of the ServiceNow PaaS and it's related functionalities
          for clients. This includes a healthy mix of business and process
          analysis as well as dev work (imbedding functional 'chunks' of HTML,
          CSS, and Javascript) to build custom client solutions for whatever
          functional requirements a client requires.
        </p>
        <p>
          To give you a little bit of an insight into my life, at the end of
          2020 i completed a conjoint degree in marketing and information
          systems (with more passion for the information systems side) yet
          struggled to find any work relating to my study. From there I
          undertook Enspiral Dev Acadamy's bootcamp in web development to
          upskill and get my foot in the door. Initially I planned to use these
          web development skills to support my knowledge in information systems,
          however as i worked through the course, and through my career so far,
          I've realised I want the exact opposite; to focus on web development
          and to supliment that journey with the knowledge gained from my
          information systems degree.
        </p>

        <p>
          Outside of web development and work I have two main interests which
          take up most of my personal time. One is enjoying a massively wide
          variety of music, including at times attempting to make it my own
          through being an amateur disc jockey, the other being engrossing
          myself and sinking time into various video games.
        </p>
      </div>
      <div>
        <img
          className="small-image"
          // src="https://shwimmy-james-shwee.github.io/images/james-photo-india.jpg"
          src={jamesPhoto}
          alt="James' head shot"
        />
      </div>
    </div>
  )
}
