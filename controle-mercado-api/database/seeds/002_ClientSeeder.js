'use strict'

class ClientSeeder {
  async run () {
    await use('Database').table('clients').insert([
      { cpf: 1234567890, nome: 'Ash Ketchum' },
      { cpf: 2345678901, nome: 'Misty Waterflower' },
      { cpf: 3456789012, nome: 'Brock Harrison' }
    ])
  }
}

module.exports = ClientSeeder
