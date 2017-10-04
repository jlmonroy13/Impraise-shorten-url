import axios from 'axios';

const shorten = axios.create({
  baseURL: 'http://localhost:5001',
});

shorten.interceptors.request.use(config => (
  configBearerToken(config)
));

function configBearerToken(config) {
  return {
    ...config,
    headers: {
      ...config.headers,
      'Content-Type': 'application/json',
      crossDomain: true,
    }
  };
}

export {
  shorten,
};
