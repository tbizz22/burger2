// burger DB Model 

module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 140]                
            }
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: true,        
    });
    return Burger;
};