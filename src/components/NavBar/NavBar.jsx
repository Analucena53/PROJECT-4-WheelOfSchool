import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
function NavBar() {

  return (
    <>
      <nav className="navBar">
          <NavLink to="/home">
          <img className="link" id="logo" src="images/logo.svg" alt="logo" />
          </NavLink>


        <div className="iconHolder">

          <NavLink to="/home">
          <div className="homeIcon link">
          <img className="icon" src="images/home-mobile-ui-svgrepo-com.svg" alt="icon-home" />
            <h3>Home</h3>
          </div>
          </NavLink>

          <Link to="/list">
          <div className="listIcon">
          <img className="icon" src="images/ballot_7661391.svg" alt="icon-list" />
            <h3>List</h3>
          </div>
          </Link>

          <Link to="/">
          <div className="helpIcon">
          <img className="icon" src="images/help-circle-svgrepo-com.svg" alt="icon-help" />
            <h3>Help</h3>
          </div>
          </Link>
          
          <Link to="/wheel">
          <div className="wheelIcon">
            <img className="icon" src="images/poker-chip_3915145.svg" alt="icon-wheel" />
            <h3>Wheel</h3>
          </div>
          </Link>
          
        </div>
      </nav>
    </>
  )
}

export default NavBar