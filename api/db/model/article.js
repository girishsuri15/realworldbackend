const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes
module.exports = (db) => {
   let article = db.define('article', {
        slug: {
            type:DT.STRING(100),
            allowNull : false,
            unique:true,
        },
        title:  {
            type:DT.STRING(100),
            allowNull:false
        },
        "description":  {
            type:DT.STRING(100),
            allowNull:false
        },
        "body":  {
            type:DT.STRING(100),
            allowNull:false
        },
        "favoritesCount":  {
            type: DT.INTEGER,
        defaultValue: 0,
        }
    })
    article.prototype.abc=()=>{
        console.log("girish suri abc");
    }
return article;
}    
    
