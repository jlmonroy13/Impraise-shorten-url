import moment from 'moment';
import { requestGetShortenLink, requestGetShortenStatus } from '../requests/links';
import Alert from 'react-s-alert';
import { ADD_LINK } from '../utils/constants';

const addLink = (linkInfo) => ({
	type: ADD_LINK,
	payload: linkInfo,
});

const getShortenStatus = (shortenUrl) => {
	return () => {
		requestGetShortenStatus(shortenUrl)
			.then(successGetShortenUrlReq);

		function successGetShortenUrlReq() {

			Alert.success('¡Tu información bancaria ha sido registrada!');
		}
	};
};

const getShortenUrlReq = (urlData) => {
	return (dispatch) => {
		requestGetShortenLink(urlData)
			.then(successGetShortenUrlReq);

		function successGetShortenUrlReq({ data: { shortcode } }) {
      const urlObj = {
        [shortcode]: {
          shortcode,
          url: urlData.url,
          startDate: moment().format(),
          redirectCount: 0,
        }
      };
      dispatch(addLink(urlObj));
			Alert.success(`Your shorten for "${urlData.url}" was successfully created`);
		}
	};
};



export {
  getShortenUrlReq,
  getShortenStatus,
};
