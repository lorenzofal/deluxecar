module.exports = (sequelize, dataTypes ) => {

    let alias = 'Usuario';
    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            unsigned: true,
            type: dataTypes.INTEGER


        },

        nombre:{
            type: dataTypes.STRING,

        },
        Email : {
            type: dataTypes.STRING,
        },
        Password: {
            type: dataTypes.STRING,
        },
        Telefono:{
            type: dataTypes.STRING,
        }
    };  
    let config = {
        tableName: "Usuarios",
        timestamps: false,
        underscored: true   
    }
    const Usuario = sequelize.define(alias,cols,config)
    
    return Usuario;
};