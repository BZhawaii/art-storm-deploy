import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
          <div className="navbar-fixed stormNav">
             <nav id="nav_f" className="default_color" role="navigation">
                 <div className="container">
                     <div className="nav-wrapper">
                     <a href="#" id="logo-container" className="brand-logo">Art Storm</a>
                         <ul className="right hide-on-med-and-down">
                             <li><a href="#work">Artists</a></li>
                             <li><a href="#contact">Sign Up</a></li>
                             <li><a href="#contact">Sign In</a></li>
                         </ul>
                         <ul id="nav-mobile" className="side-nav">
                             <li><a href="#intro">Service</a></li>
                             <li><a href="#work">Work</a></li>
                             <li><a href="#team">Team</a></li>
                             <li><a href="#contact">Contact</a></li>
                         </ul>
                     <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
                     </div>
                 </div>
             </nav>
         </div>
        );
    }
}

export default NavBar;
