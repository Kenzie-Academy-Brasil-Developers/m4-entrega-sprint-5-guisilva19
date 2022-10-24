import { Request, Response, NextFunction } from "express";

export const validateUserUpdateMiddleware = (schema: any) => async (req: Request, res: Response, next: NextFunction) => {

    const data = req.body
    
          const validatedData = await schema.validate(data, {
            abortEarly: false,
            stripUnknown: true,
          });
          const values = Object.values(validatedData);
          if (!values.length) {
            return res.status(401).json({ message: "Not update" });
          }
          req.userValidated = validatedData;
          next();
}