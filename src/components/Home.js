import React, { Component } from "react";
import ReactDom from "react-dom";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <div className="app">
          <h1 className="app-title">Basic Component</h1>
          <div className="group-button">
            <a href="https://github.com/ninja020250/webpack-config/tree/mytoys">
              <button type="button" class="btn btn-secondary">
                <i class="fab fa-github" /> GitHub
              </button>
            </a>
          </div>
          <ul className="app-items">
            <h3>Search</h3>
            <NavLink activeClassName="item-active" to="/searchBox" exact>
              Search Box
            </NavLink>
            <NavLink to="/searchBox">link A</NavLink>
            <NavLink to="/searchBox">link A</NavLink>
          </ul>
          <ul className="app-items">
            <h3>Button</h3>
            <NavLink activeClassName="item-active" to="/socialButton" exact>
              Social Button
            </NavLink>
            <NavLink to="/searchBox">link A</NavLink>
            <NavLink to="/searchBox">link A</NavLink>
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
