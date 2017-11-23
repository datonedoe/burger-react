import React, { Component } from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
        ingredients : {
          salad: 0,
          bacon: 0,
          cheese: 0,
          meat: 0
        },
        totalPrice: 0,
        purchasable: false,
        purchasing: false
      };

      this.addIngredientHandler = this.addIngredientHandler.bind(this);
      this.removeIngredientHandler = this.removeIngredientHandler.bind(this);
      this.updatePurchaseState = this.updatePurchaseState.bind(this);
  }

  updatePurchaseState (ingredients)  {
      const sum = Object.keys(ingredients)
        .map(igKey => {
          return ingredients[igKey]
        })
        .reduce((sum, el) => {
          return sum + el;
        }, 0);
      console.log("updatePurchaseState this", this);
      this.setState=({purchasable: sum > 0})
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    console.log("addIngredientHandler this", this);
    console.log("addIngredientHandler this.state", this.state)
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      purchasable: newPrice>0.001
    });
    // this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    console.log("removeIngredientHandler");
    const oldCount = this.state.ingredients[type];
    console.log("oldCount:", oldCount);
    if(oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount -1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
      purchasable: newPrice>0.001
    });
    // this.updatePurchaseState(updatedIngredients);

  }

  purchaseHandler = () => {
    this.setState({purchasing: true})
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  }

  purchaseContinueHandler = () => {
    alert("You continue!");
  }

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    }

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
        <div className="BurgerBuilder">
          <Modal
            show={this.state.purchasing}
            modalClosed={this.purchaseCancelHandler}>
              <OrderSummary
                ingredients={this.state.ingredients}
                price = {this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}/>
          </Modal>
          <Burger ingredients={this.state.ingredients}/>
          <BuildControls
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={this.removeIngredientHandler}
              disabled={disabledInfo}
              purchasable={this.state.purchasable}
              ordered={this.purchaseHandler}
              price={this.state.totalPrice}
              />
        </div>
    )

  }
}
export default BurgerBuilder;
