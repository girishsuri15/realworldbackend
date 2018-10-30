const { Router } = require('express')
const route = Router()
const Sequelize = require('sequelize')
var crypto = require('crypto');
const { User } = require('../../db/index')
const AuthHelper = require('./authhelper')
const  Helper  = require('../../../Helper/converter');
const Op = Sequelize.Op;

route.use('/login',require('./login'))


route.post('/',AuthHelper.valiadteUserData,AuthHelper.checkUserExist,async (req,res)=>{
    console.log("================registartion procedure statred===========");
        const newUser = await User.create({
            username:req.body.user.username,
            email: req.body.user.email,
            hash: req.body.user.password
        })
        console.log(newUser);
        console.log("=============registartion procedure ended========");
        res.status(200).json({user: newUser.toAuthFor()});
        console.log("------------reposnse sended-------------");
  })


  setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  };

module.exports = route
/**
 * function getTokenFromHeader(req){
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
      req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
}
 */
