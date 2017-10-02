import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="container container--small">
        <header className="header">
          <h1 className="header__logo">Shooooort</h1>
          <span className="header__text">
            The link shortener with a long name
          </span>
        </header>
        <section>
          <form className="form">
            <input
              type="text"
              className="form__input"
              placeholder="Paste the link you want to shorten here"
            />
            <button className="button button--primary form__button" type="submit">Shorten this link</button>
          </form>
          <div className="message">
            <span className="message__text">Previously shortened by you</span>
            <span className="message__button">Clear history</span>
          </div>
          <div className="table__overflow">
            <table className="table">
              <thead>
                <tr>
                  <th>Link</th>
                  <th>Visits</th>
                  <th>Last visited</th>
                </tr>
              </thead>
            </table>
            <div className="table__container">
              <table className="table">
                <tbody>
                  <tr>
                    <td className="table__item new">
                      <p className="table__item-text">
                        shooooort.co
                        <span className="table__item-text--red">/fcaaa2313213</span>
                        <span className="table__item-button">Click to copy this link</span>
                      </p>
                      <p className="table__item-text table__item-text--light-gray">https://github.com/jlmonroy13/Impraise-shorten-url</p>
                    </td>
                    <td>1140</td>
                    <td>2 days ago</td>
                  </tr>
                  <tr>
                    <td className="table__item">
                      <p className="table__item-text">
                        shooooort.co
                        <span className="table__item-text--red">/fcaaa2313213</span>
                        <span className="table__item-button">Click to copy this link</span>
                      </p>
                      <p className="table__item-text table__item-text--light-gray">https://github.com/jlmonroy13/Impraise-shorten-url</p>
                    </td>
                    <td>1140</td>
                    <td>2 days ago</td>
                  </tr>
                  <tr>
                    <td className="table__item">
                      <p className="table__item-text">
                        shooooort.co
                        <span className="table__item-text--red">/fcaaa2313213</span>
                        <span className="table__item-button">Click to copy this link</span>
                      </p>
                      <p className="table__item-text table__item-text--light-gray">https://github.com/jlmonroy13/Impraise-shorten-url</p>
                    </td>
                    <td>1140</td>
                    <td>2 days ago</td>
                  </tr>
                  <tr>
                    <td className="table__item">
                      <p className="table__item-text">
                        shooooort.co
                        <span className="table__item-text--red">/fcaaa2313213</span>
                        <span className="table__item-button">Click to copy this link</span>
                      </p>
                      <p className="table__item-text table__item-text--light-gray">https://github.com/jlmonroy13/Impraise-shorten-url</p>
                    </td>
                    <td>1140</td>
                    <td>2 days ago</td>
                  </tr>
                  <tr>
                    <td className="table__item">
                      <p className="table__item-text">
                        shooooort.co
                        <span className="table__item-text--red">/fcaaa2313213</span>
                        <span className="table__item-button">Click to copy this link</span>
                      </p>
                      <p className="table__item-text table__item-text--light-gray">https://github.com/jlmonroy13/Impraise-shorten-url</p>
                    </td>
                    <td>1140</td>
                    <td>2 days ago</td>
                  </tr>
                  <tr>
                    <td className="table__item">
                      <p className="table__item-text">
                        shooooort.co
                        <span className="table__item-text--red">/fcaaa2313213</span>
                        <span className="table__item-button">Click to copy this link</span>
                      </p>
                      <p className="table__item-text table__item-text--light-gray">https://github.com/jlmonroy13/Impraise-shorten-url</p>
                    </td>
                    <td>1140</td>
                    <td>2 days ago</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
