//controle de rotas

module.exports = app => { 

    app.get('/', (req, res) => res.send('Você está na rota de '))

    app.post('/clientes', (req, res) => {
        console.log(req.body)
        res.send('POST')
    })
}