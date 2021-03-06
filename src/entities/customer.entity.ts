import { PrimaryGeneratedColumn, Entity, Column, OneToMany, OneToOne } from 'typeorm'
import { Cart } from './cart.entity'
import { Order } from './order.entity'
import { Transaction } from './transactioon.entity'
import { Exclude } from 'class-transformer';
@Entity()
export class Customer{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    fullname: string

    @Column()
    email:string
    @Exclude() // Serialization 
    @Column()
    password: string

    @Column({
    })
    phone_number:string
    @Column({
    })
    address: string
    @OneToOne(()=> Cart, cart => cart.customer)
    cart: Cart
    @OneToMany(()=>Order, order => order.customer)
    orders: Order[]
    @OneToMany(()=>Transaction, transaction => transaction.customer)
    transactions: Transaction[]
    constructor(partial: Partial<Customer>) {
        Object.assign(this, partial);
      }
}