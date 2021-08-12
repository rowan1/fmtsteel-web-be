import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column, OneToMany, JoinColumn } from "typeorm";
import { SubService } from './SubService';

@Entity('service')
export class Service{
    @PrimaryGeneratedColumn()
    id!:number;

    @Column("varchar",{length:256, name:"title", nullable:false})
    title!:string;

    @Column("text",{name:"description", nullable:true})
    description!:string;

    @Column("varchar", {name:"path", length:500 ,nullable:true})
    path!: string;

    @Column("int",{name:"deleted", default:0})
    deleted:boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => SubService, service => service.id)
    @JoinColumn()
    services!: SubService[];
}