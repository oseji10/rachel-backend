import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Doctors } from './doctors.entity';
import { PatientCarePlan } from './patient_care_plan.entity';
import { PatientsService } from 'src/patients/patients.service';
import { Patients } from '../patients/patients.entity';
import { Users } from 'src/users/users.entity';
import { UsersService } from 'src/users/users.service';
import { Roles } from 'src/users/roles.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Doctors, PatientCarePlan, Patients, Users, Roles])],
  providers: [DoctorsService, UsersService,],
  controllers: [DoctorsController]
})
export class DoctorsModule {}
