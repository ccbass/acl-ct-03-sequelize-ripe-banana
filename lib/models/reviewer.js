const { DataTypes, Model } = require('sequelize');
const db = require('../../sql/sequelize.js');


class Reviewer extends Model { }

Reviewer.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
        company: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, { sequelize: db, tableName: 'reviewers',  timestamps: false }
);

module.exports = Reviewer;