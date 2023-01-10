import { NavLink } from 'react-router-dom'
import './componentStyles/navbar.css'

function Navbar({ changeTheme, datatheme }) {
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
          <a
            href="https://github.com/shwimmy-James-shwee"
            className="nav-button"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="nav-button"
            href="https://www.linkedin.com/in/james-pearce-59b18844/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <div className="nav-theme-wrapper">
          <label className="nav-theme">
            <i className="moon">🌜</i>
            <i className="sun">🌞</i>

            {datatheme === 'dark' && (
              <input
                type="checkbox"
                onClick={changeTheme}
                defaultChecked
              ></input>
            )}
            {datatheme === 'light' && (
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
