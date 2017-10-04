import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const LinksListItem = ({ link }) => (
  <tr key={link.shortcode}>
    <td className="table__item new">
      <p className="table__item-text">
        https://impraise-shorty.herokuapp.com
        <span className="table__item-text--red">/{link.shortcode}</span>
        <span className="table__item-button">Click to copy this link</span>
      </p>
      <p className="table__item-text table__item-text--light-gray">
        {link.url}
      </p>
    </td>
    <td>{link.redirectCount}</td>
    <td>{moment(link.startDate).fromNow()}</td>
  </tr>
);

LinksListItem.propTypes = {
  link: PropTypes.object
};

export default LinksListItem;
