const { Router } = require('express')
const { Op } = require('sequelize')
const route = Router()
const { Article, Tags } = require('../db/index')

/*define various api for tags  here
 
*/
module.exports = route