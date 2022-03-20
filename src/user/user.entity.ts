import { Entity, Column, PrimaryGeneratedColumn, } from 'typeorm';
@Entity()
export class User {
@PrimaryGeneratedColumn('increment')
id: string;
@Column({ unique: true, nullable: false,})
email:string;
@Column({ nullable: false})
password: string;
@Column()
number: string
@Column()
address: string
}