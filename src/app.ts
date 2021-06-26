import express, { NextFunction, Request, Response } from 'express';

import { HttpError } from '@errors/HttpError';
import { Route } from '@interfaces/route.interface';
import { connectDatabase } from '@config/database';
import cors from 'cors'
import morgan from 'morgan'

export class App {
  public app = express()
  public port = process.env.PORT || 3333;

  constructor(routes: Route[]) {
    this.initializeDatabase()
    this.initializeMiddlewares()
    this.initializeErrorHandler()
    this.initializeRoutes(routes)
  }

  public listen() {
    this.app.listen(this.port, () => console.log(`🔥  server listening on ${this.port}`))
  }

  private async initializeDatabase() {
    const connection = await connectDatabase()

    if (connection.isConnected) console.log("📦  database connection established")
  }

  private initializeMiddlewares() {
    this.app.use(express.json())
    this.app.use(cors())
    this.app.use(morgan("dev"))
  }

  private initializeErrorHandler() {
    this.app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
      return res.status(err.status).json({error: true, message: err.message})
    })
  }

  private initializeRoutes(routes: Route[]) {
    routes.forEach(route => this.app.use("/", route.router))
  }
}