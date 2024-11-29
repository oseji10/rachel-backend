
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { DiagnosisList } from './diagnosis._list.entity';
import { Patients } from './patients.entity';
import { Encounters } from './encounters.entity';


@Entity('investigations')  
export class Investigations {
  @PrimaryGeneratedColumn()  
  invesitgationsId: number;

  @OneToOne(() => Patients, (patient) => patient.id)
  @JoinColumn({ name: 'patientId' })  
  patientId: Patients;

  @ManyToOne(() => Encounters, (encounters) => encounters.encounterId)
  @JoinColumn({ name: 'encounterId' })  
  encounterId: Encounters;

  @Column({ type: 'text', nullable: true })  
  investigationsRequired: string;

  @Column({ type: 'text', nullable: true })  
  externalInvestigationsRequired: string;
  
  @Column({ type: 'text', nullable: true })  
  uploadedDocuments: string;

  @Column({ type: 'text', nullable: true })  
  investigationsDone: string;

  @Column({ type: 'text', nullable: true })  
  physicalInfoHBP: string;

  @Column({ type: 'text', nullable: true })  
  physicalInfoDiabetes: string;

  @Column({ type: 'text', nullable: true })  
  physicalInfoPregnancy: string;

  @Column({ type: 'text', nullable: true })  
  foodDrugAllergy: string;

  @Column({ type: 'text', nullable: true })  
  foodCurrentMedication: string;

  @CreateDateColumn({ type: 'datetime', nullable: false }) 
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false }) 
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deletedAt?: Date;



}
