import React, { Component } from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

import './SideDrawer.css';

class SideDrawer extends Component {


  render() {
    let attachedClasses = "SideDrawer Close";
    if (this.props.open) {
      attachedClasses = "SideDrawer Open";
    }
    return (
      <div>
        <Backdrop show={this.props.open} clicked={this.props.closed}/>
        <div className={attachedClasses}>
          <div className="Logo">
            <Logo/>
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
      </div>

    )
  }
}

export default SideDrawer;
