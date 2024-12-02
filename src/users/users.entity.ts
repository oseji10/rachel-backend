import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
  ManyToOne,
  OneToOne
} from 'typeorm';
import { Roles } from './roles.entity';
import { Patients } from '../patients/patients.entity';
import { Doctors } from 'src/doctors/doctors.entity';

@Entity('users')  // Explicitly set the table name for MySQL
export class Users {
  @PrimaryGeneratedColumn()  // Auto-increment primary key
  userId: number;

  @Column({ type: 'varchar', length: 255, unique: true, nullable: true })  // Specify type and uniqueness for MySQL
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })  // Specify type for password
  password: string;

  // @Column({ type: 'varchar', length: 50, nullable: true, unique: true })  // Specify type and length for username
  // username: string;

  @Column({ type: 'varchar', length: 11, nullable: true, unique: true })  // Specify type and length for phoneNumber
  phoneNumber: string;



  @ManyToOne(() => Roles, (role) => role.users) 
    roles: Roles;

  @OneToMany(() => Patients, (patient) => patient.user)  // One-to-many relationship with Patients
  patients: Patients[];


  @OneToOne(() => Doctors, (doctor) => doctor.user, { nullable: true })
doctors?: Doctors;


  @CreateDateColumn({ type: 'datetime', nullable: false })  // Remove default value
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false })  // Remove default value
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deletedAt?: Date;
}
