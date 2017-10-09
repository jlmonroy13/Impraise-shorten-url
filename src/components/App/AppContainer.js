import { connect } from 'react-redux';
import App from './App';
import { removeLinks } from '../../actions/links';
import ObjectUtils from '../../utils/object';

const mapStateToProps = state => {
  const { links } = state;
  const linksArr = ObjectUtils.toArray(links);
  const availableLinks = linksArr.length > 0;

  return {
    availableLinks,
  };
};

const mapDispatchToProps = dispatch => ({
  onRemoveLinks: () => {
    dispatch(removeLinks());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
