let express = require('express');
let app = express();
let routes = require('./routes/routes');
let bodyParser = require("body-parser");
let auth = require('./middlewares/auth');
let path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'app/dist')));	//Middlewares
app.use('/api/post/edit*', auth.check); 			//hash verification
app.use('/api/post/setpwd*', auth.setpwd);		//hash creation
app.use('/api/post/delete*', auth.check); 		//hash verification
app.use('/api', routes);					//routes

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'app/dist/index.html'));
});

app.listen(port, () => console.log(`API running on localhost:${port}`));	//serveur
