import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, ILike, Repository } from 'typeorm';
import { Patients } from './patients.entity';
import * as bcrypt from 'bcrypt';
// import { PatientFamilyHistory } from './patient_family_history.entity';
// import { PatientPersonalHistory } from './patient_personal_history.entity';
// import { PatientNextOfKin } from './patient_next_of_kin.entity';
// import { PatientEwallet } from './patient_ewallet.entity';
// import { PatientEwalletTopupRequest } from './patient_ewallet_topup.entity';
import { Users } from '../users/users.entity';
import { randomInt } from 'crypto';
import { Roles } from 'src/users/roles.entity';
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
import { Encounters } from './encounters.entity';


@Injectable()
export class PatientsService {
  constructor(
    @InjectRepository(Patients)
    private readonly patientsRepository: Repository<Patients>,

    @InjectRepository(VisualAcuityFar)
    private visualAcuityFarRepository: Repository<VisualAcuityFar>,

    @InjectRepository(VisualAcuityNear)
    private visualAcuityNearRepository: Repository<VisualAcuityNear>,

    @InjectRepository(RefractionSphere)
    private refractionSphereRepository: Repository<RefractionSphere>,

    @InjectRepository(RefractionAxis)
    private refractionAxisRepository: Repository<RefractionAxis>,

    @InjectRepository(RefractionCylinder)
    private refractionCylinderRepository: Repository<RefractionCylinder>,

    @InjectRepository(RefractionPrism)
    private refractionPrismRepository: Repository<RefractionPrism>,

    @InjectRepository(DiagnosisList)
    private diagnosisRepository: Repository<DiagnosisList>,

    @InjectRepository(ChiefComplaint)
    private chiefComplaintRepository: Repository<ChiefComplaint>,

    @InjectRepository(Consulting)
    private consultingRepository: Repository<Consulting>,

    @InjectRepository(ContinueConsulting)
    private continueConsultingRepository: Repository<ContinueConsulting>,

    @InjectRepository(Encounters)
    private encountersRepository: Repository<Encounters>,


    private readonly dataSource: DataSource, 
  ) {}


    // Find all patients
    findAll(): Promise<Patients[]> {
      return this.patientsRepository.createQueryBuilder('patient')
        .leftJoinAndSelect('patient.doctor', 'doctor')
        .leftJoinAndSelect('doctor.doctors', 'doctors')
        .leftJoinAndSelect('patient.user', 'user')
        .select([
          'patient',            // Select all fields of patient
          'doctor.userId',          // Select specific fields from doctor
          'doctors.doctorName',
          'user.phoneNumber',
          'user.email'
        ])
        .getMany();
    }
    

    createVisualAcuityFar(visual_acuity_far: VisualAcuityFar): Promise<VisualAcuityFar> {
      return this.visualAcuityFarRepository.save(visual_acuity_far);
    }

    findAllVisualAcuityFar(): Promise<VisualAcuityFar[]> {
      return this.visualAcuityFarRepository.find();
  }


  createVisualAcuityNear(visual_acuity_near: VisualAcuityNear): Promise<VisualAcuityNear> {
    return this.visualAcuityNearRepository.save(visual_acuity_near);
  }

