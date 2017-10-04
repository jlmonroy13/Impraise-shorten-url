import React, { Component } from "react";
import PropTypes from "prop-types";
import LinksListItem from '../LinksListItem/';


class LinksList extends Component {
  constructor() {
    super();
    this.renderLinks = this.renderLinks.bind(this);
  }
  renderLinks(link) {
    return <LinksListItem link={link} />;
  }
  render() {
    return (
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
            <tbody>{this.props.links.map(this.renderLinks)}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

LinksList.propTypes = {
  links: PropTypes.array
};

export default LinksList;
