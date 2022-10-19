import { Request, Response, NextFunction } from "express";

export const validateUserUpdateMiddleware =  async (req: Request, res: Response, next: NextFunction) => {

    const {id, isAdm, isActive } = req.body

    if(id || isAdm || isActive){
        return res.status(401).json({message: "Errorrrrrr"})
    }

   return next()
}