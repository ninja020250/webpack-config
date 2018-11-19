import React, { Component } from "react";
import ReactDom from "react-dom";
import { NavLink } from "react-router-dom";

class SearchBox extends Component {
  render() {
    return (
      <div className="main">
        <div className="get-back">
          <NavLink activeClassName="item-active" to="/" exact>
            <i class="fas fa-arrow-left" />
          </NavLink>
        </div>
        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            placeholder="type something"
          />
          <a className="search-btn">
            <i className="fas fa-search" />
          </a>
        </div>
      </div>
    );
  }
}

export default SearchBox;
