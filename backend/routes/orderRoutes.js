import express from 'express'
const orderRoute = express.Router()
import { addOrderItems, getOrderById, updateOrderToPaid } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

orderRoute.route('/').post(protect, addOrderItems)
orderRoute.route('/:id').get(protect, getOrderById)
orderRoute.route('/:id/pay').put(protect, updateOrderToPaid)

export default orderRoute