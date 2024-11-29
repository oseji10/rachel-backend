
import { Users } from '../users/users.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Patients } from './patients.entity';
import { VisualAcuityFar } from './visual_acuity_far.entity';
import { VisualAcuityNear } from './visual_acuity_near.entity';
import { RefractionSphere } from './refraction_sphere.entity';
import { RefractionCylinder } from './refraction_cylinder.entity';
import { RefractionAxis } from './refraction_axis.entity';
import { RefractionPrism } from './refraction_prism.entity';
import { Encounters } from './encounters.entity';


@Entity('refraction')  
export class Refraction {
  @PrimaryGeneratedColumn()  
  refractionId: number;

  @OneToOne(() => Patients, (patients) => patients.patientId)
  @JoinColumn({ name: 'patientId' })  
  patientId: Patients;

  @ManyToOne(() => Encounters, (encounters) => encounters.encounterId)
  @JoinColumn({ name: 'encounterId' })  
  encounterId: Encounters;

  @ManyToOne(() => RefractionSphere, (refraction_sphere) => refraction_sphere.id)
  @JoinColumn({ name: 'refractionSphereRight' })  
  refractionSphereRight: RefractionSphere;

  @ManyToOne(() => RefractionSphere, (refraction_sphere) => refraction_sphere.id)
  @JoinColumn({ name: 'refractionSphereLeft' })  
  refractionSphereLeft: RefractionSphere;

  @ManyToOne(() => RefractionCylinder, (refraction_cylinder) => refraction_cylinder.id)
  @JoinColumn({ name: 'refractionCylinderRight' })  
  refractionCylinderRight: RefractionCylinder;

  @ManyToOne(() => RefractionCylinder, (refraction_cylinder) => refraction_cylinder.id)
  @JoinColumn({ name: 'refractionCylinderLeft' })  
  refractionCylinderLeft: RefractionCylinder;

  @ManyToOne(() => RefractionAxis, (refraction_axis) => refraction_axis.id)
  @JoinColumn({ name: 'refractionAxisRight' })  
  refractionAxisRight: RefractionAxis;

  @ManyToOne(() => RefractionAxis, (refraction_axis) => refraction_axis.id)
  @JoinColumn({ name: 'refractionAxisLeft' })  
  refractionAxisLeft: RefractionAxis;


  @ManyToOne(() => RefractionPrism, (refraction_prism) => refraction_prism.id)
  @JoinColumn({ name: 'refractionPrismRight' })  
  refractionPrismRight: RefractionPrism;

  @ManyToOne(() => RefractionPrism, (refraction_prism) => refraction_prism.id)
  @JoinColumn({ name: 'refractionPrismLeft' })  
  refractionPrismLeft: RefractionPrism;

  @Column({type: 'text', nullable: true }) 
  nearAddRight: string;

  @Column({type: 'text', nullable: true }) 
  nearAddLeft: string;


  @Column({type: 'text', nullable: true }) 
  OCTRight: string;

  @Column({type: 'text', nullable: true }) 
  OCTLeft: string;

  @Column({type: 'text', nullable: true }) 
  FFARight: string;

  @Column({type: 'text', nullable: true }) 
  FFALeft: string;

  @Column({type: 'text', nullable: true }) 
  fundusPhotographyRight: string;

  @Column({type: 'text', nullable: true }) 
  fundusPhotographyLeft: string;

  @Column({type: 'text', nullable: true }) 
  pachymetryRight: string;

  @Column({type: 'text', nullable: true }) 
  pachymetryLeft: string;

  @Column({type: 'text', nullable: true }) 
  CUFTRight: string;

  @Column({type: 'text', nullable: true }) 
  CUFTLeft: string;

  @Column({type: 'text', nullable: true }) 
  CUFTKineticRight: string;

  @Column({type: 'text', nullable: true }) 
  CUFTKineticLeft: string;

  @Column({type: 'text', nullable: true }) 
  pupilRight: string;

  @Column({type: 'text', nullable: true }) 
  pupilLeft: string;

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
