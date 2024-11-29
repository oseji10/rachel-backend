import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards, UseFilters, Req, NotFoundException } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patients } from './patients.entity';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UnauthorizedExceptionFilter } from '../unauthorized-exception.filter';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Users } from '../users/users.entity';
import { PatientPersonalHistory } from './patient_personal_history.entity';
// import { PatientFamilyHistory } from './patient_family_history.entity';
import { Roles } from '../auth/roles.decorator';
import { Role } from '../auth/roles.enum';
import { RolesGuard } from '../auth/roles.guards';
import { PatientNextOfKin } from './patient_next_of_kin.entity';
import { CreatePatientDto } from './createPatientDto';
import { CreateUserDto } from 'src/users/createUserDto';
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


@Controller('patients')
// @UseFilters(UnauthorizedExceptionFilter)

export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}
  
  @Post('visual_acuity_far')
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  createVisualAcuityFar(@Body() visual_acuity_far: VisualAcuityFar) {
    return this.patientsService.createVisualAcuityFar(visual_acuity_far);
  }
  

  @Get('visual_acuity_far')
  async findAllVisualAcuity() {
    return this.patientsService.findAllVisualAcuityFar();
  }


  @Post('visual_acuity_near')
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  createVisualAcuityNear(@Body() visual_acuity_far: VisualAcuityNear) {
    return this.patientsService.createVisualAcuityNear(visual_acuity_far);
  }
  

  @Get('visual_acuity_near')
  async findAllVisualAcuityNear() {
    return this.patientsService.findAllVisualAcuityNear();
  }


  @Post('refraction_sphere')
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  createRefractionSphere(@Body() refraction_sphere: RefractionSphere) {
    return this.patientsService.createRefractionSphere(refraction_sphere);
  }
  

  @Get('refraction_sphere')
  async findAllRefractionSphere() {
    return this.patientsService.findAllRefractionSphere();
  }



  @Post('refraction_axis')
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  createRefractionAxis(@Body() refraction_sphere: RefractionAxis) {
    return this.patientsService.createRefractionAxis(refraction_sphere);
  }
  

  @Get('refraction_axis')
  async findAllRefractionAxis() {
    return this.patientsService.findAllRefractionAxis();
  }


  @Post('refraction_cylinder')
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  createRefractionCylinder(@Body() refraction_sphere: RefractionCylinder) {
    return this.patientsService.createRefractionCylinder(refraction_sphere);
  }
  

  @Get('refraction_cylinder')
  async findAllRefractionCylinder() {
    return this.patientsService.findAllRefractionCylinder();
  }


  @Post('refraction_prism')
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  createRefractionPrism(@Body() refraction_prism: RefractionPrism) {
    return this.patientsService.createRefractionPrism(refraction_prism);
  }
  

  @Get('refraction_prism')
  async findAllRefractionPrism() {
    return this.patientsService.findAllRefractionPrism();
  }


  @Post('diagnosis')
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  createDiagnosis(@Body() diagnosis: DiagnosisList) {
    return this.patientsService.createDiagnosis(diagnosis);
  }
  

  @Get('diagnosis')
  async findAllDiagnosis() {
    return this.patientsService.findAllDiagnosis();
  }


  @Post('chief_complaint')
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  createChiefComplaint(@Body() chief_complaint: ChiefComplaint) {
    return this.patientsService.createChiefComplaint(chief_complaint);
  }
  

  @Get('chief_complaint')
  async findAllChiefComplaint() {
    return this.patientsService.findAllChiefComplaint();
  }


  @Post('consulting')
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  createConsulting(@Body() consulting: Consulting) {
    return this.patientsService.createConsulting(consulting);
  }


  @Post('continue-consulting')
  // @Roles(Role.ADMIN)
  // @UseGuards(JwtAuthGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  createContinueConsulting(@Body() continue_consulting: ContinueConsulting) {
    return this.patientsService.createContinueConsulting(continue_consulting);
  }

  @Get('all_patients')
  // @Roles(Role.DOCTOR, Role.NURSE)
  // @UseGuards(JwtAuthGuard, RolesGuard)
  @UseFilters(UnauthorizedExceptionFilter) 
  findAll() {
    return this.patientsService.findAll();
  }


  

  @Post('create')
  async createPatient(
    @Body('patientData') patientData: CreatePatientDto, // Patient-specific data
    @Body('userAccountData') userAccountData: CreateUserDto, // User account data
  ) {
    const newPatient = await this.patientsService.createNewPatient(
      patientData,
      userAccountData,
    );


    return {
      message: 'Patient created successfully',
      patient: newPatient,
    };
  }

  
  // @Post('biodata')
  // @UseGuards(JwtAuthGuard)
  // @UseFilters(UnauthorizedExceptionFilter)
  // async create(
  //     @CurrentUser() user: Users, // Assuming `user` is of type `Users`
  //     @Body() patientData: Partial<Patients>,
  // ): Promise<Patients> {
  //     return this.patientsService.create(user.userId, patientData); // Pass userId as a number
  // }

  // @Post('next-of-kin')
  // @UseGuards(JwtAuthGuard)
  // @UseFilters(UnauthorizedExceptionFilter)
  // async addNextOfKin(
  //     @CurrentUser() user: Users, // Assuming `user` is of type `Users`
  //     @Body() nextOfKinData: Partial<PatientNextOfKin>,
  // ): Promise<PatientNextOfKin> {
  //     return this.patientsService.addNextOfKin(user.userId, nextOfKinData); // Pass userId as a number
  // }

  // @Post('personal-history')
  // @UseGuards(JwtAuthGuard)
  // @UseFilters(UnauthorizedExceptionFilter)
  // async createPatientPersonalHisotry(
  //   @CurrentUser() user: Users, // Assuming `user` is of type `Users`
  //   @Body() personalHistoryData: Partial<PatientPersonalHistory>,
  // ): Promise<PatientPersonalHistory> {
  //     return this.patientsService.createPatientPersonalHistory(user.userId, personalHistoryData); // Pass userId and data
  // }

 
  



  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getPatientDetails(@Req() req): Promise<Patients> {
    const userId = req.user?.userId;
    console.log("User ID from session:", userId); // Debugging check
  
    if (!userId) {
      throw new NotFoundException('User not authenticated');
    }
  
    const patient = await this.patientsService.findPatientByLoggedUserId(userId);
    if (!patient) {
      throw new NotFoundException('Patient not found');
    }
  
    return patient;
  }
  

