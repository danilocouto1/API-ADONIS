'use strict'

const Product = use('App/Models/Product')

class ProductController {
  async index ({ response }) {
    const products = await Product.query().orderBy('name').fetch()
    return response.json(products)
  }

  async show ({ params, response }) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.status(404).json({ message: 'Product not found' })
    }

    return response.json(product)
  }

  async store ({ request, response }) {
    const data = request.only(['name', 'description', 'price', 'stock_quantity', 'type'])
    const product = await Product.create(data)
    return response.status(201).json(product)
  }

  async update ({ params, request, response }) {
    const data = request.only(['name', 'description', 'price', 'stock_quantity', 'type'])
    const product = await Product.find(params.id)

    if (!product) {
      return response.status(404).json({ message: 'Product not found' })
    }

    product.merge(data)
    await product.save()
    return response.json(product)
  }

  async delete ({ params, response }) {
    const product = await Product.find(params.id)

    if (!product) {
      return response.status(404).json({ message: 'Product not found' })
    }

    product.deleted_at = new Date()
    await product.save()
    return response.status(204).json(null)
  }
}

module.exports = ProductController
