import express from 'express'
const orderRoute = express.Router()
import { addOrderItems } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

orderRoute.route('/').post(protect, addOrderItems)

export default orderRoute