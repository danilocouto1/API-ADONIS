'use strict'

const Hash = use('Hash')

class UserSeeder {
  async run () {
    await use('Database').table('users').insert([
      {
        email: 'misty.psyduck@example.com',
        password: await Hash.make('password123'),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        email: 'ash.pikachu@example.com',
        password: await Hash.make('password456'),
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  }
}

module.exports = UserSeeder
