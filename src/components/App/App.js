import React, { Component } from "react";
import Header from '../Header/';
import Form from '../Form/';
import LinksList from '../LinksList/';

class App extends Component {
  render() {
    return (
      <div className="container container--small">
        <Header />
        <section>
          <Form />
          <div className="message">
            <span className="message__text">Previously shortened by you</span>
            <span className="message__button">Clear history</span>
          </div>
          <LinksList />
        </section>
      </div>
    );
  }
}

export default App;
