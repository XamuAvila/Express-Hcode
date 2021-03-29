const express = require('express')
const app = express()
const adminRoutes = require('./routes/admin')
const usuarioRoutes = require('./routes/usuario')
const cookieParser = require('cookie-parser');
const { use } = require('./routes/admin');
app.use(express.json()); //função de middleware
app.use((req, res, next) => {
    console.log('executando middleware em nível de aplicação')
    return next();
})
app.use(cookieParser());
app.use(express.static('public'));

//criar a rota padrao
app.get('/', (req, res) => {
    //res.statusCode = 200
    res.send('Home!')
})

app.use('/admin', adminRoutes);
app.use('/usuarios', usuarioRoutes);

app.get("*", (req, res, next)=>{
    setImmediate(()=>{
        next(new Error("Houston, we have a problem"));
    })
})

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).json({message:err.message});
})


app.get('/setcookie', (req, res)=>{
    res.cookie('user', 'Samuel Avila', {maxAge:900000, httpOnly:true});
    return res.send('cookie foi gravado com sucesso');
})

app.get('/getcookie', (req, res)=>{
    let user = req.cookies['user'];
    if(user){
        return res.send(user);
    }
})

app.listen(3000, () => {
    console.log('Server running: http://localhost:3000')
})
