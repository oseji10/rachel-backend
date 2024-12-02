
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Patients } from './patients.entity';
import { VisualAcuityFar } from './visual_acuity_far.entity';
import { VisualAcuityNear } from './visual_acuity_near.entity';
import { ChiefComplaint } from './chief_complaint.entity';
import { Encounters } from './encounters.entity';
import { IsOptional } from 'class-validator';


@Entity('continue_consulting')  
export class ContinueConsulting {
  @PrimaryGeneratedColumn()  
  continueConsultingId: number;

  @ManyToOne(() => Patients, (patients) => patients.id, { nullable: true })
  @JoinColumn({ name: 'patientId' })
  patient: Patients | null;

  // @IsOptional()
  // @ManyToOne(() => Encounters, (encounter) => encounter.encounterId, { nullable: true })
  // @JoinColumn({ name: 'encounterId' })
  // encounterId: Encounters | number | null;

  @ManyToOne(() => Encounters, (encounter) => encounter.encounterId, { nullable: true })
@JoinColumn({ name: 'encounterId' })
encounterId: Encounters | number | null; // Accepts both Encounters entity or encounterId as number


  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  intraOccularPressureRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  intraOccularPressureLeft: string;

  @IsOptional()
  @ManyToOne(() => ChiefComplaint, (chief_complaint) => chief_complaint.id, { nullable: true, eager: true })
  @JoinColumn({ name: 'chiefComplaintRight' })  
  chiefComplaintRight: ChiefComplaint;

  @IsOptional()
  @ManyToOne(() => ChiefComplaint, (chief_complaint) => chief_complaint.id, { nullable: true, eager: true })
  @JoinColumn({ name: 'chiefComplaintLeft' })  
  chiefComplaintLeft: ChiefComplaint;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  otherComplaintsRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  otherComplaintsLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  detailedHistoryRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  detailedHistoryLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  findingsRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  findingsLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  eyelidRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  eyelidLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  conjunctivaRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  conjunctivaLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  corneaRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  corneaLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  ACRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  ACLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  irisRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  irisLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  pupilRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  pupilLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  lensRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  lensLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  vitreousRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  vitreousLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  retinaRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  retinaLeft: string;

  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  otherFindingsRight: string;
 
  @IsOptional()
  @Column({type: 'text', nullable: true }) 
  otherFindingsLeft: string;

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
