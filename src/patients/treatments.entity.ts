
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { DiagnosisList } from './diagnosis._list.entity';
import { Patients } from './patients.entity';
import { Encounters } from './encounters.entity';
import { Drugs } from './drugs.entity';


@Entity('treatments')  
export class Treatments {
  @PrimaryGeneratedColumn()  
  invesitgationsId: number;

  @OneToOne(() => Patients, (patient) => patient.id)
  @JoinColumn({ name: 'patientId' })  
  patientId: Patients;

  @ManyToOne(() => Encounters, (encounters) => encounters.encounterId)
  @JoinColumn({ name: 'encounterId' })  
  encounterId: Encounters;

  @ManyToOne(() => Drugs, (drugs) => drugs.drugId)
  @JoinColumn({ name: 'drugId' })  
  drugId: Drugs;
  
  @Column({ type: 'text', nullable: true })  
  dosage: string;

  @Column({ type: 'text', nullable: true })  
  dosageDuration: string;
  
  @Column({ type: 'text', nullable: true })  
  time: string;

  @Column({ type: 'text', nullable: true })  
  dosageInterval: string;

  @Column({ type: 'text', nullable: true })  
  comment: string;

  @Column({ type: 'enum', enum:['eye_drop', 'tablet', 'ointment'], nullable: true })  
  treatmentType: string;

 

  @CreateDateColumn({ type: 'datetime', nullable: false }) 
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false }) 
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deletedAt?: Date;



}
