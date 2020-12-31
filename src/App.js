import React, { Component } from 'react';import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Homepage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInAndSignUp from './pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up.component';
import { addCollectionAndDocuments, auth , createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import {createStructuredSelector} from "reselect"
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage.component';
import { selectCollectionsForPreview } from './redux/shop/shop.selectors';

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFronAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFronAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
            ...snapShot.data()
          })
        })
      }
      setCurrentUser(userAuth )
      // addCollectionAndDocuments("collections", collectionsArray.map(({title, items}) => ({title, items})))
    })
  }

  componentWillUpdate() {
    this.unsubscribeFronAuth();
  }

  render() {
    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/sign-in"
            render={() => 
              this.props.currentUser ? 
                <Redirect to="/" /> :
                <SignInAndSignUp/>
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
