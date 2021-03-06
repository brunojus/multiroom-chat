module.exports.iniciaChat = function(application,req,res){
    
    var dadosForm = req.body;

    req.assert('apelido', 'Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 20 caracteres').len(3,20);
    
    var erros = req.validationErrors();
    
    if(erros){
        res.render("index",{validacao:erros})
        return;
    }
    io.emit('msgParaClient')
    res.render("chat");
}