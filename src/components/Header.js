import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoImg from "../assets/images/logo192.png";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Header = (props) => {
  let navigate = useNavigate();
  const hanldeLogout = () => {
    logout();
    navigate("/");
    toast.success("Logout success");
  };

  const { logout, user } = useContext(UserContext);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/login") {
      setHideHeader(true);
    }
  }, []);
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <img
            src={logoImg}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <NavLink to="/" className="nav-link">
            <span>ThanhNam</span>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              {user && user.auth === true ? (
                <NavLink to="/users" className="nav-link">
                  Manage Users
                </NavLink>
              ) : (
                ""
              )}
            </Nav>
            <Nav>
              {user && user.email && (
                <span className="nav-link">Welcome {user.email}</span>
              )}
              <NavDropdown title="Ativities">
                {user && user.auth === true ? (
                  <NavDropdown.Item onClick={hanldeLogout}>
                    Logout{" "}
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item>
                    <NavLink to="/login" className="login-nav">
                      Login
                    </NavLink>
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
