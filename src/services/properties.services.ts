import AppDataSource from "../data-source"
import { Addresses } from "../entities/addresses.entity"
import { Categories } from "../entities/categories.entity"
import { Properties } from "../entities/properties.entity"
import { AppError } from "../errors/AppError"
import { IPropertyRequest } from "../interfaces/properties"



const createPropertyService = async ({ value, size, address, categoryId }: IPropertyRequest) => {

    const propertyRepository = AppDataSource.getRepository(Properties)

    const addressRepository = AppDataSource.getRepository(Addresses)

    const categoryRepository = AppDataSource.getRepository(Categories)

    const zipCodeExist = await addressRepository.findOneBy({
        zipCode: address.zipCode
    })

    if(zipCodeExist){
        const numberExist = await addressRepository.findOneBy({
            number: address.number
        })

        if(numberExist){
            throw new AppError('Address exist')
        }
    }

    const newAddress = addressRepository.create(address)
    await addressRepository.save(newAddress)

    const category = await categoryRepository.findOneBy({
        id: categoryId
    })

    if (!category) {
        throw new AppError('category not exist', 404)
    }
    const newProperty = propertyRepository.create({ value, address: newAddress, size, category })
    await propertyRepository.save(newProperty)
    return newProperty

}

const listPropertiesService = async () => {

    const propertyRepository = AppDataSource.getRepository(Properties)

    const properties = await propertyRepository.find()

    return properties
}

export { createPropertyService, listPropertiesService }