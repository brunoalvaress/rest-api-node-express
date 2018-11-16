//Define as rotas
let router = require('express').Router();


var planetaController = require('../controllers/planetaController');


router.route('/planetas')
    .get(planetaController.index);
    
router.route('/planetas/adicionar')
    .post(planetaController.new);

router.route('/planetas/id/:planeta_id')
    .get(planetaController.view);

router.route('/planetas/id/deletar/:planeta_id')
    .delete(planetaController.delete);

router.route('/planetas/nome/:nome')
    .get(planetaController.v);


module.exports = router;