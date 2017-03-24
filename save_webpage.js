var request = require('request-promise'); //module for promise version of request, which is or getting url data
var fs = require('fs-promise'); //module for promise version of fs, which is for file reading and writing

var url = 'http://css-tricks.com';
var filename = 'css-tricks.html';


function saveWebPage(url, filename) {
  //return something
  return request(url)  // Return the request
    .then(function(html) {
      return fs.writeFile(filename, html);
    });
    // .then(function() {
    //   console.log('Worked');
    // })
    // No need for error catching inside of the function itself
    // .catch(function(err) {
    //   console.log(err.message);
    // });

}

// Calling the function with error handling

//This is a promise to do this
saveWebPage(url, filename)
  .then(function() {
    console.log("It worked");
  })
  .catch(function(err) {
    console.log("Something went wrong");
    console.log("Because", err.message);
  });
