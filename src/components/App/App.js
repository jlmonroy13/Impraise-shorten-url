import React, { Component } from "react";
import PropTypes from 'prop-types';
import Header from '../Header/';
import Form from '../Form/';
import LinksList from '../LinksList/';
import Alert from 'react-s-alert';
import { Spinner } from 'react-redux-spinner';

class App extends Component {
  constructor(props) {
    super(props);
    this.onClearList = this.onClearList.bind(this);
  }
  onClearList() {
    this.props.onRemoveLinks();
  }
  render() {
    const { availableLinks } = this.props;
    const textMessage = availableLinks ? 'Previously shortened by you' : 'You do not have shorened links yet';
    return (
      <div className="container container--small">
        <Header />
        <section>
          <Form />
          <div className="message">
            <span className="message__text">{textMessage}</span>
            {availableLinks ? <span className="message__button" onClick={this.onClearList}>Clear history</span> : null}
          </div>
          {availableLinks ? <LinksList /> : null}
        </section>
        <Alert stack={{ limit: 3 }} />
        <Spinner />
      </div>
    );
  }
}

App.propTypes = {
  onRemoveLinks: PropTypes.func.isRequired,
  availableLinks: PropTypes.bool.isRequired,
};

export default App;
