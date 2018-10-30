const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes
const jwt = require('jsonwebtoken');
const { env } = require('../../../properties')
module.exports = (db) => {
   const  User = db.define('users', {
        username:{
            type:DT.STRING(100),
            unique:true,
            allowNull:false
        },
        email:{
            type:DT.STRING(100),
            unique:true,
            allowNull:false
        },
        bio:{
            type:DT.STRING(1000),
            defaultValue:""
        },
        image:{
            type:DT.STRING(1000),
            defaultValue:""
        },
        hash:{
            type:DT.STRING(1000)
        },
        salt:{
            type:DT.STRING(1000)
        },
    })
    User.prototype.getToken=function(){
        return jwt.sign({email : this.email,username: this.username},env.jwtTokenKey);
    }
    User.prototype.toAuthFor=function(){
        console.log(this);
        return{
            username:this.username,
            email:this.email,
            bio:this.bio,
            image:this.image,
            Token:this.getToken()
        }
    }
  
    return User;
}

