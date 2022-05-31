import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./login.component";
import SignUp from "./signup.component";

function Nav() {
  return ( 
    <Router>
      <div className="Nav">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <Link className="nav-link" to={"/sign-in"}>
                  Login
                </Link>
              </ul>
              <ul className="navbar-nav ml-auto">
                <Link className="nav-link" to={"/sign-up"}>
                  Sign up
                </Link>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Nav;