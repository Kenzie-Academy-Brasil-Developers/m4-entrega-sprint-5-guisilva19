import AppDataSource from "../data-source"
import { Categories } from "../entities/categories.entity"
import { AppError } from "../errors/AppError"

const createCategoriesService = async (name: string) => {

    const categoryRepository = AppDataSource.getRepository(Categories)

    const categories = await categoryRepository.find()

    const categoryExist = categories.find(category => category.name === name)

    if (categoryExist) throw new AppError('Category Exist', 400)

    const newCategory = categoryRepository.create({ name })

    await categoryRepository.save(newCategory)

    return newCategory

}

const listCategoriesService = async () => {

    const categoryRepository = AppDataSource.getRepository(Categories)
    const categories = await categoryRepository.find()

    return categories

}

export { createCategoriesService, listCategoriesService }