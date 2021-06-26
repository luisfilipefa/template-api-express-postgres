import { App } from "./app";
import { SessionRoutes } from "@routes/session.routes";
import { UserRoutes } from "@routes/user.routes";
import dotenv from "dotenv";

dotenv.config();

const app = new App([new UserRoutes(), new SessionRoutes()]);

app.listen();
