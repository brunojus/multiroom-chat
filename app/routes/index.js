module.exports = function(application){
    application.post('/chat',function(req,res){
        res.render("chat");
    });

    application.get('/',function(req,res){
        res.render("index");
    });

    application.get('/chat',function(req,res){
        res.render("chat");
    });
}