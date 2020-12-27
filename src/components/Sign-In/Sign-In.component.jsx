import React, { Component } from 'react';
import CustomButton from '../Custom-Button/Custom-Button.component';
import FormInput from '../Form-Input/Form-Input.component';
import "./Sign-In.styles.scss";
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({email: "", password: ""})
    } catch (error) {
      console.log(error);
    }
  }

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({[name] : value})
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account </h2>
        <span>Sign in with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" isGoogleSignIn={true} onClick={signInWithGoogle}>Sign In With Google</CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
