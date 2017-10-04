import { connect } from 'react-redux';
import LinksList from './LinksList';
import ObjectUtils from '../../utils/object';

const mapStateToProps = state => {
  const { links } = state;
  const linksArr = ObjectUtils.toArray(links);

  return {
    links: linksArr,
  };
};

export default connect(
  mapStateToProps,
  null,
)(LinksList);
