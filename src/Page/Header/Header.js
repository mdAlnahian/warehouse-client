import React from "react";
import "./Header.css";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../Login/Login/firebase.init";

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
      signOut(auth);
    };

  return (
    <Navbar
      sticky="top"
      className="header-style pb-4 pt-5"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container className="w-75 mx-auto">
        <Navbar.Brand>
          <span className="font-style-brand">Pr-RETAILER</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto font-style">
            <Nav.Link as={Link} to="/home">
              HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/items">
              ITEMS
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link as={Link} to="/blog">
              BLOG
            </Nav.Link>
          </Nav>
          <Nav className="font-style">
            {user && (
              <>
                <Nav.Link as={Link} to="/additem">
                  ADD ITEM
                </Nav.Link>
                <Nav.Link as={Link} to="/manage">
                  MANAGE
                </Nav.Link>
              </>
            )}
            {user ? (
              <Nav.Link onClick={handleSignOut}>SIGNOUT</Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/login" className="link-font">
                LOGIN
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
