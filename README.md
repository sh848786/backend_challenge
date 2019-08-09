### Backend Challenge 


#### Framework Used
**Sails.js**: Forms MVC structures and useful in terms of automatically generating REST APIs from the models. It is build upon Node.js

#### Routes/Endpoints with function mapping 

**Host** - localhost:1337

'/': { view: 'pages/homepage' },
'get /users':'UserController.fetchUsers',
'get /albums':'AlbumsController.fetchalbums',
'get /albums/:id':'AlbumsController.fetchalbums_withID',
'get /photos':'PhotosController.fetchphotos',
'get /photos/:id':'PhotosController.fetchphotos_withID',
'post /login':'LoginController.loginUser',

****Every API except /login and /users requires a token in its header.**

#### Authentication 

JSON Web Tokens (JWT) for securing the REST APIs and authentication is used.
With every API call, a token in header need to be passed, which is generated using /login api.

Default  password for all users - **password**
Email id is fetched from the /users API. 
Some emails that can be used:

- Sincere@april.biz
- Shanna@melissa.tv
- Nathan@yesenia.net


#### Instructions to run

1. Unzip  backend_challenge folder and navigate to project folder
2. npm install sails -g
3. npm install
4. npm install jsonwebtoken      (optional, incase something wents wrong)
5. npm install xmlhttprequest    (optional, incase something wents wrong)
6. npm install node-localstorage (optional, incase something wents wrong)
7. sails lift

****Every API except /login and /users requires a token in its header.**

#### Instruction to generate Token

API - http://localhost:1337/login
Type - POST
Body (JSON)-
```json
{
     "email": "Shanna@melissa.tv",
     "password": "password"
	
}
```

###### Author

Name - Shubham Narang
Email - sh848786@gmail.com
