import { Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, Entity } from "typeorm"
import { Properties } from './properties.entity'
import { User } from "./user.entity"


@Entity('schedules_users_properties')
export class SchedulesUsersProperties {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @CreateDateColumn({ type: 'date' })
    date: Date

    @Column({ type: 'time' })
    hour: Date

    @ManyToOne(() => Properties)
    property: Properties

    @ManyToOne(() => User)
    user: User


}