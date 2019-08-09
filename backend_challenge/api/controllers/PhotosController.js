/**
 * PhotosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  // function for /photos to fetch all photos associated with the user (authenticated)

  fetchphotos: function (req, res) {

    // fetching user id from payload of the token
    var userID = req.token.id;

    // Use XMLHttpRequest (XHR) objects to interact with servers
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();

    //callback that contains event handler to be called when the readystatechange event is fired
    xhttp.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        var JSONresponse =JSON.parse(xhttp.responseText);
        var jsons = new Array();

        //final json array with all ajax calls result
        let combinedJSONresponse = [];

        if (typeof localStorage === "undefined" || localStorage === null) {
          var LocalStorage = require('node-localstorage').LocalStorage;
          localStorage = new LocalStorage('./scratch');
        }
        // used to get the last ajax call request (as it happens asynchronous)
        localStorage.setItem("j", -1);

        // Loop through all albums of a user to fetch associated photos
        for (let i = 0; i < JSONresponse.length; i++) {
          var url =  "https://jsonplaceholder.typicode.com/photos?albumId="+ JSONresponse[i].id;
          var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
          let request = new XMLHttpRequest();
          request.open("GET", url);
          request.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
              combinedJSONresponse = combinedJSONresponse.concat(JSON.parse(request.responseText));
              //var data = JSON.parse(request.responseText);
              var j = parseInt(localStorage.getItem("j"));
              j=j+1;
              localStorage.setItem("j", j);
              //console.log(localStorage.getItem("j"));
              if(j==(JSONresponse.length-1))
              {
                return res.json(combinedJSONresponse);
              }
            }
          }
          request.send();
        }
      }

      if (this.readyState == 4 && this.status == 400)
      {
        var JSONresponse =JSON.parse(xhttp.responseText);
        return res.status(400).json(JSONresponse);
      }

      if (this.readyState == 4 && this.status == 404)
      {
        var JSONresponse =JSON.parse(xhttp.responseText);
        return res.status(404).json(JSONresponse);
      }

      if (this.readyState == 4 && this.status == 500)
      {
        var JSONresponse =JSON.parse(xhttp.responseText);
        return res.status(500).json(JSONresponse);
      }

      if (xhttp.readyState == 4 && xhttp.status == 0)
      {
        var JSONresponse =JSON.parse(xhttp.responseText);
        return res.status(500).json(JSONresponse);
      }
    };

    // fetching albums of logged in user
    var url = "https://jsonplaceholder.typicode.com/albums?userId="+ userID;
    xhttp.open("GET",url,true);
    //sending request to fetch albums
    xhttp.send();

  },




  // function for /photos/:id to return a specific photo (authenticated)

  fetchphotos_withID: function (req, res) {

    // fetching param /:id from request
    var paramID = req.param('id')

    // Use XMLHttpRequest (XHR) objects to interact with servers
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();

    //callback that contains event handler to be called when the readystatechange event is fired
    xhttp.onreadystatechange = function()
    {
      if (this.readyState == 4 && this.status == 200)
      {
        var JSONresponse =JSON.parse(xhttp.responseText);
        //console.log(JSONresponse);
        return res.json(JSONresponse);
      }

      if (this.readyState == 4 && this.status == 400)
      {
        var JSONresponse =JSON.parse(xhttp.responseText);
        return res.status(400).json(JSONresponse);
      }

      if (this.readyState == 4 && this.status == 404)
      {
        var JSONresponse =JSON.parse(xhttp.responseText);
        return res.status(404).json(JSONresponse);
      }

      if (this.readyState == 4 && this.status == 500)
      {
        var JSONresponse =JSON.parse(xhttp.responseText);
        return res.status(500).json(JSONresponse);
      }

      if (xhttp.readyState == 4 && xhttp.status == 0)
      {
        var JSONresponse =JSON.parse(xhttp.responseText);
        return res.status(500).json(JSONresponse);
      }
    };

    var url = "https://jsonplaceholder.typicode.com/photos/"+ paramID;
    xhttp.open("GET",url,true);
    //sending request to fetch albums
    xhttp.send();

  },


};
