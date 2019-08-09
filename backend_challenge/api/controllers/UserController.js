/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  fetchUsers: function (req, res) {

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
            //sending request to fetch users
     xhttp.open("GET", "https://jsonplaceholder.typicode.com/users",true);
     xhttp.send();

    },


};
