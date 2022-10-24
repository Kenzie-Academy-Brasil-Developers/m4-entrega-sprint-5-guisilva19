import * as yup from 'yup'


const schema = yup.object().shape({
    name: yup.string().notRequired(),
    password: yup.string().notRequired(),
    email: yup.string().notRequired()

})

const propertySchema = yup.object().shape({
    value: yup.number().required(),
    size:  yup.number().required(),
    categoryId: yup.string().required(),
    address: yup.object().shape({
        district: yup.string().required(),
        zipCode: yup.string().max(8).required(),
        number: yup.string().required(),
        city: yup.string().required(),
        state: yup.string().max(2).required(),
    })
})

export { schema, propertySchema }