const URL_CURRENCY = 'https://economia.awesomeapi.com.br/json/all';

const currencyAPI = () => (
  fetch(URL_CURRENCY)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default currencyAPI;
