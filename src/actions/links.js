import moment from 'moment';
import axios from 'axios';
import { requestGetShortenLink, requestGetShortenStatus } from '../requests/links';
import Alert from 'react-s-alert';
import { ADD_LINK } from '../utils/constants';
import ObjectUtils from '../utils/object';

const addLink = (linkInfo) => ({
	type: ADD_LINK,
	payload: linkInfo,
});

const getShortenUrlReq = (urlData) => {
	return (dispatch, getState) => {
    const { links } = getState();
		requestGetShortenLink(urlData)
			.then(successGetShortenUrlReq);

		function successGetShortenUrlReq({ data: { shortcode } }) {
      const linksArrPromises = ObjectUtils.toArray(links).map((link) => requestGetShortenStatus(link.shortcode));
      const urlObj = {
        [shortcode]: {
          shortcode,
          url: urlData.url,
          startDate: moment().format(),
          redirectCount: 0,
        }
      };
      axios.all(linksArrPromises).then((a, b) => {
        console.log(a, b, 'the promises');
      });
      dispatch(addLink(urlObj));
			Alert.success(`Your shorten for "${urlData.url}" was successfully created`);
		}
	};
};



export {
  getShortenUrlReq,
};
