import React, { Component } from 'react';

import  './Button.css';
class Button extends Component {

  render() {
    return (
      <button
        className={`Button ${this.props.btnType}`}
        onClick={this.props.clicked}>{this.props.children}</button>
    )
  }
}

export default Button;
