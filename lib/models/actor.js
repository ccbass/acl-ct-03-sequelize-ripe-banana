const { DataTypes, Model } = require('sequelize');
const db = require('../../sql/sequelize.js');

class Actor extends Model {}

Actor.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
    },
    pob: {
      type: DataTypes.STRING,
      
    },
  }, { sequelize: db, tableName: 'actors', timestamps: false }
);

module.exports = Actor;
