let express = require('express');
let app = express();
let routes = require('./routes/routes');
let bodyParser = require("body-parser");
let port = process.env.PORT || 8080;
let auth = require('./middlewares/auth');

app.listen(port);
console.log('serveur démarré sur le port ' + port);

//routes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api/edit*', auth.check); //password hash and verification middleware
app.use('/api/delete*', auth.check); //password hash and verification middleware
app.use('/api', routes);
