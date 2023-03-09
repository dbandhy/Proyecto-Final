import { afiliarPersona } from './servicePeople.js'

export async function post(req, res, next) {
    try {
        const { body: personData } = req
        const result = await afiliarPersona(personData)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
}