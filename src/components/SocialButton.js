import React, { Component } from "react";
import ReactDom from "react-dom";
import { NavLink } from "react-router-dom";

class SocialButton extends Component {
  render() {
    return (
      <div className="main-social">
        <div className="get-back">
          <NavLink activeClassName="item-active" to="/" exact>
            <i class="fas fa-arrow-left" />
          </NavLink>
        </div>
        <div className="middle">
          <a href="#" className="btn">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="btn">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="btn">
            <i className="fab fa-google" />
          </a>
          <a href="#" className="btn">
            <i className="fab fa-youtube" />
          </a>
        </div>
      </div>
    );
  }
}

export default SocialButton;
