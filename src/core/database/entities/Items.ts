import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";


@Entity()
export class Items extends BaseEntity {

    @PrimaryGeneratedColumn()
    _id!: string;

    @Column({ name: 'id', type: 'text' })
    id!: string

    @ManyToOne(() => User, user => user.items)
    user!: User
}