const request = require('request');

const getCatBreed = () => {
  return new Promise((resolve, reject) => {
    request('https://api.thecatapi.com/v1/breeds', function (error, response, body) {
      // console.error('error:', error); // Print the error if one occurred
      // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      // console.log('body:', body); // Print the HTML for the Google homepage.

      if (error) {
        reject(error);
      }
      const statusCode = response.statusCode;
      resolve({ statusCode, response, body });
    });
  });
};

getCatBreed()
  .then((data) => {
    const catInfo = JSON.parse(data.body);
    const name = 'Siberian';
    console.log(
      catInfo.filter((el) => {
        return el.name === name;
      })
    );
  })
  .catch((error) => {
    console.log(error.name);
  });
