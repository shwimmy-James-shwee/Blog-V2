import './componentStyles/Aboutme.css'

export default function Aboutme() {
  return (
    <div className="aboutMeWrapper">
      <div className="aboutMeNav">
        <button className="cvButton"></button>
        <button className="aboutMeButton"></button>
        <button className="aboutBlog"></button>
      </div>
      <div className="aboutMeContent"></div>
    </div>
  )
}
