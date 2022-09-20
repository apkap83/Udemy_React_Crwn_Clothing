import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

// import { UserContext } from "../../contexts/user.context";

import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  getGoogleRedirectResult,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  let navigate = useNavigate();
  // const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const myGetRedirectResult = async () => {
      await getRedirectResult(auth);
      // setCurrentUser(user);
      // console.log("currentUser", currentUser);
    };

    myGetRedirectResult();
  }, []);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const triggerSignInWithGooglePopup = async () => {
    await signInWithGooglePopup();
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      navigate("/");
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("User does not exist");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          value={email}
          onChange={handleChange}
        />

        <FormInput
          label="password"
          type="password"
          name="password"
          required
          value={password}
          onChange={handleChange}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={triggerSignInWithGooglePopup}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign in Popup
          </Button>
          <Button
            type="button"
            onClick={signInWithGoogleRedirect}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Google Sign in Redirect
          </Button>
        </div>
      </form>
    </div>
  );
};
