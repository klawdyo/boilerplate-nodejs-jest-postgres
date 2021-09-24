const { sequelize } = require('../../src/app/models')

module.exports = () => {
  return Promise.all(
    Object.keys(sequelize.models).map(key => {
      return sequelize.models[key].destroy({
        truncate: true, // Força que as tabelas sejam truncadas
        force: true     // pelo sequelize
      })
    })
  )
}
