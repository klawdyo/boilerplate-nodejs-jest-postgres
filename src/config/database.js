// --
// --BASE: db_rocketseat_tdd
// --USER: u_rocketseat_tdd
// --PASS: 1234567890
// --
module.exports = {
  "username": "u_rocketseat_tdd",
  "password": '1234567890',
  "database": "db_rocketseat_tdd",
  "host": "127.0.0.1",
  "dialect": "postgres",
  operatorsAliases: false, // desabilita alguns warnings do sequelize
  logging: false, // diminui os logs durante as migrations
  define: {
    timestamps: true, // cria automaticamente os campos de created_at e updated_at nas tabelas
    underscored: true, // obriga o sequelize a criar as tabelas no formato users_group e não UsersGroup
    underscoredAll: true, // aplica a regra anterior também aos campos da tabela
  }
}
