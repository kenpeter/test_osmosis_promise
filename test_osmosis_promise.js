var Promise = require('bluebird');
var osmosis = require('osmosis');

var searchUrl = "https://www.seek.com.au/php-jobs/in-melbourne";

// https://github.com/rchipka/node-osmosis/issues/108
var osmosisPromise = new Promise((resolve, reject) => {
  osmosis
    .get(searchUrl)
    .find('article')
    .set({
      'script': 'script'
    })
    .data((data) => {
      console.log('---- single data ----');
      console.log(data);
      resolve();
    });
});


osmosisPromise.then(() => {
  console.log('--- all done ---');
  process.exit(0);
});
