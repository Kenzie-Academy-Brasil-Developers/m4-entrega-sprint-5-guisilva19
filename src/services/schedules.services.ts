import AppDataSource from "../data-source"
import { Properties } from "../entities/properties.entity"
import { SchedulesUsersProperties } from "../entities/schedules_users.entity"
import { User } from "../entities/user.entity"
import { AppError } from "../errors/AppError"
import { IScheduleRequest } from "../interfaces/schedules"

export async function createSchedulesService({
    date,
    hour,
    propertyId,
    userId,
}: IScheduleRequest) {
    const schedulesRepository = AppDataSource.getRepository(
        SchedulesUsersProperties
    );
    const propertyRepository = AppDataSource.getRepository(Properties);
    const userRepository = AppDataSource.getRepository(User);

    const dayTest = new Date(date).getDay();
    const hourTest = new Date(`${date} ${hour}`).getHours();
    if (dayTest === 0 || dayTest === 6) {
        throw new AppError("Not Saturday and Sunday");
    }
    if (hourTest < 8 || hourTest > 17) {
        throw new AppError("Not hour");
    }
    const properties = await propertyRepository.find();
    const users = await userRepository.find();

    const propertyExist = properties.find((property) => property.id === propertyId);
    const userExist = users.find((user) => user.id === userId);

    if (!propertyExist) {
        throw new AppError("Property not found", 404);
    }
    if (!userExist) {
        throw new AppError("User not found", 404);
    }

    const schedules = await schedulesRepository.find();
    const dateExist = schedules.filter((schedule) => {
        const exist = new Date(`${schedule.date} ${schedule.hour}`);
        const novo = new Date(`${date} ${hour}`);
        return exist.toDateString() === novo.toDateString();
    });
    if (dateExist.length > 0) {
        const verifyHour = dateExist.filter((s) => {
            const exist = new Date(`${s.date} ${s.hour}`);
            const novo = new Date(`${date} ${hour}`);
            return (
                `${exist.getHours()}:${exist.getMinutes()}` ===
                `${novo.getHours()}:${novo.getMinutes()}`
            );
        });
        if (verifyHour.length > 0) {
            throw new AppError("Date and Hour exist");
        }
    }
    const newSchedule = schedulesRepository.create({
        date,
        hour,
        user: userExist,
        property: propertyExist,
    });
    await schedulesRepository.save(newSchedule);
    return { ...newSchedule, message: "Created Schedule" };
}

const listSchedulesFromPropertyService = async (id: string) => {
    if (!id) {
        throw new AppError('Id invalid', 404)
    }
    const propertyRepository = AppDataSource.getRepository(Properties)
    const properties = await propertyRepository.find()
    const property = properties.find(property => property.id === id)
    if (property) {
        return property
    }
    throw new AppError('Not exist property', 404)
}

export { listSchedulesFromPropertyService }