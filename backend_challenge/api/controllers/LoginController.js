/**
 * LoginController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  loginUser: function (req, res) {

    var email=req.body.email;
    var password=req.body.password;

    if(email == undefined || password == undefined)
    {
      return res.status(400).send('Some values are missing');
    }

    // default password for all users
    if(password != "password")
    {
      return res.status(401).send('Invalid username or password');
    }

   // Use XMLHttpRequest (XHR) objects to interact with servers
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhttp = new XMLHttpRequest();
//console.log("hello");
    //callback that contains event handler to be called when the readystatechange event is fired
    xhttp.onreadystatechange = function()
       {
         if (this.readyState == 4 && this.status == 200)
         {
          var JSONresponse =JSON.parse(xhttp.responseText);
          //console.log(JSONresponse.length);
          if(JSONresponse.length==0)
           {
              return res.status(401).send('Invalid username or password');
           }
         //console.log(JSONresponse);
          return res.json({ authenticated: 'true', id:JSONresponse[0].id, name: JSONresponse[0].name, token: jwToken.issue({ id: JSONresponse[0].id}) });
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
     var url = "https://jsonplaceholder.typicode.com/users?email="+email;
     xhttp.open("GET",url,true);
     xhttp.send();

    },


};
