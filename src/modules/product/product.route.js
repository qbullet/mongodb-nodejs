import express from 'express'
import ProductController from './controllers/product.controller.js'

const router = express.Router()

router.post('', ProductController.createProduct)
router.get('/', ProductController.getAllProduct)
router.get('/:ids', ProductController.getProductByIds)
router.patch('/:id', ProductController.editProductById)
router.delete('/:id', ProductController.deleteProductById)

export default router