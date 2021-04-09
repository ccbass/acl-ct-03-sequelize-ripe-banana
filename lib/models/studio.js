const { DataTypes, Model } = require('sequelize');
const db = require('../../sql/sequelize.js');


class Studio extends Model { }

Studio.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
      
    },
    country: {
        type: DataTypes.STRING,
        
      },
  }, { sequelize: db, tableName: 'studios',  timestamps: false }
);

module.exports = Studio;