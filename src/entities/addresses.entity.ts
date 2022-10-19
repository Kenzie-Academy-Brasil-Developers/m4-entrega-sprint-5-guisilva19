import { Column, Entity, PrimaryGeneratedColumn} from 'typeorm'
import {v4 as uuid} from 'uuid'

@Entity('addresses')
export class Addresses {
    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column()
    district: string

    @Column()
    zipCode: string

    @Column()
    number: string

    @Column()
    city: string

    @Column()
    state: string

    constructor() {
        if(!this.id){
            this.id = uuid()
        }
    }
}