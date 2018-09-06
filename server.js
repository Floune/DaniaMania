let express = require('express');
let app = express();
let routes = require('./routes/routes');
let bodyParser = require("body-parser");
let port = process.env.PORT || 8080;
let auth = require('./middlewares/auth');

app.listen(port);						//serveur
console.log('serveur démarré sur le port ' + port);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());				//Middlewares
app.use('/api/edit*', auth.check); 		//hash verification
app.use('/api/setpwd*', auth.setpwd);	//hash creation
app.use('/api/delete*', auth.check); 	//hash verification

app.use('/api', routes);				//routes
