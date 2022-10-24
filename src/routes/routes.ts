import { userRoutes } from "./user/userRoutes";
import { Express } from "express";
import { categoriesRoutes } from "./categories/categoriesRoutes";
import { propertiesRoutes } from "./properties/propertiesRoutes";
import { schedulesRoutes } from "./schedules/schedulesRoutes";

export const appRoutes = (app: Express) => {

    app.use(userRoutes())
    app.use(categoriesRoutes())
    app.use(propertiesRoutes())
    app.use(schedulesRoutes())
}