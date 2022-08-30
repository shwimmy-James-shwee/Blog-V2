import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar({ changeTheme }) {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-header">
          <header>James' Blog</header>
        </div>
        <div className="nav-items">
          <Link className="nav-button">About Me</Link>
          <Link className="nav-button">GitHub</Link>
        </div>
        <div>
          <button className="nav-theme" onClick={changeTheme}>
            Switch theme
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
