import {PrimaryGeneratedColumn, Entity, Column, ManyToOne, OneToMany, JoinColumn, OneToOne} from 'typeorm'
import { Cart_item } from './cart_item.entity'
import { Category } from './category.entity'
import { Photo } from './photo.entity'

@Entity()
export class Book{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    titile: string

    @Column()
    price: number

    @Column()
    display_price: number

    @Column()
    discription: number

    @ManyToOne(()=> Category,category => category.books)
    @JoinColumn({
        name:"category_id"
    })
    category: Category
    @OneToMany(()=> Photo, photo => photo.book)
    photos: Photo[]
    @OneToOne(()=>Cart_item,cart_item=>cart_item.book)
    cart_item: Cart_item
}