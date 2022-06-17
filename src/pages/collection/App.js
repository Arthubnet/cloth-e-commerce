import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import Error from "./components/erorr.component";
import ShopPage from "./pages/shop/shop.components";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-out.component";
import CheckoutPage from "./pages/checkout/checkout.component";
/* Firebase */
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserDoc } from "./firebase/firebase.utils";
/* Redux */
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
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
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop/*" element={<ShopPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            {/* prettier-ignore */}
            <Route path="/signin" element={this.props.currentUser ? <Homepage/> : <SignInAndSignUpPage/>} />
            <Route path="*" element={<Error />} />
          </Routes>
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
