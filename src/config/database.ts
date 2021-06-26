import { createConnection } from 'typeorm'

export const connectDatabase = async () => await createConnection()