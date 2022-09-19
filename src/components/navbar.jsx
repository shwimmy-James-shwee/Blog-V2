import { NavLink } from 'react-router-dom'
import './componentStyles/navbar.css'

function Navbar({ changeTheme }) {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-header">
          <NavLink to="/" className="nav-header">
            <header>James' Blog</header>
          </NavLink>
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
          <label className="nav-theme" onClick={changeTheme}>
            Switch theme
          </label>
        </div>
      </div>
    </div>
  )
}

export default Navbar
