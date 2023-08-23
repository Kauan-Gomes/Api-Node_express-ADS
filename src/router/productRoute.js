import express from 'express'
import getProduct from '../controllers/Product/getProduct.js'
import listProduct from '../controllers/Product/listProduct.js'
import createProduct from '../controllers/Product/createProduct.js'
import updateProduct from '../controllers/Product/updateProduct.js'
import deleteProduct from '../controllers/Product/deleteProduct.js'

const router = express.Router()

router.get('/', getProduct)
router.get('/list', listProduct)
router.post('/', createProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)

export default router