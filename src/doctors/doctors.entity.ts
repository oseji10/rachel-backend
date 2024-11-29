import { DoctorStatus } from 'src/auth/status.enum';
import { Users } from '../users/users.entity';

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn } from 'typeorm';

@Entity()
export class Doctors {
    @PrimaryGeneratedColumn()
    doctorId: number;

    @Column({ nullable: false })
    doctorName: string;

    @Column({ nullable: false })
    title: string;

    @Column({ nullable: false })
    department: string;

    @Column({ 
        type: 'enum', 
        enum: DoctorStatus, 
        default: DoctorStatus.ACTIVE 
    })
    status: DoctorStatus;

    // @OneToOne(() => Users, (user) => user.userId, { nullable: true })
    // @JoinColumn({name: 'user'})
    // user?: Users; 

    @OneToOne(() => Users, (user) => user.doctors, { nullable: true })
@JoinColumn({ name: 'userId' }) // This assumes 'userId' is the foreign key column in Doctors
user?: Users;


    @CreateDateColumn({ type: 'datetime', nullable: false })
    createdAt: Date;

    @UpdateDateColumn({ type: 'datetime', nullable: false })
    updatedAt: Date;

    @DeleteDateColumn({ type: 'datetime', nullable: true })
    deletedAt?: Date;
}
