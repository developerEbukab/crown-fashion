import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import CartItem from '../Cart-Item/Cart-Item.component';
import CustomButton from '../Custom-Button/Custom-Button.component';
import "./Cart-Dropdown.styles.scss";

const CartDropdown = ({cartItems}) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" >
        {
          cartItems.map((item) => <CartItem item={item}/>)
        }
      </div>
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems : selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
