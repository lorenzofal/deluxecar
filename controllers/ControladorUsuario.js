const path = require('path');
const fs = require('fs');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const {
  check,
  validationResult,
  body
} = require('express-validator');

//Aquí requiero la Base  de Datos.
const db = require('../database/models/');

//Aquí hago la asociación al módelo correspondiente
const User = db.usuario;


const usuariosController = {

    login: function(req,res){
        res.render(path.resolve(__dirname, '../views/usuarios/login'));
    },
    ingresar: (req, res) => {
		
      db.User.findAll()
      .then((users) => {		
        
        let errors = validationResult(req);
        
        let usuarioLogueado;
        
        /*-----Ver si esta registrado o no-------*/
        usuarioLogueado = users.filter(function (user) {
          return user.email == req.body.email && 
          bcrypt.compareSync(req.body.password, user.password)
        });
        
        
        if (usuarioLogueado == "" ) {
          res.render(path.resolve(__dirname, '../views/usuarios/login'),{ errors: [{ msg: "datos invalidos" }] });
          
        } else {
          //guardar en  SESSION al usuario logueado
          req.session.usuario = usuarioLogueado[0];
          
        }
        if(req.body.recordarme){
          res.cookie('email',usuarioLogueado[0].email,{maxAge: 1000 * 60 * 60 * 24})
        }
        return res.redirect('/');   //Usuario va al home

      })
    },

    registro: function(req,res){
      

      res.render(path.resolve(__dirname, '../views/users/register'));
    },
    //metodo para guardar usuario q se esta registrando
    create: (req, res) => {
      let errors = validationResult(req);

      if(!errors.isEmpty()) {

        return res.render(path.resolve(__dirname, '../views/users/register'), {
          errors: errors.errors,  old: req.body
        });
      } 
      
      
      //generamos usuario
      // - Hasheamos la contraseña

      let user = {
        firstName:req.body.first_name,
        lastName: req.body.last_name,
        email:req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        imagen: req.file ? req.file.filename : '',
        role: 1
      };

      Usuario
      .create(usuario)
      .then((storedUser) => {
          return  res.redirect('/login');
      })
      .catch(error => console.log(error));
    },

    logout: (req,res) =>{
      req.session.destroy();
      res.cookie('email',null,{maxAge: -1});
      res.redirect('/')
    }

}
module.exports = usuariosController;
