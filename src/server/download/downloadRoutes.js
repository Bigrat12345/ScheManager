var path = require('path')

function downloadRoutes(app) {

console.log("DOWNLOAD ROUTES LOADED")


var mockSchems = [
    {
        name: 'myCoolSchem.schematic',
        ref: '12345',
        downloaded: false
    },
     {
        name: 'anotherCoolSchem.schematic',
        ref: 'abcd',
        downloaded: false
    }
    ]
    
    var Schematic_Path = '/apps/ScheManager/schematics/';

    var matchRef = function(ref){
        for(var i = 0; i < mockSchems.length; i++){
            if(mockSchems[i].ref == ref) return i;
        }
    }


    //////////////
    
    
app.get('/dl/:id', function(req, res){
    
            res.sendfile('dl.html', { root: path.join(__dirname, '../../client/') });
    //Database get schem entry by id. Return file.
});

app.get('/dl/:id/confirm', function(req, res){
   
   console.log("Getting file for " + req.params.id);
    var reference = req.params.id;
    
    var index = matchRef(reference);
    
    var schem = mockSchems[index];
    
    
    var file = Schematic_Path + schem.name;
   
   res.download(file)
           mockSchems[index].downloaded = true;
});

}

module.exports = downloadRoutes;