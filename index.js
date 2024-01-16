const express = require('express')

const app = express();

let PORT=5000;

app.get('/',(req,res)=>{
    res.redirect('/98');
    // res.send('99 Bottles of beer on the wall')
})

app.get('/:bottles',(req,res)=>{
    res.send(`<a  href=${req.params.bottles-1}>${req.params.bottles}  </a>  Bottles of beer on the wall. Take one down, pass it around!  `)
    

    const bottleAmount = parseInt(req.params.bottles);

    if (bottleAmount === 0) {
        res.send(`<a  href=${req.params.bottles-1}>${req.params.bottles}  </a>  No more bottles of beer on the wall. Start Over?  `)
        // res.send(` Bottles of beer on the wall. Start Over? <a href="/">Start Over</a>`)

     } 
     
    //  else if (bottleAmount < 0 ) {
        
    //     res.send(` Bottles of beer on the wall. ${linkText}: <a href="/>${bottleAmount}</a> `);
    // };

    
})

app.listen(PORT, () => {
    console.log('Listening on port ' + PORT)
})

