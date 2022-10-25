import AppDataSource from "../data-source"
import { Categories } from "../entities/categories.entity"
import { Properties } from "../entities/properties.entity"
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

const listPropertiesFromCategoryService = async (id: string) => {

    const propertyRepository = AppDataSource.getRepository(Properties)
    const categoryRepository = AppDataSource.getRepository(Categories)

    const category = await categoryRepository.findOneBy({id})

    if(!category){
        throw new AppError('Not exist category', 404)
    }

    // const properties = await propertyRepository.find()

    // const propertiesFromCategory = properties.filter(property => property.category.id === id)

    // if(propertiesFromCategory.length === 0){
    //     throw new AppError('Not exist property', 404)
    // }
    
    return category
}

export { createCategoriesService, listCategoriesService, listPropertiesFromCategoryService}