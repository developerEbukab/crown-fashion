import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import HomePage from './components/Homepage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component';


function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        {/* <Route path="/sign-in" component={SignInAndSignUp}/> */}
      </Switch>
    </div>
  );
}

export default App;
