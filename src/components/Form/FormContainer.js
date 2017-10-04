import { connect } from 'react-redux';
import Form from './Form';
import { getShortenUrlReq } from '../../actions/links';

const mapDispatchToProps = dispatch => ({
  onGetShortenUrl: (urlData) => {
    dispatch(getShortenUrlReq(urlData));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);
