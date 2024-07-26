'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class UserController {
  async signup ({ request, response }) {
    const { email, password } = request.only(['email', 'password'])
    const existingUser = await User.findBy('email', email)
    if (existingUser) {
      return response.status(400).json({ message: 'Email já está em uso' })
    }
  
    // Hash da senha
    const hashedPassword = await Hash.make(password)
  
    const user = await User.create({
      email,
      password: hashedPassword
    })
  
    return response.status(201).json(user)
  }

  async login ({ request, auth, response }) {
    const { email, password } = request.only(['email', 'password'])
    try {
      const token = await auth.attempt(email, password)
      return response.json(token)
    } catch (e) {
      return response.status(401).json({ message: 'Email ou Senha errado!'})
    }
  }
}

module.exports = UserController
