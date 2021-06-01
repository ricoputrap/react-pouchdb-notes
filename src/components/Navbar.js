import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/"><h1>ReactNotes</h1></Link>
      <div className="navbar-buttons">
        <Link to="/new" className="btn">New Note</Link>
      </div>
    </nav>
  )
}

export default Navbar;