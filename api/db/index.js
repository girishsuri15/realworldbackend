const { db } = require('./dbconfig')
const sequelize = require('sequelize')

/*Extract all functions defination from the models */
const articleTableCreate = require('./model/article')
const usersTableCreate = require('./model/users')
const tagsTableCreate = require('./model/tags')

/*creating table */
const Article = articleTableCreate(db)
const User = usersTableCreate(db)
const Tags = tagsTableCreate(db)



/*defeing all the realtion among the models */
User.hasMany(Article)
Article.hasMany(Tags)
Tags.belongsTo(Article)


/*-------------------------------------------- */

module.exports = { Article,User,Tags }