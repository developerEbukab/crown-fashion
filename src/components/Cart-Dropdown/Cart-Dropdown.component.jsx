import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../Cart-Item/Cart-Item.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import "./Cart-Dropdown.styles.scss";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        {cartItems.length ?
          cartItems.map((item) => <CartItem item={item} />) :
          <p className="empty-text">Your cart is empty.</p>
        }
      </div>
      <CustomButton onClick={() => {
        history.push("/checkout")
        dispatch(toggleCartHidden())
      }} >Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
