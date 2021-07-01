const breedFilter = (data) => {
  const breedData = JSON.parse(data.body);

  // find the info for the user requested cat
  const output = breedData.filter((el) => {
    return el.name.toLowerCase() === data.query;
  });

  return output;
};

module.exports = breedFilter;
