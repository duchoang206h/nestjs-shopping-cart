import {PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToMany, ManyToOne, JoinColumn, OneToOne } from 'typeorm'
import { Book } from './book.entity'
import { Order } from './order.entity'
import { Customer } from './customer.entity'

@Entity()
export class Transaction{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    type: string

    @Column()
    status: string

   
    @ManyToOne(()=>Customer, customer => customer.transactions)
    @JoinColumn({
        name:"customer_id"
    })
    customer: Customer
    @OneToOne(()=>Order, order => order.transaction)
    @JoinColumn({
        name:"order_id"
    })
    order: Order
}