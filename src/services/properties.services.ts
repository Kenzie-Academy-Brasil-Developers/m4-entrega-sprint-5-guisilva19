import AppDataSource from "../data-source"
import { Addresses } from "../entities/addresses.entity"
import { Properties } from "../entities/properties.entity"
import { AppError } from "../errors/AppError"
import { IPropertyRequest } from "../interfaces/properties"



const createPropertyService = async ({ value, size, address, categoryId }: IPropertyRequest) => {

    const propertyRepository = AppDataSource.getRepository(Properties)

    const addressRepository = AppDataSource.getRepository(Addresses)

    const newAddress = addressRepository.create(address)
    await addressRepository.save(newAddress)


    const newProperty = propertyRepository.create({value, address: newAddress, size})
    // await propertyRepository.save(newProperty)

    return newProperty
}

const listPropertiesService = async () => {

    const propertyRepository = AppDataSource.getRepository(Properties)

    const properties = await propertyRepository.find()

    return properties
}

export { createPropertyService, listPropertiesService }