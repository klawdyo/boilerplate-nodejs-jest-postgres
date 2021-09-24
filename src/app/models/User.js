const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {

    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,

    //campo virtual não é salvo
    // ele é importante pois o usuário envia o password, que não existe e o sequelize
    // o elimina do objeto para deixar somente os campos existentes. 
    password: DataTypes.VIRTUAL,

  }, {
    hooks: {

      beforeSave: async user => {
        // Recebe a senha no campo password e cria o password_hash
        if (user.password) {
          user.password_hash = await bcrypt.hash(user.password, 8)
        }
      }
    }
  });


  // verifica a senha
  // usa a função pois este checkpassword será chamado a partir de um objeto
  // User. Ex.: user.checkpassword('1234'). Portanto o this conterá uma
  // instância do objeto já com a senha em hash exposta
  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  // Gera o token JWT
  User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET)
  }


  return User;
}
