import { Router } from 'express'
import { createdUserController, deletedUserController, listUsersController, sessionUserController, updatedUserController } from '../../controllers/user.controllers'
import verifyIsAdmMiddleware from '../../middleware/verifyIsAdm.middleware'
import verifyTokenMiddleware from '../../middleware/verifyToken.middleware'
import { validateUserUpdateMiddleware } from '../../middleware/verifyUpdate.middleware'
import verifyUserMiddleware from '../../middleware/verifyUser.middleware'
import {schema} from '../../serializers/schema.serializer'

const routes = Router()

export const userRoutes = () => {


    routes.post('/users', createdUserController)
    routes.post('/login', sessionUserController)
    routes.get('/users', verifyTokenMiddleware, verifyIsAdmMiddleware, listUsersController)
    routes.patch('/users/:id', verifyTokenMiddleware, verifyUserMiddleware, validateUserUpdateMiddleware(schema), updatedUserController)
    routes.delete('/users/:id', verifyTokenMiddleware, verifyIsAdmMiddleware, deletedUserController)

    return routes
}
