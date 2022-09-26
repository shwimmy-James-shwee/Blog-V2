import './componentStyles/Aboutme.css'

export default function Aboutme() {
  let displayedPage = ''
  function displayContent(page, event) {
    //need to find better way to dynamically change select button colour
    if (page === 'me') {
      displayedPage = 'me'
      document.getElementById('aboutBlogButton').style.backgroundColor =
        'var(--button-primary)'
      document.getElementById('cvButton').style.backgroundColor =
        'var(--button-primary)'
    } else if (page === 'blog') {
      displayedPage = 'blog'
      document.getElementById('aboutMeButton').style.backgroundColor =
        'var(--button-primary)'
      document.getElementById('cvButton').style.backgroundColor =
        'var(--button-primary)'
    } else if (page === 'cv') {
      displayedPage = 'cv'
      document.getElementById('aboutMeButton').style.backgroundColor =
        'var(--button-primary)'
      document.getElementById('aboutBlogButton').style.backgroundColor =
        'var(--button-primary)'
    }
    // document.getElementById('aboutMeNav').children.style.backgroundColor =
    //   'var(--button-primary)'
    event.target.style.backgroundColor = 'var(--button-primary-selected)'
    console.log(displayedPage)
  }

  return (
    <div className="aboutMeWrapper">
      <div className="aboutMeNav" selected={displayedPage}>
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
      <div className="aboutMeContent"></div>
    </div>
  )
}
