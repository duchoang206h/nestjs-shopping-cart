import {PrimaryGeneratedColumn, Entity, Column, OneToMany } from 'typeorm'
import { Book } from './book.entity'

@Entity()
export class Category{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string
    @OneToMany(()=> Book,book => book.category)
    books: Book[]
    
}