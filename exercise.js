const moment = require("moment");
const file = require('fs');
const coolImages = require("cool-images");

console.log(coolImages.one());

const pics = coolImages.many(200,200,10);

const date = moment().format("YYYY/MM/DD hh:mm:ss");

file.appendFile('log.txt', date + '\n', function(error, data){
    if(error){
        console.log('imagen no encontrada');
    }
    else{
        console.log('exitoso');
    }
})

pics.forEach(image => {console.log(image);
    file.appendFile('log.txt', image + '\n', function(error, data){
        if(error){
            console.log('imagen no encontrada');
        }
        else{
            console.log('exitoso');
        }
    
        
    })

})











