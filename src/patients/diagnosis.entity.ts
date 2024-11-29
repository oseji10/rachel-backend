
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { DiagnosisList } from './diagnosis._list.entity';
import { Encounters } from './encounters.entity';
import { Patients } from './patients.entity';


@Entity('diagnosis')  
export class Diagnosis {
  @PrimaryGeneratedColumn()  
  diagnosisId: number;

  @OneToOne(() => Patients, (patient) => patient.id)
  @JoinColumn({ name: 'patientId' })  
  patientId: Patients;

  @ManyToOne(() => Encounters, (encounters) => encounters.encounterId)
  @JoinColumn({ name: 'encounterId' })  
  encounterId: Encounters;

  @OneToOne(() => DiagnosisList, (diagnosis_list) => diagnosis_list.id)
  @JoinColumn({ name: 'diagnosisRight' })  
  diagnosisRight: DiagnosisList;

  @OneToOne(() => DiagnosisList, (diagnosis_list) => diagnosis_list.id)
  @JoinColumn({ name: 'diagnosisLeft' })  
  diagnosisLeft: DiagnosisList;


    // Timestamp fields

  @CreateDateColumn({ type: 'datetime', nullable: false }) 
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false }) 
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deletedAt?: Date;



}
