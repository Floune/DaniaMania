let express = require('express');
let app = express();
let routes = require('./routes/routes');
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

app.listen(port);
console.log('serveur démarré sur le port ' + port);

//routes
app.use('/api', routes);