  findAllVisualAcuityNear(): Promise<VisualAcuityNear[]> {
    return this.visualAcuityNearRepository.find();
}


createRefractionSphere(refraction_sphere: RefractionSphere): Promise<RefractionSphere> {
  return this.refractionSphereRepository.save(refraction_sphere);
}

findAllRefractionSphere(): Promise<RefractionSphere[]> {
  return this.refractionSphereRepository.find();
}

createRefractionAxis(refraction_axis: RefractionAxis): Promise<RefractionAxis> {
  return this.refractionAxisRepository.save(refraction_axis);
}

findAllRefractionAxis(): Promise<RefractionAxis[]> {
  return this.refractionAxisRepository.find();
}


createRefractionCylinder(refraction_cylinder: RefractionCylinder): Promise<RefractionCylinder> {
  return this.refractionCylinderRepository.save(refraction_cylinder);
}

findAllRefractionCylinder(): Promise<RefractionCylinder[]> {
  return this.refractionCylinderRepository.find();
}

createRefractionPrism(refraction_prism: RefractionPrism): Promise<RefractionPrism> {
  return this.refractionPrismRepository.save(refraction_prism);
}

findAllRefractionPrism(): Promise<RefractionPrism[]> {
  return this.refractionPrismRepository.find();
}


createDiagnosis(diagnosis: DiagnosisList): Promise<DiagnosisList> {
  return this.diagnosisRepository.save(diagnosis);
}

findAllDiagnosis(): Promise<DiagnosisList[]> {
  return this.diagnosisRepository.find();
}

createChiefComplaint(chief_complaint: ChiefComplaint): Promise<ChiefComplaint> {
  return this.chiefComplaintRepository.save(chief_complaint);
}

findAllChiefComplaint(): Promise<ChiefComplaint[]> {
  return this.chiefComplaintRepository.find();
}



// Now create the first consulting page
async createConsulting(consulting: Consulting): Promise<Consulting & { encounterId?: number }> {
  // Remove null or undefined properties from the consulting object
  const sanitizedConsulting = {
    patientId: consulting.patientId || null,
    encounterId: consulting.encounterId || null,
    visualAcuityFarPresentingLeft: consulting.visualAcuityFarPresentingLeft || null,
    visualAcuityFarPresentingRight: consulting.visualAcuityFarPresentingRight || null,
    visualAcuityFarPinholeRight: consulting.visualAcuityFarPinholeRight || null,
    visualAcuityFarPinholeLeft: consulting.visualAcuityFarPinholeLeft || null,
    visualAcuityFarBestCorrectedLeft: consulting.visualAcuityFarBestCorrectedLeft || null,
    visualAcuityFarBestCorrectedRight: consulting.visualAcuityFarBestCorrectedRight || null,
    visualAcuityNearLeft: consulting.visualAcuityNearLeft || null,
    visualAcuityNearRight: consulting.visualAcuityNearRight || null,
  };
  
  // Save the sanitized consulting record
  const savedConsulting = await this.consultingRepository.save(sanitizedConsulting);

  // Declare the encounterId
  let encounterId: number | undefined;

  // Check if required fields for encounter creation exist
  if (consulting.patientId) {
    // Create a new encounter and associate it with the saved consulting
    const encounter = new Encounters();
    encounter.consultingId = savedConsulting; // Associate the consulting record
    encounter.status = 1;
    encounter.patientId = consulting.patientId;

    // Save the encounter record
    const savedEncounter = await this.encountersRepository.save(encounter);

    // Update the consulting record with the encounterId
    await this.consultingRepository.update(savedConsulting.consultingId, {
      encounterId: savedEncounter.encounterId, // Assign the encounterId
    });

    // Store the encounterId
    encounterId = savedEncounter.encounterId;
  }

  // Return the updated consulting record, along with the encounterId if it was created
  const updatedConsulting = await this.consultingRepository.findOne({
    where: { consultingId: savedConsulting.consultingId },
  });

  // Return the updated consulting record, including encounterId if applicable
  return {
    ...updatedConsulting,
    encounterId, // This will include encounterId in the response if it was created
  };
}


async createContinueConsulting(continue_consulting: ContinueConsulting): Promise<ContinueConsulting> {
  const queryRunner = this.dataSource.createQueryRunner();
  
  // Start a transaction to ensure that operations are atomic
  await queryRunner.startTransaction();

  try {
    // Step 1: Create the continueConsulting record
    const sanitizedContinueConsulting = {
      patientId: continue_consulting.patientId || null,
      encounterId: continue_consulting.encounterId || null,
      chiefComplaintRight: continue_consulting.chiefComplaintRight || null,
      chiefComplaintLeft: continue_consulting.chiefComplaintLeft || null,
      intraOccularPressureRight: continue_consulting.intraOccularPressureRight || null,
      intraOccularPressureLeft: continue_consulting.intraOccularPressureLeft || null,
      otherComplaintsRight: continue_consulting.otherComplaintsRight || null,
      otherComplaintsLeft: continue_consulting.otherComplaintsLeft || null,
      detailedHistoryRight: continue_consulting.detailedHistoryRight || null,
      detailedHistoryLeft: continue_consulting.detailedHistoryLeft || null,
      findingsRight: continue_consulting.findingsRight || null,
      findingsLeft: continue_consulting.findingsLeft || null,
      eyelidRight: continue_consulting.eyelidRight || null,
      eyelidLeft: continue_consulting.eyelidLeft || null,
      conjunctivaRight: continue_consulting.conjunctivaRight || null,
      conjunctivaLeft: continue_consulting.conjunctivaLeft || null,
      corneaRight: continue_consulting.corneaRight || null,
      corneaLeft: continue_consulting.corneaLeft || null,
      ACRight: continue_consulting.ACRight || null,
      ACLeft: continue_consulting.ACLeft || null,
      irisRight: continue_consulting.irisRight || null,
      irisLeft: continue_consulting.irisLeft || null,
      pupilRight: continue_consulting.pupilRight || null,
      pupilLeft: continue_consulting.pupilLeft || null,
      lensRight: continue_consulting.lensRight || null,
      lensLeft: continue_consulting.lensLeft || null,
      vitreousRight: continue_consulting.vitreousRight || null,
      vitreousLeft: continue_consulting.vitreousLeft || null,
      retinaRight: continue_consulting.retinaRight || null,
      retinaLeft: continue_consulting.retinaLeft || null,
      otherFindingsRight: continue_consulting.otherFindingsRight || null,
      otherFindingsLeft: continue_consulting.otherFindingsLeft || null,
    };

    // Step 1: Save the continueConsulting record
    const savedContinueConsulting = await queryRunner.manager.save(ContinueConsulting, sanitizedContinueConsulting);

    // Step 2: Query the Encounters table using encounterId from the request
  // If continue_consulting.encounterId is an Encounters object, extract the encounterId (a number) before querying
const encounterId = continue_consulting.encounterId instanceof Encounters ? continue_consulting.encounterId.encounterId : continue_consulting.encounterId;

const encounter = await queryRunner.manager.findOne(Encounters, {
  where: { encounterId: encounterId },  // Now this will be a number
});


    // Step 3: If the encounter is found, update the encounter with the continueConsultingId
    if (encounter) {
      // Correctly assign only the continueConsultingId (number) to encounter.continueConsultingId
      encounter.continueConsultingId = savedContinueConsulting.continueConsultingId; // Use the number field

      // Save the updated encounter record
      await queryRunner.manager.save(Encounters, encounter);

      // Step 4: Commit the transaction
      await queryRunner.commitTransaction();

      // Step 5: Return the created and updated ContinueConsulting record
      return savedContinueConsulting;
    } else {
      // If the encounter was not found, throw an error and rollback the transaction
      throw new Error(`Encounter with ID ${continue_consulting.encounterId} not found`);
    }

  } catch (error) {
    // Rollback the transaction in case of an error
    await queryRunner.rollbackTransaction();

    // Rethrow the error
    throw error;
  } finally {
    // Release the query runner after completing the transaction
    await queryRunner.release();
  }
}








//   async create(userId: number, patientData: Partial<Patients>): Promise<Patients> {
    //     const newPatient = this.patientsRepository.create({
    //         ...patientData,
    //         user: { userId }, // This assumes you want to associate the user via user object
    //     });
    //     return await this.patientsRepository.save(newPatient);
    // }

