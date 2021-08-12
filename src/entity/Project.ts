import { CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn, Column } from "typeorm";

@Entity('project')
export class Project{
    @PrimaryGeneratedColumn()
    id:number;

    @Column("varchar", {name:"title", length:500 ,nullable:false})
    title:string;

    @Column("text", {name:"description", nullable:false})
    description:string;

    @Column("varchar", {name:"path", length:500 ,nullable:false})
    path!: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}