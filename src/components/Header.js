import React from 'react';
import logo from '../svg/Salween-logo.svg';
import { Navbar, Nav } from "react-bootstrap"
import HeaderTitle from './Header-Title';
import styled from 'styled-components';
import Bgimg from '../images/BG-01.png';
import  {Link}  from "react-scroll"
const HeaderArea = styled.header`
  height: 100vh;
  background: url(${Bgimg}) fixed left top no-repeat;
  background-size: cover;
  position: relative;
  .navbar-toggler {
    position: absolute;
    right: 40px;
    top: 60px;
    color: #fff;
    border: 1px solid #fff;
    .navbar-toggler-icon {
      stroke: #fff;
    }
  }
  .salween-logo {
    padding: 0;
  }
  .header-inner {
    background: rgba(0, 0, 0, 0.5);
    padding: 0 50px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
  }
  img {
    display: block;
    width: 250px;
  }
  .nav-link {
    color: #ffffff !important;
    &:hover {
      text-decoration: underline;
    }
  }

  .active {
    text-decoration: underline;
  }
`
class Header extends React.Component {
    render() {
    return (
      <HeaderArea id="header" className="header-area" name="HOME">
        <Navbar expand="lg" className="clearfix header-inner">
          <Navbar.Brand className="navbar-header salween-logo" href="#home">
            <img src={logo} alt="Salween solutions" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navigation" />
          <Navbar.Collapse id="navigation">
            <Nav className="ml-auto">
              <Link
                activeClass="active"
                className="nav-link"
                to="HOME"
                spy={true}
                smooth={true}
                duration={500}
              >
                HOME
              </Link>
              <Link
                activeClass="active"
                className="nav-link"
                to="SERVICES"
                spy={true}
                smooth={true}
                duration={500}
              >
                SERVICES
              </Link>
              <Link
                activeClass="active"
                className="nav-link"
                to="ABOUT"
                spy={true}
                smooth={true}
                duration={500}
              >
                ABOUT US
              </Link>
              <Link
                activeClass="active"
                className="nav-link"
                to="TEAM"
                spy={true}
                smooth={true}
                duration={500}
              >
                TEAM
              </Link>
              <Link
                activeClass="active"
                className="nav-link"
                to="CONTACT"
                spy={true}
                smooth={true}
                duration={500}
              >
                CONTACT US
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <HeaderTitle />
      </HeaderArea>
    )
  }
}
export default Header;