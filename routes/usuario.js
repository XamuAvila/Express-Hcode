const express = require('express');
const router = express.Router();

function logReq(req, res, next){
    console.log('executando a fnct midd para a rota usuarios');
    return next();
}
router.get('/',logReq,  (req, res) => {
    res.send('Listando os usuarios')
})

router.get('/:id', (req, res) => {
    //res.statusCode = 200
    res.send(`Usuario request com id: ${req.params.id}`)
})

module.exports = router;