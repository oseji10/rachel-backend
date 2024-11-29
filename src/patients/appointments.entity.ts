
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';
import { Patients } from './patients.entity';
import { Encounters } from './encounters.entity';


@Entity('appointments')  
export class Appointments {
  @PrimaryGeneratedColumn()  
  appointmentId: number;

  @OneToOne(() => Patients, (patients) => patients.patientId)
  @JoinColumn({ name: 'patientId' })  
  patientId: Patients;

  @ManyToOne(() => Encounters, (encounters) => encounters.encounterId)
  @JoinColumn({ name: 'encounterId' })  
  encounterId: Encounters;

  @Column({ type: 'datetime', nullable: true }) 
  nextAppointment: Date;

  @OneToOne(() => Users, (users) => users.userId)
  @JoinColumn({ name: 'userId' })  
  addedBy: Users;

  // Timestamp fields

  @CreateDateColumn({ type: 'datetime', nullable: false }) 
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false }) 
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deletedAt?: Date;



}
