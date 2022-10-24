import { Router } from 'express'
import { createPropertiesController, listPropertiesController } from '../../controllers/properties.controllers'
import verifyIsAddressMiddleware from '../../middleware/verifyIsAddress.middleware'
import verifyIsAdmMiddleware from '../../middleware/verifyIsAdm.middleware'
import verifyTokenMiddleware from '../../middleware/verifyToken.middleware'

const routes = Router()

export const propertiesRoutes = () => {

    routes.post('/properties', verifyTokenMiddleware, verifyIsAdmMiddleware, verifyIsAddressMiddleware, createPropertiesController)
    routes.get('/properties', listPropertiesController)
    return routes
}