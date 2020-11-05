const getDataFromApi = async () => {
  const token = await fetchUserToken();
  const mercadonaId = await fetchMercadonaId(token);
  return fetchCategories(token, mercadonaId);
};

export default getDataFromApi;

function fetchUserToken() {
  return fetch('https://api.comprea.com/v7/user/session')
    .then((response) => response.json())
    .then((sessionInformation) => {
      return sessionInformation.token;
    });
}

function fetchMercadonaId(token) {
  const postalCode = '28010';
  const url = `https://api.comprea.com/v7/user/postalcode?token=${token}&postalcode=${postalCode}`;
  return fetch(url)
    .then((marketResponse) => marketResponse.json())
    .then((marketResponseAsJson) => {
      let markets = marketResponseAsJson.services.map(
        (service) => service.markets
      );
      markets = [].concat.apply([], markets);
      return markets.find((market) => market.name === 'Mercadona').id;
    });
}

function fetchCategories(token, mercadonaId) {
  return fetch(
    `https://api.comprea.com/v7/company/categories?token=${token}&company_id=${mercadonaId}`
  )
    .then((categoriesResponse) => categoriesResponse.json())
    .then((categories) => {
      return categories.categories;
    });
}
