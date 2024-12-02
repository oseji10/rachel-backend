import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/jwt.strategy';
import { PatientsModule } from './patients/patients.module';

import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guards';
import { Doctors } from './doctors/doctors.entity';
import { DoctorsModule } from './doctors/doctors.module';
import { env } from 'process';

dotenv.config();
dotenv.config({ path: '.env.local' });

@Module({
  imports: [
    // JwtModule.register({
    //   secret: '6ytrew21!2wsxzaQ1!AgrippaZ',
    //   signOptions: { expiresIn: '1h' },
    // }),
    // TypeOrmModule.forRoot({
    //   host: process.env.DB_HOST,
    //   port: +process.env.DB_PORT,
    //   type: 'mysql',
    //   username: process.env.DB_USERNAME,
    //   password: process.env.DB_PASSWORD,
    //   database: process.env.DB_DATABASE,

//       host: "localhost",
// port: 3306,
// type: 'mysql',
// username: "dxqhghua_racheleyeemr",
// password: "2wsxzaQ1!6ytrew21!",
// database: "dxqhghua_racheleyeemr",

      // host: 'localhost',
      // port: 3306,
      // type: 'mysql',
      // username: "root",
      // password: "2wsxzaQ1!",
      // database: "rachel",



    //   entities: [__dirname + '/**/*.entity{.ts,.js}'],
    //   migrations: [join(__dirname, 'migrations/*.ts')],
    //   synchronize: true,
    //   logging: true,
    // }),
    TypeOrmModule.forRoot({
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      type: 'mysql',
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [join(__dirname, 'migrations/*.ts')],
      synchronize: true,
      logging: true,
    }),
    UsersModule, 
    AuthModule,
    PatientsModule,
  DoctorsModule
    
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
