import { Router } from 'express'
import {createCategoriesController, listCategoriesController, listPropertiesFromCategoryController} from '../../controllers/categories.controllers'
import verifyIsAdmMiddleware from '../../middleware/verifyIsAdm.middleware'
import verifyTokenMiddleware from '../../middleware/verifyToken.middleware'

const routes = Router()

export const categoriesRoutes = () => {

    routes.post('/categories', verifyTokenMiddleware, verifyIsAdmMiddleware, createCategoriesController)
    routes.get('/categories', listCategoriesController)
    routes.get('/categories/:id/properties', listPropertiesFromCategoryController)
    return routes
}
