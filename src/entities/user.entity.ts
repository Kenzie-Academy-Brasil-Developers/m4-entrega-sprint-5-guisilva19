import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm'
import { Exclude } from 'class-transformer'
import { SchedulesUsersProperties } from './schedules_users.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column({length: 60, unique: true})
    email: string

    @Column()
    @Exclude()
    password: string

    @Column()
    isAdm: boolean
    
    @Column({ default: true})
    isActive: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToMany(() => SchedulesUsersProperties, SchedulesUsersProperties => SchedulesUsersProperties.user)
    schedules: SchedulesUsersProperties[]
} 