Planeta = require('../models/planetaModel');
const https = require('https');


// Consome a API Swapi
var swapi =  (url) => {
    
    return new Promise( (resolve, reject) => {

        https.get(url,  (resp) => {

            var dados = '';

            resp.on('data',  (par) => {
                dados += par;

            });

            resp.on('end', () => {

                var resultado = JSON.parse(dados)['results'][0];
                resolve(resultado)

            });

        }).on('Error', (err) => {

            reject(err)

        });
    });

}


// Retorna lista de planetas
exports.index =  (req, res) => {

    Planeta.get( (err, planetas) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "Sucesso",
            message: "A lista de planetas foi carregada.",
            data: planetas
        });
    });
};

// Cria um novo planeta e consome a API swapi 
// Busca a parte de aparições da API swapi
// Retorna o tamanho de aparições
exports.new =  (req, res) => {

    const nomeplaneta = req['body']['nome'];

    if (nomeplaneta) {

        swapi('https://swapi.co/api/planets/?search=' + nomeplaneta).then( (result) => {
            if (result !== undefined) {
                req.body['quantidade_de_aparicoes'] = result['films'].length;
            }

            var novo_planeta = new Planeta(req.body);

            novo_planeta.save( (err, planeta) => {
                if (err)
                    res.send(err);
                    res.json(planeta);
            });
        })

    } else {
        res.json({message: 'O nome do planeta deve ser digitado.'});
    }
};


// Localiza o planeta pelo ID
exports.view =  (req, res) => {

    Planeta.findById(req.params.planeta_id,  (err, planeta) => {
        if (err)
            res.send(err);
        res.json({
            message: 'Carregando detalhes do planeta solicitado.',
            data: planeta
        });
    });
};


// Deleta o planeta pelo ID
exports.delete =  (req, res)  => {

    Planeta.remove({
        _id: req.params.planeta_id
    },  (err, planeta)  => {
        if (err)
            res.send(err);
res.json({
            status: "Sucesso",
            message: 'Planeta deletado do banco de dados.'
        });
    });
};

// Localiza o planeta pelo nome
exports.v =  (req, res) => {
    
    Planeta.findOne({
        nome: req.params.nome
      }, (err, planeta) => {
    
        if (err) {
          return res.send(err);
        }
    
        res.json({
            message: 'Carregando detalhes do planeta solicitado.',
            data: planeta
        });
    
      });
    };
    
