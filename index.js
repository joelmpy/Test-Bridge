const axios = require("axios");

const options = {
  method: "GET",
  url: "https://api.bridgeapi.io/v2/items",
  params: { limit: "50" },
  headers: {
    Accept: "application/json",
    "Bridge-Version": "2021-06-01",
    "client-id": "945a08c761804ac1983536463fc4a7f6",
    "client-secret":
      "YqUINh5B5pYlp7UzlENutajikoDX1gIW4pNObUCn9sEXLXGm39Mm1Yq8JKUFaHUD",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

// recupération de la requete pour les transactions //
  const transactions = {
    method: 'GET',
    url: 'https://api.bridgeapi.io/v2/transactions',
    params: {limit: 'null'},
    headers: {Accept: 'application/json', 'Bridge-Version': '2021-06-01',"client-id": "945a08c761804ac1983536463fc4a7f6",
    "client-secret":
      "YqUINh5B5pYlp7UzlENutajikoDX1gIW4pNObUCn9sEXLXGm39Mm1Yq8JKUFaHUD",}
  };
  
  axios.request(transactions).then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  })

  // Recuperer le token d'authorization 
  const user = {
    method: 'POST',
    url: 'https://api.bridgeapi.io/v2/authenticate',
    headers: {
      Accept: 'application/json',
      'Client-Id': '945a08c761804ac1983536463fc4a7f6',
      'Client-Secret': 'YqUINh5B5pYlp7UzlENutajikoDX1gIW4pNObUCn9sEXLXGm39Mm1Yq8JKUFaHUD',
      'Bridge-Version': '2021-06-01',
      'Content-Type': 'application/json'
    },
    data: {email: 'john.doe@email.com', password: 'password123'}
  };
  
  axios.request(user).then(function (response) {
    console.log(response.data);
    // On recupere la liste des items a partir du token d'authorization 
    const items = {
      method: 'GET',
      url: 'https://api.bridgeapi.io/v2/items',
      params: {limit: '50'},
      headers: {
        Accept: 'application/json',
        'Client-Id': '945a08c761804ac1983536463fc4a7f6',
        'Client-Secret': 'YqUINh5B5pYlp7UzlENutajikoDX1gIW4pNObUCn9sEXLXGm39Mm1Yq8JKUFaHUD',
        Authorization: response.data.access_token,
        'Bridge-Version': '2021-06-01'
      }
    };
    
    axios.request(items).then(function (data) {
      console.log(data.data);
    }).catch(function (error) {
      console.error(error);
      console.log('"pas ok ')
    });
    
  }).catch(function (error) {
    console.error(error , 'okkkkkk');
  });
