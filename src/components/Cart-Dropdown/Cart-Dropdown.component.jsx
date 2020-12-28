import React from 'react';
import CustomButton from '../Custom-Button/Custom-Button.component';
import "./Cart-Dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>Go To Checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
