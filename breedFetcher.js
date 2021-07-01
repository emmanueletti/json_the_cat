const request = require('request');

// first find out what cat user would like to query
const breedQuery = process.argv[2].toLowerCase().trim();

// download all the breeds data set
// filter the data set to the cat user would like to know about
// display the description property of that cat
// if filter returns empty array - console log - 'cat not found'
const getCatBreed = () => {
  return new Promise((resolve, reject) => {
    // HTTP request wrapped in a promise to make use of .then dyntax
    request('https://api.thecatapi.com/v1/breeds', function (error, response, body) {
      if (error) {
        reject(error);
      }
      const statusCode = response.statusCode;
      resolve({ statusCode, response, body });
    });
  });
};

getCatBreed(breedQuery)
  .then((data) => {
    const breedData = JSON.parse(data.body);

    // find the info for the user requested cat
    const output = breedData.filter((el) => {
      return el.name.toLowerCase() === breedQuery;
    });

    // empty array returned after filter for query
    if (output.length === 0) {
      console.log(`Couldn't find that breed`);
      return;
    }
    console.log(output[0].description);
  })
  .catch((error) => {
    console.log('🚨🚨', error);
  });
