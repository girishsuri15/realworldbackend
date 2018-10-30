const { Router } = require('express')
const { Op } = require('sequelize')
//const { User } = require('../db/index')
const route = Router()


/*define various api for login/auth  here
 
*/
route.get('/', async (req, res) => {
    // const article = await Article.findAll({
       
    // })
    //   res.status(200).json(article);
    });

    
route.post('/',async (req,res)=>{
    
    console.log("push into temp token");
})  




module.exports = route