
let frases = require('./mod4_quotes_of_the_day')

const quote_of_the_day = () => {
    let index = ((Math.ceil(Math.random()*4))*1).toFixed(0);
    
    let frase = frases[ index ]
    console.log('quote_of_the_day:')
    console.log( frase )
}

module.exports = {
    quote_of_the_day
}