// Define o model utilizado pelos planetas
var mongoose = require('mongoose');


var planetaSchema = mongoose.Schema({

    nome: {
        type: String,
        required: true,
    },
    clima: {
        type: String,
        required: true
    },
    terreno: {
        String,
    },
    quantidade_de_aparicoes: {
        type: String,
        default: 0,
    }
    
});

var Planeta = module.exports = mongoose.model('planeta', planetaSchema);

module.exports.get =  (callback, limit) => {
    Planeta.find(callback).limit(limit);
}