import React from 'react';
import "./Header.styles.scss";

import {ReactComponent as Logo} from "../../assets/crown.svg"
// import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../Cart-Icon/Cart-Icon.component';
import CartDropdown from '../Cart-Dropdown/Cart-Dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from "reselect"
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './Header.styles';

const Header = ({currentUser, hidden}) => {
  return (
    <HeaderContainer className="header">
      <LogoContainer to="/">
        <Logo className="logo"/>
      </LogoContainer>
      <OptionsContainer >
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ? 
          <OptionLink as="div" onClick={()=>auth.signOut()}>
            SIGN OUT
          </OptionLink> :
          <OptionLink  to="/sign-in">
            SIGN IN
          </OptionLink>
        }
        <CartIcon/>
      </OptionsContainer>
      {hidden ? null : <CartDropdown/>}
    </HeaderContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden : selectCartHidden
})

export default connect(mapStateToProps)(Header);
