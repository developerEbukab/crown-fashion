import React from 'react';
import "./Custom-Button.styles.scss"

const CustomButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

//     <CustomButtonContainer {...props}>{children}</CustomButtonContainer>

export default CustomButton;
