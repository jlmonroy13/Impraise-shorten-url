import { shorten } from '../utils/requests';
import Alert from 'react-s-alert';

const requestGetShortenLink = (urlData) => {
  return shorten
    .post('/shorten', urlData)
    .catch(catchRequestError);
};

const requestGetShortenStatus = (shortenUrl) => {
  return shorten
    .get(`/${shortenUrl}/stats`)
    .catch(catchRequestError);
};

function catchRequestError({ response }) {
  const errorMsg = response.data.error && response.data.error.user_authentication[0];
  Alert.error(errorMsg);
}

export {
  requestGetShortenLink,
  requestGetShortenStatus,
};
