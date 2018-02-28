import React from 'react';
import { Link, NavLink ,IndexLink } from 'react-router-dom';
import  {Navbar, Nav, NavItem, MenuItem, NavDropdown, SideNav, SideNavItem, Button}  from 'react-materialize';
window.jQuery = require('../../public/js/jquery-3.3.1.min.js');
require('../../public/js/wow.min.js');
// require('../../public/js/jquery-3.3.1.min.js');
export default class Header extends React.Component{
  render(){
    return(

      <header>
<Navbar brand='logo' right fixed={true}>
  <NavItem href='get-started.html'>Getting started</NavItem>
  <NavItem href='components.html'>Components</NavItem>
</Navbar>
<SideNav
  trigger={<Button>SIDE NAV DEMO</Button>}
  options={{ closeOnClick: true }}
  >
  <SideNavItem userView
    user={{
      background: 'img/office.jpg',
      image: 'img/yuna.jpg',
      name: 'John Doe',
      email: 'jdandturk@gmail.com'
    }}
  />
  <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
  <SideNavItem href='#!second'>Second Link</SideNavItem>
  <SideNavItem divider />
  <SideNavItem subheader>Subheader</SideNavItem>
  <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
</SideNav>

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