    async findPatientByUserId(id: number): Promise<Patients | undefined> {
      return await this.patientsRepository.findOne({ where: { id } });
    }

    
    async findPatientByLoggedUserId(userId: number): Promise<Patients | undefined> {
      try {
        const patient = await this.patientsRepository.findOne({
          where: { user: { userId } }, // Ensure field matches exactly in `Users` entity
          relations: ['user'],
        });
        console.log("Patient retrieved:", patient); // Debugging check
        return patient;
      } catch (error) {
        console.error("Error in findPatientByLoggedUserId:", error);
        throw new NotFoundException('Patient not found or query failed');
      }
    }
    

    

    async createNewPatient(
      patientData: Partial<Patients>,
      userAccountData: Partial<Users>,
    ): Promise<Patients> {
      const queryRunner = this.dataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
    
      try {
        // 1. Validate user data
        if (!userAccountData.email || !userAccountData.password) {
          throw new Error('Email and password are required to create a user.');
        }
    
        // 2. Hash the password
        const hashedPassword = await bcrypt.hash(userAccountData.password, 10);
        userAccountData.password = hashedPassword;
    
        // 3. Retrieve the roleId for the 'patient' role
        const patientRole = await queryRunner.manager.findOne(Roles, {
          where: { roleName: ILike('%patient%') }, 
        });
        
    
        if (!patientRole) {
          throw new Error('The role "patient" does not exist in the database.');
        }
    
        // 4. Assign the roleId to the user
        userAccountData.roles = patientRole;
    
        // 5. Create a user entry in the `Users` table
        const user = queryRunner.manager.create(Users, userAccountData);
        const savedUser = await queryRunner.manager.save(Users, user);
    
        // 6. Generate a unique patientId
        let patientId: string;
        let isUnique = false;
    
        while (!isUnique) {
          const currentYear = new Date().getFullYear();
          const randomNumbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join('');
          patientId = `${currentYear}${randomNumbers}`;
    
          const existingPatient = await queryRunner.manager.findOne(Patients, { where: { patientId } });
          isUnique = !existingPatient; // Ensure patientId is unique
        }
    
      
        // 7. Create a patient entry in the `Patients` table
        const newPatient = queryRunner.manager.create(Patients, {
          ...patientData,
          patientId,
          user: { userId: savedUser.userId }, // Associate with the saved user
        });
        const savedPatient = await queryRunner.manager.save(Patients, newPatient);
    
        // Commit the transaction
        await queryRunner.commitTransaction();
    
        return savedPatient;
      } catch (error) {
        // Rollback the transaction in case of an error
        await queryRunner.rollbackTransaction();
        console.error('Error during patient creation:', error);
        throw new Error(`Failed to create patient: ${error.message}`);
      } finally {
        await queryRunner.release();
      }
    }
    
  




    
    

  
  async findByEmail(id: number): Promise<Patients | undefined> {
    // Ensure we use findOne to get a single Patients instance
    return await this.patientsRepository.findOne({ where: { id } });
  }

  async searchPatient(criteria: Partial<Patients> | Partial<Users>): Promise<Patients | undefined> {
    console.log('Criteria:', criteria);
  
    if ('email' in criteria || 'phoneNumber' in criteria) {
      const user = await this.patientsRepository.createQueryBuilder('patients')
        .leftJoinAndSelect('patients.user', 'user')
        .where('user.email = :email', { email: criteria.email })
        .orWhere('user.phoneNumber = :phoneNumber', { phoneNumber: criteria.phoneNumber })
        .getOne();
  
      console.log('Query Result:', user);
      return user;
    }
  
    const patient = await this.patientsRepository.findOne({ where: criteria });
    console.log('Query Result:', patient);
    return patient;
  }
  
  
  
  





  
  

  // async walletBalance(
  //   secretariatId: number, 
  //   patient: number, 
  //   isApproved: string,
  //   recommendationData: Partial<PatientEwallet>
  // ): Promise<PatientEwallet> {
  //   // Step 1: Create a new care plan
  //   const patientQ = await this.patientsRepository.findOne({  where: { user: { userId: patient } } });
    
  //   if (!patientQ) {
  //       throw new Error('Patient not found');
  //   }

  //   return patientQ




}
