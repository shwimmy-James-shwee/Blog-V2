import { NavLink } from 'react-router-dom'
import './componentStyles/navbar.css'

function Navbar({ changeTheme, dataTheme }) {
  return (
    <div className="nav">
      <div className="nav-wrapper">
        <div className="nav-header">
          <NavLink to="/" className="nav-header">
            <header>James' Blog</header>
          </NavLink>
        </div>
        <div className="nav-items">
          <NavLink to="/about/me" className="nav-button">
            About
          </NavLink>
          <NavLink to="/test" className="nav-button">
            GitHub
          </NavLink>
        </div>
        <div>
          <label className="nav-theme">
            <i class="moon">🌜</i>
            <i class="sun">🌞</i>

            {dataTheme === 'dark' && (
              <input type="checkbox" onClick={changeTheme} checked></input>
            )}
            {dataTheme === 'light' && (
              <input type="checkbox" onClick={changeTheme} />
            )}

            <span className="slider round" />
          </label>
        </div>
      </div>
    </div>
  )
}

export default Navbar
