import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar({ changeTheme }) {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-header">
          <NavLink to="/" className="nav-header">
            <header>James' Blog</header>
          </NavLink>{' '}
        </div>
        <div className="nav-items">
          <NavLink to="about-me" className="nav-button">
            About Me
          </NavLink>
          <NavLink to="/test" className="nav-button">
            GitHub
          </NavLink>
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
