import '../App.css'

function Navbar({ changeTheme }) {
  return (
    <div className="nav">
      <header className="nav-header">hello world</header>
      <button onClick={changeTheme}>switch theme</button>
    </div>
  )
}

export default Navbar
