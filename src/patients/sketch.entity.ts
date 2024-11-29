
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { Patients } from './patients.entity';
import { Encounters } from './encounters.entity';


@Entity('sketch')  
export class Sketch {
  @PrimaryGeneratedColumn()  
  sketchId: number;

  @OneToOne(() => Patients, (patient) => patient.id)
  @JoinColumn({ name: 'patientId' })  
  patientId: Patients;

  @ManyToOne(() => Encounters, (encounters) => encounters.encounterId)
  @JoinColumn({ name: 'encounterId' })  
  encounterId: Encounters;

  @Column({ type: 'text', nullable: true })  
  rightEyeFront: string;

  @Column({ type: 'text', nullable: true })  
  rightEyeback: string;

  @Column({ type: 'text', nullable: true })  
  leftEyeFront: string;

  @Column({ type: 'text', nullable: true })  
  leftEyeback: string;

  @Column({ type: 'text', nullable: true })  
  image_url: string;

  @Column({ type: 'varchar', nullable: true })  
  type: string;

    // Timestamp fields

  @CreateDateColumn({ type: 'datetime', nullable: false }) 
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false }) 
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deletedAt?: Date;



}
