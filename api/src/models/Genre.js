const { DataTypes } = require('sequelize');
//Exporto la funcion del modelo Genero
module.exports = (sequelize)=>{
    //Aqui defino el modelo 
    //MODELO 2 | Genres 
    //ID. *
    //Nombre. *
    sequelize.define('genre', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};