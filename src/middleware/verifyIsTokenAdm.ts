import { NextFunction, Request, Response } from "express"

const verifyIsActiveMiddleware = async (req: Request, res: Response, next: NextFunction) => {

    const isAdm = req.user.isAdm;
    if (!isAdm) {
      return res.status(403).json({ message: "Unauthorized" });
    }
    next();
}

export default verifyIsActiveMiddleware