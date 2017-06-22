module.exports.formulario_inclusao_noticia = function(app, req, res){
     res.render("admin/form_add_noticia", {errors: [], noticia: {}});
};

module.exports.noticias_salvar = function(app, req, res){
    var noticia = req.body;
        req.assert('titulo', 'Informe o Título').notEmpty();
        req.assert('resumo', 'Informe o Resumo').notEmpty();
        req.assert('resumo', 'O resumo deve ter no máximo 100 caracteres').len(10, 100);
        req.assert('autor', 'Informe o nome do Autor').notEmpty();
        req.assert('data_criacao', 'Informe a data').notEmpty().isDate('YYYY-MM-DD');
        req.assert('noticia', 'Informe a Notícia').notEmpty();

        req.getValidationResult().then(function(result){
            if(result.isEmpty()){
            var connection = app.config.dbConnection();
            var noticiasModel = new app.app.models.NoticiasDAO(connection);
            
            noticiasModel.salvarNoticia(noticia, function(error, result){
                res.redirect("/noticias");
            });
        }else{
            var errors = result.array();
            res.render("admin/form_add_noticia", {errors: errors, noticia: noticia});
        }
        });
};