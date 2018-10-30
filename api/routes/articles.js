const { Router } = require('express')
const { Op } = require('sequelize')
const { Article} = require('../db/index')
const route = Router()
//const { slug } = require('slug');

/*define various api for article  here
 
*/
route.get('/', async (req, res) => {
   // res.status(200).json("articles");
    const article = await Article.findAll(
        //include: [Tags],
    )
      res.status(200).json(article);
    });

route.post('/',async (req,res)=>{
    var slugkey = slugify(req.body.article.title);
    const newArticle = await Article.create({
        slug:slugkey,
        body: req.body.article.body,
        title: req.body.article.title,
        description: req.body.article.description,
    })
    newArticle.abc();
    res.status(200).json({create:{msg:"created"}});
})  

slugify = function(title) {
    return title + '-' + (Math.random() * Math.pow(36, 6) | 0).toString(36);
};



module.exports = route