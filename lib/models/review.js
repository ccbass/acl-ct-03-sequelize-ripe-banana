const { DataTypes, Model } = require('sequelize');
const db = require('../../sql/sequelize.js');

class Review extends Model { }

Review.init(
  {
    rating: {
      type: DataTypes.NUMBER,
      validate: {
        min: 1,
        max: 5,
      },
      allowNull: false
    },
    reviewer: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    review: {
      type: DataTypes.STRING(140),
      allowNull: false 
    },
    film: {
        type: DataTypes.BIGINT,
        allowNull: false 
        
      },
  }, { sequelize: db, tableName: 'reviews',  timestamps: false }
);

module.exports = Review;