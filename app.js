const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const usuarioRoutes = require('./routes/usuario')
app.use(express.json()); //função de middleware
app.use((req, res, next) => {
    console.log('executando middleware em nível de aplicação')
    return next();
})


//criar a rota padrao
app.get('/', (req, res) => {
    //res.statusCode = 200
    res.send('Home!')
})

app.use('/admin', adminRoutes);
app.use('/usuarios', usuarioRoutes);

app.listen(3000, () => {
    console.log('Server running: http://localhost:3000')
})
