import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/Homepage";
import Error from "./components/Erorr";
import ShopPage from "./pages/shop/Shop";
import Header from "./components/header/Header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/SignInAndSignUp";
import CheckoutPage from "./pages/checkout/Checkout";
/* Firebase */
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserDoc } from "./firebase/firebase.utils";
/* Redux */
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import ScrollToTop from "./components/ScrollToTop";

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    console.log("did mount rendered");
    onAuthStateChanged(auth, async (currentUser) => {
      let dbUser = await createUserDoc(currentUser);
      setCurrentUser(dbUser);
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <ScrollToTop>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/shop/*" element={<ShopPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              {/* prettier-ignore */}
              <Route path="/signin" element={<SignInAndSignUpPage/>} />
              <Route path="*" element={<Error />} />
            </Routes>
          </ScrollToTop>
        </Router>
      </div>
    );
  }
}

let mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

let mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
