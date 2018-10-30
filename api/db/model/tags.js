const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes
module.exports = (db) => {
   let tags = db.define('tags', {
            tagid:{
                    type :DT.INTEGER
            },
            tag_Name:{
                type:DT.STRING(100),
                unique: true
            }
    })
    return tags;
}