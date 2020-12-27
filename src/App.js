import React, { Component } from 'react';import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';
import SignInAndSignUp from './pages/Sign-In-And-Sign-Up/Sign-In-And-Sign-Up.component';
import { auth , createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFronAuth = null;

  componentDidMount() {
    this.unsubscribeFronAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({currentUser: userAuth })
    })
  }

  componentWillUpdate() {
    this.unsubscribeFronAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign-in" component={SignInAndSignUp}/>
        </Switch>
      </div>
    );
  }
}


export default App;
