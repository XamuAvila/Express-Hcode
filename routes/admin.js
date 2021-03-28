const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Admin')
})

router.get('/:id', (req, res) => {
    //res.statusCode = 200
    res.send(`Admin request com id: ${req.params.id}`)
})

router.post('/', (req, res) => {
    //res.statusCode = 200
    const corpo = `
    Login: ${req.body.login} 
    Senha:${req.body.senha}`
    res.send('Acessando admin via post' + corpo)
})

router.patch('/:id', (req, res) => {
    res.send('Acessando a administrção via PATH id:' + req.params.id)
})
router.put('/:id', (req, res) => {
    res.send('Acessando a administrção via PUT id:' + req.params.id)
})
router.delete('/:id', (req, res) => {
    res.send('Acessando a administrção via DELETE id:' + req.params.id)
})

module.exports = router;