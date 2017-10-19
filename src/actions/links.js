import moment from 'moment';
import axios from 'axios';
import { requestGetShortenLink, requestGetShortenStatus } from '../requests/links';
import Alert from 'react-s-alert';
import { ADD_LINK, REMOVE_LINKS } from '../utils/constants';
import ObjectUtils from '../utils/object';
import { removeStorageState } from '../utils/localStorage';
import { setStatusRequestFalse, setStatusRequestTrue } from './spinner';

const addLink = (linkInfo) => ({
	type: ADD_LINK,
	payload: linkInfo,
});

const removeLinksState = () => ({
	type: REMOVE_LINKS,
});

const removeLinks = () => {
  return (dispatch) => {
    if (confirm('Are you sure you want to delete all the links?')) {
      removeStorageState('state');
      dispatch(removeLinksState());
    }
  };
};

const getShortenUrlReq = (urlData) => {
	return (dispatch, getState) => {
    dispatch(setStatusRequestTrue());
    const { links } = getState();
		requestGetShortenLink(urlData)
      .then(successGetShortenUrlReq)
      .catch(catchRequestError);

		function successGetShortenUrlReq({ data: { shortcode } }) {
      const linksArr = ObjectUtils.toArray(links);
      const linksArrPromises = linksArr.map((link) => requestGetShortenStatus(link.shortcode));
      const urlObj = {
        [shortcode]: {
          shortcode,
          url: urlData.url,
          startDate: moment().format(),
          redirectCount: 0,
        }
      };
      axios.all(linksArrPromises)
        .then((response) => {
          linksArr.forEach((link, index) => {
            const updatedUrlObj = { ...link, ...response[index].data };
            const obj = {
              [updatedUrlObj.shortcode]: { ...updatedUrlObj },
            };
            dispatch(addLink(obj));
          });
        })
        .catch(catchRequestError);
      dispatch(addLink(urlObj));
      Alert.success(`Your shorten for "${urlData.url}" was successfully created`);
      dispatch(setStatusRequestFalse());
    }

    function catchRequestError({ response }) {
      dispatch(setStatusRequestFalse());
      if (response === undefined) {
        Alert.error('Please ensure that the server has not been disconnected');
      } else {
        const errorMsg = response.data.error && response.data.error.user_authentication[0];
        Alert.error(errorMsg);
      }
    }
	};
};



export {
  getShortenUrlReq,
  removeLinks,
};
