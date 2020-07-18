import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContexts";

class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <ul>
          <li style={{ background: theme.ui }}>Daily Scriptue</li>
          <li style={{ background: theme.ui }}>
            What does the Bible teach us?
          </li>
          <li style={{ background: theme.ui }}>Good News</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
