import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column } from "typeorm";

@Entity('client')
export class Client{
    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar", {name:"path", nullable:false})
    path: string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}