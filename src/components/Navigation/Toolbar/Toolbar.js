import React, { Component } from 'react';

import './Toolbar.css';
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

class Toolbar extends Component {
  render() {
    return (
      <header className="Toolbar">
          <DrawerToggle clicked={this.props.drawerToggleClicked}/>
          <div className="Logo">
            <Logo/>
          </div>
        <nav className="DesktopOnly">
          <NavigationItems />
        </nav>
      </header>
    )
  }
}

export default Toolbar;
