var db_string = 'mongodb://127.0.0.1/nodeapi_restful';
var mongoose =  require('mongoose').connect(db_string);
var db = mongoose.connection;

var User;

db.on('error', console.error.bind(console, 'Erro ao conectar o banco'));
db.once('open', ()=>{
    var userSchema = mongoose.Schema({
        fullName: String,
        email: String,
        password: String,
        created_at: Date
    });

    exports.User = mongoose.model('User', userSchema);
});
