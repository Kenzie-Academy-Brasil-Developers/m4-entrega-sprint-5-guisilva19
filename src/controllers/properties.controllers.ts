import { Request, Response } from 'express'
import { IPropertyRequest } from '../interfaces/properties'
import { createPropertyService, listPropertiesService } from '../services/properties.services'

const createPropertiesController = async (req: Request, res: Response) => {

    const { value, size, address, categoryId }: IPropertyRequest = req.body
    const newProperty = await createPropertyService({ value, size, address, categoryId })
    return res.status(201).json(newProperty)
}

const listPropertiesController = async (req: Request, res: Response) => {

    const properties = await listPropertiesService()
    return res.json(properties)
}

export { createPropertiesController, listPropertiesController }