import React, { Component } from "react";
import "./app.css";
import ReactImage from "./logo.svg";

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    fetch("/api/getUsername")
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? (
          <h1>{`Hello World : 안녕하세요 : ${username}`}</h1>
        ) : (
          <h1>Loading...........!</h1>
        )}
        <img src={ReactImage} alt="logo" />
      </div>
    );
  }
}
