import React from "react";

const Form = () => (
  <form className="form">
    <input
      type="text"
      className="form__input"
      placeholder="Paste the link you want to shorten here"
    />
    <button className="button button--primary form__button" type="submit">
      Shorten this link
    </button>
  </form>
);

export default Form;
