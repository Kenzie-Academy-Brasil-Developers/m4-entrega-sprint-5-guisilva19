import AppDataSource from "../data-source"
import { SchedulesUsersProperties } from "../entities/schedules_users.entity"
import { IScheduleRequest } from "../interfaces/schedules"


const createSchedulesService = async ({ date, hour, propertyId, userId }: IScheduleRequest) => {

    const schedulesRepository = AppDataSource.getRepository(SchedulesUsersProperties)

    // const newSchedule = schedulesRepository.create({date, hour, propertyId, userId})
}

export { createSchedulesService }