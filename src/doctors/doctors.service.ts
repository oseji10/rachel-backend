import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctors } from './doctors.entity';
import { PatientCarePlan } from './patient_care_plan.entity';
import { Patients } from '../patients/patients.entity';
import { Users } from 'src/users/users.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctors)
    private doctorsRepository: Repository<Doctors>,

    @InjectRepository(PatientCarePlan)
    private careplanRepository: Repository<PatientCarePlan>,

    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findAllByRole(roleId: number): Promise<Users[]> {
    return this.usersRepository.find({
        where: { roles: { roleId } },
        relations: ['roles', 'doctors', 'doctors.user'], // Include user relation in doctors
    });
}

  
  

   
  // Get all patients assigned to the logged-in doctor
  // async findAllPatients(doctorId: number): Promise<Patients[]> {
  //   return await this.patientsRepository.find({
  //     where: { primaryPhysician: { userId: doctorId } },
  //     relations: ['user', 'cancer', 'hospital'], 
  //     select: {
  //       user: {
  //         userId: true,
  //         email: true,
  //         phoneNumber: true
  //       },
  //       cancer: {
  //         cancerName: true,
  //       },
  //       hospital: {
  //         hospitalName: true,
  //         hospitalShortName: true
  //       },
  //     },
  //   });
  // }



  // async findAllPatientsReviewedByPP(hospitalId: number): Promise<Patients[]> {
  //   return await this.patientsRepository.find({
  //     where: { isPrimaryPhysicianReviewed: 'yes', hospital: hospitalId },
  //     relations: ['user', 'cancer', 'hospital'], 
  //     select: {
  //       user: {
  //         userId: true,
  //         email: true,
  //         phoneNumber: true
  //       },
  //       cancer: {
  //         cancerName: true,
  //       },
  //       hospital: {
  //         hospitalName: true,
  //         hospitalShortName: true
  //       },
  //     },
  //   });
  // }
  


  findOne(doctorId: number): Promise<Doctors> {
    return this.doctorsRepository.findOne({ where: { doctorId }});
  }

  create(doctors: Doctors): Promise<Doctors> {
    return this.doctorsRepository.save(doctors);
  }

  // async createCarePlan(
  //   doctorId: number, 
  //   patientId: number, 
  //   carePlanData: Partial<PatientCarePlan>
  // ): Promise<PatientCarePlan> {
  //     // Step 1: Create a new care plan
  //     const newCarePlan = this.careplanRepository.create({
  //         ...carePlanData,
  //         doctorId: { userId: doctorId },  // Assign doctor by ID
  //         patient: { userId: patientId },  // Assign patient by ID
  //     });
  //     await this.careplanRepository.save(newCarePlan);
  
      
  //     await this.patientsRepository.update(
  //         { user: {userId: patientId }}, 
  //         { 
  //           applicationStage: "primary_physician_reviewed",
  //           isPrimaryPhysicianReviewed: "yes" 
  //       }
  //     );
  
  //     return newCarePlan;
  // }
  
  
  

  async update(doctorId: number, doctors: Doctors): Promise<Doctors> {
    await this.doctorsRepository.update(doctorId, doctors);
    return this.findOne(doctorId);
  }

  async remove(doctorId: string): Promise<void> {
    await this.doctorsRepository.delete(doctorId);
  }
}
