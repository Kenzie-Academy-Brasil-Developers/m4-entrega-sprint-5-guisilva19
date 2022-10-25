import { Request, Response } from "express"
import {createCategoriesService, listCategoriesService, listPropertiesFromCategoryService } from "../services/categories.services"


const createCategoriesController = async (req: Request, res: Response) => {

    const { name } = req.body
    const categoty = await createCategoriesService(name)
    return res.status(201).json(categoty)
}

const listCategoriesController = async (req: Request, res: Response) => {
    const categories = await listCategoriesService()
    return res.json(categories)
}

const listPropertiesFromCategoryController = async (req: Request, res: Response) => {

    const { id } = req.params
    const propertiesFromCategory = await listPropertiesFromCategoryService(id)
    return res.json(propertiesFromCategory)

}

export { createCategoriesController, listCategoriesController, listPropertiesFromCategoryController }