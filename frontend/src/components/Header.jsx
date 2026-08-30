import { Link, NavLink } from "react-router-dom";
import { FaPaw } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          <FaPaw className="me-2 text-warning" />
          Pet Adoption
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"  data-bs-target="#navbarNav" >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto align-items-lg-center">
            <NavLink className="nav-link" to="/">Home </NavLink>
            <NavLink className="nav-link" to="/pets"> Pets</NavLink>
            <NavLink className="nav-link" to="/favorites"> Favorites</NavLink>
            <NavLink className="nav-link" to="/requests">Requests </NavLink>
            <NavLink className="nav-link" to="/dashboard">Dashboard </NavLink>
            <Link to="/add-pet" className="btn btn-warning ms-lg-3"> + Add Pet</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;