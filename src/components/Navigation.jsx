import React from 'react';
import { Link, NavLink ,IndexLink  } from 'react-router-dom'
import  {Navbar, Nav, NavItem, MenuItem, NavDropdown}  from 'react-bootstrap';
require('../../public/js/wow.min.js');
require('../../public/js/jquery-3.3.1.min.js');
export default class Header extends React.Component{
  render(){
    console.log(WOW);
    new WOW().init();
    return(

      <header>
<h1> works</h1>
{/* <Navbar  collapseOnSelect > 
  <Navbar.Header>
    <Navbar.Brand className="navbar-brand">
    <a href="index.html"><h1><span>Com</span>pany</h1></a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse className="navigation">
    <Nav pullRight>
    <NavItem eventKey={2} href="#">
    <NavLink exact  to="/" activeClassName="active">Home</NavLink >
      </NavItem>
      <NavItem eventKey={2} href="#">
      <NavLink to="/about" activeClassName="active">About Us</NavLink>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <NavLink to="/industrial" activeClassName="active">Industrial</NavLink>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <NavLink to="/services" activeClassName="active">Services</NavLink>
      </NavItem>
      <NavItem eventKey={2} href="#">
      <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>; */}


    {/* <nav className="navbar navbar-default  navbar-fixed-top">
      <div className="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse.collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
            <div className="navbar-brand">
              <a href="index.html"><h1><span>Com</span>pany</h1></a>
            </div>
          </div>

          <div className="navbar-collapse collapse">
            <div className="menu">
              <ul className="nav nav-tabs" role="tablist">
                <li role="presentation">
                <NavLink exact  to="/" activeClassName="active">Home</NavLink >
                </li>
                <li role="presentation">
                <NavLink to="/about" activeClassName="active">About Us</NavLink>
                </li>
                <li role="presentation">
                <NavLink to="/services" activeClassName="active">Services</NavLink>
                </li>
                <li role="presentation">
                <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                </li>
                <li role="presentation">
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav> */}
  </header>
          //  <div id="breadcrumb">
          //   <div className="container">
          //     <div className="breadcrumb">
          //       <li><a href="/">Home</a></li>
          //     </div>
          //   </div>
          // </div>
    
    )
  }

}