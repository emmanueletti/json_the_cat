const fetchBreedData = require('./breedFetcher');
const breedFilter = require('./breedFilter');

// find out what cat user would like to query
const breedQuery = process.argv[2].toLowerCase().trim();

fetchBreedData(breedQuery)
  .then(breedFilter)
  .then((array) => {
    // empty array returned after filter for query
    if (array.length === 0) {
      console.log(`Couldn't find that breed`);
      return;
    }
    console.log(array[0].description);
  })
  .catch((error) => {
    console.log('🚨🚨', error);
  });
