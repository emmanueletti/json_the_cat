const request = require('request');

// download all the breeds data set
// filter the data set to the cat user would like to know about
// display the description property of that cat
// if filter returns empty array - console log - 'cat not found'
const fetchBreedData = (query) => {
  return new Promise((resolve, reject) => {
    // HTTP request wrapped in a promise to make use of .then dyntax
    request('https://api.thecatapi.com/v1/breeds', function (error, response, body) {
      if (error) {
        reject(error);
      }
      // const statusCode = response.statusCode;
      resolve({ body, query });
    });
  });
};

module.exports = fetchBreedData;
