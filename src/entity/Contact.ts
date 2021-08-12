import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('contact')
export class Contact{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:'text', name:'address', nullable:false})
    address:string;

    @Column({type:'varchar', name:'phone', length:'14', nullable:false})
    phone:string;

    @Column({type:'varchar', name:'email', length:'256', nullable:false})
    email:string

    @UpdateDateColumn()
    updatedAt: Date;

    @CreateDateColumn()
    createdAt: Date;
}