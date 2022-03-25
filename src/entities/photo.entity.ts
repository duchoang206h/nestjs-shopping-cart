import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn} from 'typeorm'
import {  Book } from './book.entity'

@Entity()
export class Photo {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    link: string
    @ManyToOne(()=> Book, book  => book.photos)
    @JoinColumn({
        name:"book_id"
    })
    book: Book
}