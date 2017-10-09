import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { CopyToClipboard } from "react-copy-to-clipboard";

const LinksListItem = ({ link }) => {
  const { lastSeenDate } = link;
  return (
    <tr key={link.shortcode}>
      <td className="table__item new">
        <p className="table__item-text">
          https://impraise-shorty.herokuapp.com
          <span className="table__item-text--red">/{link.shortcode}</span>
          <CopyToClipboard
            text={`https://impraise-shorty.herokuapp.com/${link.shortcode}`}
          >
            <span className="table__item-button">Click to copy this link</span>
          </CopyToClipboard>
        </p>
        <p className="table__item-text table__item-text--light-gray">
          {link.url}
        </p>
      </td>
      <td>{link.redirectCount}</td>
      <td>{lastSeenDate === undefined ? 'None' : moment(lastSeenDate).fromNow()}</td>
    </tr>
  );
};

LinksListItem.propTypes = {
  link: PropTypes.object
};

export default LinksListItem;
