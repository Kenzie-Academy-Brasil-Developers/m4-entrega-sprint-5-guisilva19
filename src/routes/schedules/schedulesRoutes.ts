import { Router } from 'express'
import { createSchedulesController, listSchedulesFromPropertyController } from '../../controllers/schedules.controllers'
import verifyIsAdmMiddleware from '../../middleware/verifyIsAdm.middleware'
import verifyTokenMiddleware from '../../middleware/verifyToken.middleware'

const routes = Router()

export const schedulesRoutes = () => {

    routes.post('/schedules', verifyTokenMiddleware, createSchedulesController)
    routes.get('/schedules/properties/:id', verifyTokenMiddleware, verifyIsAdmMiddleware, listSchedulesFromPropertyController)
    return routes
}