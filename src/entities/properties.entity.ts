import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn } from 'typeorm'
import {v4 as uuid} from 'uuid'
import { Addresses } from './addresses.entity'


@Entity('properties')
export class Properties {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({default: false})
    sold: boolean

    @Column()
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
}