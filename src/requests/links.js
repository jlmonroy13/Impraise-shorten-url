import { shorten } from '../utils/requests';

const requestGetShortenLink = (urlData) => {
  return shorten
    .post('/shorten', urlData);
};

const requestGetShortenStatus = (shortenUrl) => {
  return shorten
    .get(`/${shortenUrl}/stats`);
};

export {
  requestGetShortenLink,
  requestGetShortenStatus,
};
