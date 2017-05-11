var db = require('../db_config.js');

exports.list = (callback) => {
    db.User.find({}, (error, users) => {
        error ? callback({ 'error': 'Não foi possível retornar os usuários'}) : callback(users)
    });
};
exports.user = (id, callback) => {
    db.User.findById(id, (error, user) => {
        error ? callback({ 'error': 'Não foi possível retornar o usuário'}) : callback(user)
    });
};
exports.save = (fullName, email, password, callback) => {
      new db.User({
        'fullName': fullName,
        'email': email,
        'password': password,
        'created_at': new Date()
    }).save((error, user) => {
        error? callback({ 'error': 'Não foi possível salvar o usuário'}) : callback(user)
    });
};
exports.update = (id, fullName, email, password, callback) => {
    db.User.findById(id, (error, user) => {
        fullName ? user.fullName = fullName : null;
        email ? user.email = email : null;
        password ? user.password = password : null;

         user.save((error, user) => {
            error? callback({ 'error': 'Não foi possível atualizar o usuário'}) : callback(user)
        });
    });
};
exports.delete = (id, callback) => {
    db.User.findById(id, (error, user) => {
        error ? callback({ 'error': 'Não foi possível deletar o usuário'}) : user.remove((error) => {
            !error ? callback({'response': 'Usuário removido com sucesso!'}) : console.log(error)
        });
    });
};


