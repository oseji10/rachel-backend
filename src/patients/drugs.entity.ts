
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne } from 'typeorm';


@Entity('drugs')  
export class Drugs {
  @PrimaryGeneratedColumn()  
  drugId: number;

  @Column({ type: 'varchar', nullable: true })  
  drugName: string;

  @Column({ type: 'varchar', nullable: true })  
  formulation: string;

  @Column({ type: 'varchar', nullable: true })  
  manufacturer: string;


  @Column({type: 'enum', enum: ['active', 'inactive'], nullable: true }) 
  status: string;



  // Timestamp fields

  @CreateDateColumn({ type: 'datetime', nullable: false }) 
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false }) 
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deletedAt?: Date;



}
