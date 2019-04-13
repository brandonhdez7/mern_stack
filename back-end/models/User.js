const Sequelize = require('sequelize')
const db = require("../db")

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
          },
        email: {
            type: Sequelize.STRING
          },
        password: {
        type: Sequelize.STRING
        },
        created: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
        },
        imageProfile: {
            type: Sequelize.STRING
          },
    },
    {
        timestamps: false
    }
)
    