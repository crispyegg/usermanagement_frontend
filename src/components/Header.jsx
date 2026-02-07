import { Link} from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark py-2 shadow-sm">
        <div className="container-fluid px-5">

          {/* Brand */}
          <Link
            to="/viewusers"
            className="navbar-brand fw-bold fs-3 text-light d-flex align-items-center gap-6"
          >
            <i className="bi bi-people-fill text-success fs-2"></i>
             UserManager App
          </Link>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto fs-5 gap-3">

              <li className="nav-item">
                <Link className="nav-link text-success fw-light" to="/adduser">
                   Add User
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-success fw-light" to="/viewusers">
                 View Users  
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-success fw-light" to="/manageusers">
                 ManageUser
                </Link>
              </li>


            </ul>

      
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
