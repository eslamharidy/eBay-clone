const Sequelize = require('sequelize')
const db = require('../db')

//Declare an Adv model with 6 string fields:

const Adv = db.define('event',{
    title:Sequelize.STRING,
    description:Sequelize.STRING,
    picture:Sequelize.STRING,
    price:Sequelize.STRING,
    email:Sequelize.STRING,
    phone:Sequelize.STRING,
})


module.exports= Adv