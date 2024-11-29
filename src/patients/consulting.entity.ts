import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Patients } from './patients.entity';
import { VisualAcuityFar } from './visual_acuity_far.entity';
import { VisualAcuityNear } from './visual_acuity_near.entity';
import { Encounters } from './encounters.entity';
import { IsOptional, ValidateNested } from 'class-validator';

@Entity('consulting')
export class Consulting {
  @PrimaryGeneratedColumn()
  consultingId: number;

  @ManyToOne(() => Patients, (patients) => patients.id, { nullable: true })
  @JoinColumn({ name: 'patientId' })
  patientId: Patients | null;

  @IsOptional()
  @ManyToOne(() => Encounters, (encounter) => encounter.encounterId, { nullable: true })
  @JoinColumn({ name: 'encounterId' })
  encounterId: Encounters | number | null;

  @IsOptional()
  @ManyToOne(() => VisualAcuityFar, (visualAcuityFar) => visualAcuityFar.id, { nullable: true })
  @JoinColumn({ name: 'visualAcuityFarPresentingLeft' })
  visualAcuityFarPresentingLeft: VisualAcuityFar | null;

  @IsOptional()
  @ManyToOne(() => VisualAcuityFar, (visualAcuityFar) => visualAcuityFar.id, { nullable: true })
  @JoinColumn({ name: 'visualAcuityFarPresentingRight' })
  visualAcuityFarPresentingRight: VisualAcuityFar | null;

  @IsOptional()
  @ManyToOne(() => VisualAcuityFar, (visualAcuityFar) => visualAcuityFar.id, { nullable: true })
  @JoinColumn({ name: 'visualAcuityFarPinholeRight' })
  visualAcuityFarPinholeRight: VisualAcuityFar | null;

  @IsOptional()
  @ManyToOne(() => VisualAcuityFar, (visualAcuityFar) => visualAcuityFar.id, { nullable: true })
  @JoinColumn({ name: 'visualAcuityFarPinholeLeft' })
  visualAcuityFarPinholeLeft: VisualAcuityFar | null;

  @IsOptional()
  @ManyToOne(() => VisualAcuityFar, (visualAcuityFar) => visualAcuityFar.id, { nullable: true })
  @JoinColumn({ name: 'visualAcuityFarBestCorrectedLeft' })
  visualAcuityFarBestCorrectedLeft: VisualAcuityFar | null;

  @IsOptional()
  @ManyToOne(() => VisualAcuityFar, (visualAcuityFar) => visualAcuityFar.id, { nullable: true })
  @JoinColumn({ name: 'visualAcuityFarBestCorrectedRight' })
  visualAcuityFarBestCorrectedRight: VisualAcuityFar | null;

  @IsOptional()
  @ManyToOne(() => VisualAcuityNear, (visualAcuityNear) => visualAcuityNear.id, { nullable: true })
  @JoinColumn({ name: 'visualAcuityNearLeft' })
  visualAcuityNearLeft: VisualAcuityNear | null;

  @IsOptional()
  @ManyToOne(() => VisualAcuityNear, (visualAcuityNear) => visualAcuityNear.id, { nullable: true })
  @JoinColumn({ name: 'visualAcuityNearRight' })
  visualAcuityNearRight: VisualAcuityNear | null;

  @CreateDateColumn({ type: 'datetime', nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ type: 'datetime', nullable: false })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'datetime', nullable: true })
  deletedAt?: Date;
}
