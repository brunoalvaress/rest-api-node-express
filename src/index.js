// Chama as dependências
let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let app = express();
let apiRoutes = require("./routes/apiRoutes")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Conecta ao banco
mongoose.connect('mongodb://localhost/b2wbruno');
var db = mongoose.connection;


app.get('/', (req, res) => res.send('TESTE B2W DIGITAL - BRUNO ALVARES DE MIRANDA'));

app.use('/b2w', apiRoutes)

// Define a porta do servidor
app.listen(3000);