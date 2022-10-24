import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, OneToMany, ManyToOne, IsNull } from 'typeorm'
import {v4 as uuid} from 'uuid'
import { Addresses } from './addresses.entity'
import { Categories } from './categories.entity'
import { SchedulesUsersProperties } from './schedules_users.entity'


@Entity('properties')
export class Properties {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    
    
    @Column({default: false})
    sold: boolean
    
    @Column({ type: 'decimal', precision: 2, scale: 10})
    value: number
    
    @Column()
    size: number
    
    @CreateDateColumn()
    createdAt: Date
    
    @UpdateDateColumn()
    updatedAt: Date
    
    @OneToOne((type) => Addresses, {
        eager: true
    })
    @JoinColumn()
    address: Addresses
    
    @OneToMany(() => SchedulesUsersProperties, SchedulesUsersProperties => SchedulesUsersProperties.property, {nullable: true})
    schedules: SchedulesUsersProperties[]
    
    @ManyToOne(() => Categories,{nullable: true})
    @JoinColumn()
    category: Categories


    constructor(){
        if(!this.id){
            this.id = uuid()
        }
        if(!this.sold){
            this.sold = false
        }
    }
}