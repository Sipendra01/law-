import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Image,
  Nav,
  NavDropdown,
  NavItem,
  NavLink,
  Navbar,
  Row,
} from "react-bootstrap";
const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Track menu visibility

  const [show, setshow] = useState(false);

  const [active, setactive] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnterSearch = () => {
    setIsHovered1(true);
  };
  let data = localStorage.getItem('user');
  let user = data && JSON.parse(data)
  const logout = (() => {
    console.log("logout");
    localStorage.removeItem("user");
    window.location.reload();
  })
  return (
    <>
      <Navbar expand="lg" className="bg-light p-0">
        <Container className=" d-block">
          <div
            className={`d-lg-flex justify-content-between align-items-center`}
          >
            <ul className="d-flex mb-0 p-0 social-links">
              <li className={``}>
                <i class="bi bi-youtube"></i>
              </li>
              <li>
                <i class="bi bi-facebook"></i>
              </li>
              <li>
                <i class="bi bi-twitter"></i>
              </li>
              <li>
                <i class="bi bi-instagram"></i>
              </li>
            </ul>
            <Nav
              className="d-flex align-items-center"
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle as={NavLink}>Blog</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Hindi</Dropdown.Item>
                    <Dropdown.Item>English</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/">
                  <p className="mb-0">Indian Kanoon</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" className="d-flex">
                  <i class="bi bi-question-circle-fill"></i>
                  <p className="mb-0">Ask a Question</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" className="d-flex">
                  <i class="bi bi-headset"></i>
                  <p className="mb-0">Talk to Lawyer</p>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Dropdown as={NavItem}>
                  <Dropdown.Toggle className="btn">
                    Select Language
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Hello there!</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </Nav>
          </div>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="bg-white p-0">
        <Container className="header-menu">
          <Navbar.Brand href="/">
            <img
              src="/assets/images/logo.png"
              alt=""
              width="70px"
              height={"70px"}
              className="rounded"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="d-flex justify-content-between"
          >
            {/* <Nav className="ps-5">
              <div className={`mymenu d-flex ${!isMenuOpen ? "open" : ""}`}>
                <div
                  className="dropdowncontainer"
                  onMouseEnter={handleMouseEnterSearch}
                // onMouseLeave={handleMouseLeaveSearch}
                >
                  <p className="dropdownbutton">Find A Lawyer</p>
                  {isHovered1 && (
                    <div className="dropdowncontent mega-menu">
                      <Link
                        to="/matchingSearching"
                        style={{ textDecoration: "none" }}
                      >
                        <p> Find A Lawyer</p>
                      </Link>
                      <Link to="/singleID" style={{ textDecoration: "none" }}>
                        <p>Single ID Searching</p>
                      </Link>
                    </div>
                  )}
                </div>

                <div
                  className="dropdowncontainer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <p className="dropdownbutton">Legal Matter</p>
                  {isHovered && (
                    <div className="dropdowncontent mega-menu">
                      <Link
                        to="/UnmarriedBride"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Civil</p>
                      </Link>
                      <Link
                        to="/UnmarriedGrooms"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Criminal</p>
                      </Link>
                      <Link
                        to="/DivorceeGrooms"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Marriage</p>
                      </Link>
                      <Link
                        to="/DivorceeBrides"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Registration</p>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="dropdowncontainer"
                  onMouseEnter={handleMouseEnter}
                >
                  <p className="dropdownbutton">Property</p>
                  {isHovered && (
                    <div className="dropdowncontent mega-menu">
                      <Link
                        to="/UnmarriedBride"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Unmarried Brides</p>
                      </Link>
                      <Link
                        to="/UnmarriedGrooms"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Unmarried Grooms</p>
                      </Link>
                      <Link
                        to="/DivorceeGrooms"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Divorcee Grooms</p>
                      </Link>
                      <Link
                        to="/DivorceeBrides"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Divorcee Brides</p>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="dropdowncontainer"
                  onMouseEnter={handleMouseEnter}
                >
                  <p className="dropdownbutton">Drafting</p>
                  {isHovered && (
                    <div className="dropdowncontent mega-menu">
                      <Link
                        to="/UnmarriedBride"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Unmarried Brides</p>
                      </Link>
                      <Link
                        to="/UnmarriedGrooms"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Unmarried Grooms</p>
                      </Link>
                      <Link
                        to="/DivorceeGrooms"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Divorcee Grooms</p>
                      </Link>
                      <Link
                        to="/DivorceeBrides"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Divorcee Brides</p>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="dropdowncontainer"
                  onMouseEnter={handleMouseEnter}
                >
                  <p className="dropdownbutton">Corporate</p>
                  {isHovered && (
                    <div className="dropdowncontent mega-menu">
                      <Link
                        to="/UnmarriedBride"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Unmarried Brides</p>
                      </Link>
                      <Link
                        to="/UnmarriedGrooms"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Unmarried Grooms</p>
                      </Link>
                      <Link
                        to="/DivorceeGrooms"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Divorcee Grooms</p>
                      </Link>
                      <Link
                        to="/DivorceeBrides"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Divorcee Brides</p>
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="dropdowncontainer"
                  onMouseEnter={handleMouseEnter}
                >
                  <p className="dropdownbutton">Legal Q&A</p>
                  {isHovered && (
                    <div className="dropdowncontent mega-menu">
                      <Link
                        to="/UnmarriedBride"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Unmarried Brides</p>
                      </Link>
                      <Link
                        to="/UnmarriedGrooms"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Unmarried Grooms</p>
                      </Link>
                      <Link
                        to="/DivorceeGrooms"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Divorcee Grooms</p>
                      </Link>
                      <Link
                        to="/DivorceeBrides"
                        style={{ textDecoration: "none" }}
                      >
                        <p>Maratha Divorcee Brides</p>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </Nav> */}
            <Button className="btn bg-light border-0 me-3">
              <i class="bi bi-search custom-search-icon"></i>
            </Button>

            {
              user ? <h3 style={{ color: "black" }}>welcome {user?.name} !! <Button onClick={logout} className="btn btn-danger">
                <i class="bi bi-person"></i> Logout
              </Button></h3> : <Button href="/login" className="btn btn-success">
                <i class="bi bi-person"></i> Login
              </Button>
            }

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
