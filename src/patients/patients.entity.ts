
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';


@Entity('patients')  // Explicitly set the table name for MySQL
export class Patients {
  @PrimaryGeneratedColumn()  // Auto-increment primary key
  id: number;

  @Column({ type: 'text', nullable: true })  
  patientId: string;

  @Column({ type: 'varchar', nullable: true })  
  hospitalFileNumber: string;

  @Column({ type: 'varchar', nullable: true })  
  firstName: string;

  @Column({ type: 'varchar', nullable: true })  
  lastName: string;

  @Column({ type: 'varchar', nullable: true })  
  otherNames: string;

  // @OneToOne(() => Users, (users) => users.userId, { nullable: true })
  // @JoinColumn({ name: 'userId' })  
  // user: Users;

  @ManyToOne(() => Users, (user) => user.patients, { nullable: true })
@JoinColumn({ name: 'userId' }) // Ensure the column name matches your schema
user: Users;


  @Column({ type: 'varchar', nullable: true })  
  gender: string;

 

  @Column({ type: 'varchar', nullable: true }) 
  bloodGroup: string;

  @Column({ type: 'varchar', nullable: true })  
  occupation: string;

  @Column({ type: 'varchar', nullable: true })  
  dateOfBirth: string;

  @OneToOne(() => Users, (users) => users.userId, { nullable: true })
  @JoinColumn({name: 'doctorId'})
  doctor: Users;

  @Column({ type: 'varchar', nullable: true })  // Specify type for dateOfBirth
  address: string;




  @Column({type: 'enum', enum: ['active', 'inactive'], default: 'active', nullable: true }) 
  status: string;



  // Timestamp fields

  @CreateDateColumn({ type: 'datetime', nullable: false })  // Remove default value
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false })  // Remove default value
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deletedAt?: Date;

  @OneToOne(() => Users, (users) => users.userId, { nullable: true })
  @JoinColumn({ name: 'addedBy' })  
  addedBy: Users;


}
