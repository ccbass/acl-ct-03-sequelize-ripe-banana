const { DataTypes, Model } = require('sequelize');
const db = require('../../sql/sequelize.js');

class Film extends Model {} 

Film.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    released: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize: db,
    timestamps: false,
    tableName: 'films'
  }
);


module.exports = Film;
