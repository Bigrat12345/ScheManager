var path = require('path')

    function router(app) {
        console.log("Route Consolidator Loaded");
        require('./upload/uploadRoutes.js');
        require('./download/downloadRoutes.js')(app);
        require('./bukkit/bukkitRoutes.js');
        
        app.use('/vendor', function(req,res){
            res.sendfile('bower_components' + req.url, { root: path.join(__dirname, '../../src/client/') });
        })
        
        app.get('/error', function(req, res){
            res.sendfile('error.html', { root: path.join(__dirname, '../../src/client/') });
        });
        
        app.use('/', function(req,res, next){
            res.sendfile('index.html', { root: path.join(__dirname, '../../src/client/') });
        });
                
        
        
    }
    module.exports = router;