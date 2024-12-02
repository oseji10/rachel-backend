
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Patients } from './patients.entity';
import { Consulting } from './consulting.entity';
import { ContinueConsulting } from './continue_consulting.entity';
import { Refraction } from './refraction.entity';
import { Sketch } from './sketch.entity';
import { Diagnosis } from './diagnosis.entity';
import { Investigations } from './investigations.entity';
import { Appointments } from './appointments.entity';
import { Exclude } from 'class-transformer';


@Entity('encounters')  
export class Encounters {
  @PrimaryGeneratedColumn()  
  encounterId: number;



  @ManyToOne(() => Patients, (patients) => patients.id, { nullable: true })
  @JoinColumn({ name: 'patientId' })
  patient: Patients | null;

 

 @OneToOne(() => Consulting, (consulting) => consulting.consultingId, { eager: true })
@JoinColumn({ name: 'consultingId' })
consulting: Consulting | null;


  @OneToOne(() => ContinueConsulting, (continue_consulting) => continue_consulting.continueConsultingId, { eager: true })
@JoinColumn({ name: 'continueConsultingId' })
continueConsulting: ContinueConsulting | number | null; // Accepting either ContinueConsulting or its ID



  @OneToOne(() => Sketch, (sketch) => sketch.sketchId)
  @JoinColumn({ name: 'sketchId' })  
  sketchId: Sketch | null;

  @OneToOne(() => Refraction, (refraction) => refraction.refractionId)
  @JoinColumn({ name: 'refractionId' })  
  refractionId: Refraction | null;

  @OneToOne(() => Diagnosis, (diagnosis) => diagnosis.diagnosisId)
  @JoinColumn({ name: 'diagnosisId' })  
  diagnosisId: Diagnosis | null;

  @OneToOne(() => Investigations, (investigations) => investigations.invesitgationsId)
  @JoinColumn({ name: 'invesitgationsId' })  
  invesitgationsId: Investigations | null;

  @OneToOne(() => Users, (users) => users.userId)
  @JoinColumn({ name: 'userId' })  
  consultantDoctor: Users | null;
 
  @OneToOne(() => Appointments, (appointments) => appointments.appointmentId)
  @JoinColumn({ name: 'appointmentId' })  
  appointmentId: Appointments | null;


  @Column({ type: 'integer', nullable: true, default: '0' })  
  status: number;
    // Timestamp fields

  @CreateDateColumn({ type: 'datetime', nullable: false }) 
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false }) 
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deletedAt?: Date;



}
