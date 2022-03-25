import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { Book } from './book.entity'
import { Cart } from './cart.entity'
import { Order } from './order.entity'
import { Customer } from './customer.entity'

@Entity()
export class Order_item{
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column()
    amount: number
   @ManyToOne(()=> Order,order =>order.items)
   @JoinColumn({
       name:"order_id"
   })
    order: Order
   @OneToOne(()=> Book,book => book.cart_item)
   @JoinColumn({
       name:"book_id"
   })
   book:Book
}