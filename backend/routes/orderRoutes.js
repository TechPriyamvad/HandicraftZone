import express from 'express'
const orderRoute = express.Router()
import { addOrderItems, getOrderById } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

orderRoute.route('/').post(protect, addOrderItems)
orderRoute.route('/:id').get(protect, getOrderById)

export default orderRoute