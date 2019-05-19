
    // Imports user module mod4-quote_of_the_day.js
let my_mod = require('./mod4_quote_of_the_day')

let fs = require("fs");   // Imports file system module

console.log();
my_mod.quote_of_the_day();

let delay = ((Math.ceil(Math.random()*5))*1000).toFixed(0);
setTimeout(reflexes, delay);


function reflexes() {
    // ... include code here
    console.log('')

    let inicio = new Date().getTime()
    obtenTiempo( inicio )

    console.log('Press  return:')
};

const obtenTiempo = inicio => {

    process.stdin.setEncoding('utf-8')

    process.stdin.on('data', function( line ){
        let time = new Date().getTime() - inicio
        console.log('Your time is: '+time+'ms')
        
        process.exit()
    })
}





