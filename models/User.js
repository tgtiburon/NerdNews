const { Model, DataTypes }  = require('sequelize');
const sequelize = require('../config/connection');
// Load the password  hash bcrypt
const bcrypt = require('bcrypt');


// create our user model
class User extends Model{
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}


// define table columns and config
User.init(
    {
        // Table Column definitions go here
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type:DataTypes.STRING,
            allowNull: false,
            validate: {
                // TODO: change this to more
                len:[5]
            }
        }
    },
    {

        hooks: {
            // Lets use async and await instead
            // Setup beforeCreate lifecycle 'hook' functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            // setup beforeUpdate lifecycle 'hook' functionality
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        //Table configuration options go here
        // pass in our imported sequelize connection (the direction connection to our database )
        sequelize,
        // don't automatically create createdAt/updatedAt time stamps
        timestamps: false,
        //  don't pluralize the name
        freezeTableName: true,
        // user underscores
        underscored: true, 
        // make it so our model name stays lowercase in the db
        modelName: 'user'
    }

);

module.exports = User;