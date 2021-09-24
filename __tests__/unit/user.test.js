// Model de usuários
// const { User } = require('../../src/app/models');

// Factory
const factory = require('../factories')


const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate')

describe('User', () => {

  beforeEach(async () => {
    await truncate()
  })


  it('should encypt user password ', async () => {
    const user = await factory.create('User', {
      password: '1234567890'
    })

    const hash = await bcrypt.hash('1234567890', 8)
    const compareHash = await bcrypt.compare('1234567890', user.password_hash);
    expect(compareHash).toBe(true)
  })

})
