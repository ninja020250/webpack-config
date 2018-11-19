import React, { Component } from "react";
import { Provider } from "react-redux";
import "../styles/index.css";
import {APIService} from "../common/api/APIService";
class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    APIService.get("products")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }
  post = () => {
    APIService
      .post("products")
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="btn btn-primary" onClick={this.post}>
        Hello
      </div>
    );
  }
}
export default App;
