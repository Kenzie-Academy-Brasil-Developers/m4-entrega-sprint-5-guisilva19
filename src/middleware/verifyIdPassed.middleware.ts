import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

const verifyIdPassedMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const id = req.body.id

    if(id) {
        throw new AppError('Unauthorized', 401)
    }

    next()
}

export default verifyIdPassedMiddleware