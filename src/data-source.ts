import { DataSource } from 'typeorm';
import { Users } from './users/users.entity';

import * as dotenv from 'dotenv';

dotenv.config(); 
dotenv.config({ path: '.env.local' });

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.DB_PORT || 3306,
  
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,

  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: ['src/migrations/*.ts'],  // Use TypeScript migration files
  synchronize: true,
  logging: true,  // Enable logging
});
