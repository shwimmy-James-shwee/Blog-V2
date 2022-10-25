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
          <NavLink to="/test" className="nav-button">
            GitHub
          </NavLink>
        </div>
        <div>
          <label className="nav-theme">
            <i className="moon">🌜</i>
            <i className="sun">🌞</i>

            {datatheme === 'dark' && (
              <input type="checkbox" onClick={changeTheme} checked></input>
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
