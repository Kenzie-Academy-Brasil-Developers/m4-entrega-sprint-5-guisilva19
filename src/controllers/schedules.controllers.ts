import { Request, Response } from "express"
import { createSchedulesService } from "../services/schedules.services"

const createSchedulesController = async (req: Request, res: Response) => {

    const { date, hour, propertyId } = req.body
    const { id } = req.user
    const newSchedules = await createSchedulesService({ date, hour, propertyId, userId: id  })
    return res.status(201).json(newSchedules)
}

export { createSchedulesController }