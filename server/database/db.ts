import { DataSource } from "typeorm";
import { Operaciones } from "../entities/Operacion";
import dotenv from 'dotenv'
dotenv.config()

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Operaciones],
    logging: true,
    synchronize: true 
})