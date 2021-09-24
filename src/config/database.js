

require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

// --
// --BASE: db_test_tdd
// --USER: u_test_tdd
// --PASS: 1234567890
// --
module.exports = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  dialect: process.env.DB_DIALECT || "postgres",
  storage: './__tests__/database.sqlite', // usa a raiz do projeto como padrão

  operatorsAliases: false, // desabilita alguns warnings do sequelize
  logging: false, // diminui os logs durante as migrations
  define: {
    timestamps: true, // cria automaticamente os campos de created_at e updated_at nas tabelas
    underscored: true, // obriga o sequelize a criar as tabelas no formato users_group e não UsersGroup
    underscoredAll: true, // aplica a regra anterior também aos campos da tabela
  }
}
