import React, { Component } from 'react';

import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

class BuildControls extends Component {
  render() {

    const controls = [
      {label: 'Salad', type: 'salad'},
      {label: 'Bacon', type: 'bacon'},
      {label: 'Cheese', type: 'cheese'},
      {label: 'Meat', type: 'meat'},
    ]
    return (
      <div className="BuildControls">
        <p>Currnet Price: <strong>${this.props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            type={ctrl.type}
            added={() => this.props.ingredientAdded(ctrl.type)}
            removed={() => this.props.ingredientRemoved(ctrl.type)}
            disabled={this.props.disabled[ctrl.type]}/>
        ))
        }
        <button
          className="OrderButton"
          disabled={!this.props.purchasable}
          onClick={this.props.ordered}
          >ORDER NOW</button>

      </div>
    )
  }
}

export default BuildControls
