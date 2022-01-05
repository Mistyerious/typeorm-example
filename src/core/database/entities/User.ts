import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique} from "typeorm";
import {Items} from "./Items";

@Entity()
@Unique(['id'])
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    _id!: string;

    @Column({ name: 'id', type: 'text' })
    id!: string; // required

    @OneToMany(() => Items, items => items.user)
    items!: Items[] // This makes it so a user can have many items but only an item can have on user. Saves you from having to make a userID field in the items
    //Also you can do something cool which I will show you in the Database file (I don't normally make one but it is a place to do some queries)
}