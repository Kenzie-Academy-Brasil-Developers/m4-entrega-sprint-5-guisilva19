import { Request, Response } from "express"
import { createSchedulesService, listSchedulesFromPropertyService } from "../services/schedules.services"

const createSchedulesController = async (req: Request, res: Response) => {

    const { date, hour, propertyId } = req.body
    const { id } = req.user
    const newSchedules = await createSchedulesService({ date, hour, propertyId, userId: id  })
    return res.status(201).json(newSchedules)
}

const listSchedulesFromPropertyController = async (req: Request, res: Response) => {
    const { id } = req.params
    const schedule = await listSchedulesFromPropertyService(id)
    return res.json(schedule)
}
export { createSchedulesController, listSchedulesFromPropertyController }