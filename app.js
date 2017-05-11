var app = require('./app_config.js');
var userController = require('./controller/userController.js');
var validator = require('validator');




app.get('/', (req, res)=>{
    res.end('Servidor ON!');
    console.log('Servidor Ouvindo na porta 5000');
});

app.get('/users', (req, res) => {
    userController.list(resp => {
        res.json(resp);
    });
});

app.get('/users/:id', (req, res) => {
    var id = validator.trim(validator.escape(req.param('id')));
    userController.user(id, resp => {
        res.json(resp);
    })
});

app.post('/users', (req, res) => {

    var fullName = validator.trim(validator.escape(req.param('fullname')));
    var email = validator.trim(validator.escape(req.param('email')));
    var password = validator.trim(validator.escape(req.param('password')));

    userController.save(fullName, email, password, resp => {
        res.json(resp);
    })

});

app.put('/users', (req, res) => {

    var id = validator.trim(validator.escape(req.param('id')));
    var fullName = validator.trim(validator.escape(req.param('fullname')));
    var email = validator.trim(validator.escape(req.param('email')));
    var password = validator.trim(validator.escape(req.param('password')));

    userController.update(id, fullName, email, password, resp => {
        res.json(resp);
    });
});

app.delete('/users/:id', (req, res) => {
    var id = validator.trim(validator.escape(req.param('id')));
    
    userController.delete(id, resp => {
        res.json(resp);
    });
});