// Search patient by ID
@Get(':queryParameter')
async searchPatient(
  @Param('queryParameter') queryParameter: string
): Promise<Patients | undefined> {
  console.log('Received queryParameter:', queryParameter); // Debug input

  // Determine the type of query
  const isEmail = queryParameter.includes('@');
  const isPhoneNumber = /^\d+$/.test(queryParameter);

  let searchCriteria: Partial<Patients> | Partial<Users> = {};

  if (isEmail) {
    searchCriteria = { email: queryParameter }; // Email from Users table
  } else if (isPhoneNumber) {
    searchCriteria = { phoneNumber: queryParameter }; // Phone number from Users table
  } else if (queryParameter.startsWith('PAT')) {
    searchCriteria = { patientId: queryParameter }; // Patient ID from Patients table
  } else {
    searchCriteria = { hospitalFileNumber: queryParameter }; // Hospital File Number from Patients table
  }

  console.log('Resolved search criteria:', searchCriteria); // Debug resolved criteria

  try {
    const result = await this.patientsService.searchPatient(searchCriteria);
    console.log('Search result:', result); // Debug service response
    return result;
  } catch (error) {
    console.error('Error during search:', error); // Debug potential errors
    throw error; // Re-throw the error for the client
  }
}




//   @Put(':id')
//   update(@Param('id') id: string, @Body() patients: Patients) {
//     return this.patientsService.update(id, patients);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.patientsService.remove(id);
//   }




}
