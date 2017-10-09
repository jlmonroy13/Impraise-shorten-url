import React, { Component } from 'react';
import PropTypes from 'prop-types';
import randamId from 'random-id';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: '',
    };

    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  onChangeUrl(e) {
		this.setState({ [e.target.name]: e.target.value });
  }

  onSubmitForm(e) {
		e.preventDefault();
    const { url } = this.state;
    const urlData = {
      url,
      shortcode: randamId(6, 'a0'),
    };
		this.props.onGetShortenUrl(urlData);
	}

  render() {
    const { url } = this.state;
    const buttonClass = url ? '' : 'disable';
    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <input
          type="text"
          className="form__input"
          placeholder="Paste the link you want to shorten here"
          value={url}
          onChange={this.onChangeUrl}
          name="url"
        />
        <button
          className={`button button--primary form__button ${buttonClass}`}
          type="submit"
          disabled={!url}
        >
          Shorten this link
        </button>
      </form>
    );
  }
}

Form.propTypes = {
	onGetShortenUrl: PropTypes.func.isRequired,
};

export default Form;
