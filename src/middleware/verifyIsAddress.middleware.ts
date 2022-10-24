import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors/AppError"
import { propertySchema } from "../serializers/schema.serializer"

const verifyIsAddressMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const {value,address, size, categoryId} = req.body
        const property = {value,address, size, categoryId}
        await propertySchema.validate(property, {
            stripUnknown: true
        })

        return next()
    } catch (error) {

        throw new AppError('Address invalid')
    }

}

export default verifyIsAddressMiddleware