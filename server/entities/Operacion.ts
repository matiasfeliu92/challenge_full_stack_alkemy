import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity()
export class Operaciones extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'varchar', length: 250, nullable: false, unique: true})
    concepto: string

    @Column({nullable: false})
    monto: number

    @Column({type: 'varchar', length: 250, nullable: false})
    tipo: string

    @Column({nullable: false})
    fecha: Date

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}