import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn} from 'typeorm'
import { Properties } from './properties.entity'

@Entity()
export class Categories {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string

    @Column({unique: true})
    name: string

    @OneToMany(() => Properties, categories => categories.category,{ eager: true})
    @JoinColumn()
    properties: Properties[]
}