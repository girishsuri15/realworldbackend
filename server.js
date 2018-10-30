const express = require('express')
const {
  db
} = require('./api/db/dbconfig')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

var myLogger = function (req, res, next) {
  console.log('server sync');
  if(req.hasOwnProperty('originalUrl')){
  console.log("resource request for client===== "+req.originalUrl);
  }
  next()
}

app.use(myLogger)
/* define entry point for every api availabe*/ 
app.use('/api',require('./api/index.js'))
/*-------------------------------------------- */

db.sync({force: true})
  .then(() => {
    console.log('Database synced')
    app.listen(3939, () => {
      console.log('Server started http://localhost:3939')
    })
  })
  .catch(console.error)

  app.get('/',async (req,res)=>{
        res.status(200).json({error:{message:"include api to acess the api content"}})
  })