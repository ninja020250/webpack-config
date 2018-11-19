import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchBox from "../components/SearchBox";
import Home from "../components/Home";
import SocialButton from "../components/SocialButton";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={Home} />
          <Route path="/searchBox" component={SearchBox} />
          <Route path="/socialButton" component={SocialButton} />
        </div>
      </Router>
    );
  }
}
export default App;
