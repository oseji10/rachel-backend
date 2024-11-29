import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { Patients } from './patients.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { PatientEwallet } from './patient_ewallet.entity';
// import { PatientEwalletTopupRequest } from './patient_ewallet_topup.entity';
// import { PatientNextOfKin } from './patient_next_of_kin.entity';
// import { PatientFamilyHistory } from './patient_family_history.entity';
import { PatientPersonalHistory } from './patient_personal_history.entity';
import { PatientCarePlan } from '../doctors/patient_care_plan.entity';

import { Users } from '../users/users.entity';
import { VisualAcuityFar } from './visual_acuity_far.entity';
import { VisualAcuityNear } from './visual_acuity_near.entity';
import { RefractionSphere } from './refraction_sphere.entity';
import { RefractionAxis } from './refraction_axis.entity';
import { RefractionCylinder } from './refraction_cylinder.entity';
import { RefractionPrism } from './refraction_prism.entity';
import { DiagnosisList } from './diagnosis._list.entity';
import { ChiefComplaint } from './chief_complaint.entity';
import { Consulting } from './consulting.entity';
import { ContinueConsulting } from './continue_consulting.entity';
import { Diagnosis } from './diagnosis.entity';
import { Sketch } from './sketch.entity';
import { Refraction } from './refraction.entity';
import { Investigations } from './investigations.entity';
import { Encounters } from './encounters.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Patients, 
   
    PatientPersonalHistory, 
    PatientCarePlan,
    Users,
    VisualAcuityFar,
    VisualAcuityNear,
    RefractionSphere,
    RefractionAxis,
    RefractionCylinder,
    RefractionPrism,
    DiagnosisList,
    ChiefComplaint,
    Consulting,
    ContinueConsulting,
    DiagnosisList,
    Diagnosis,
    Sketch,
    Refraction,
    Investigations,
    Encounters
  ])],
  providers: [PatientsService],
  controllers: [PatientsController],
  exports: [PatientsService], // Export PatientsService here
})
export class PatientsModule {}
