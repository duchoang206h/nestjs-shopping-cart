import { PrimaryGeneratedColumn, Entity, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { Cart_item } from './cart_item.entity'
import { Customer } from './customer.entity'

@Entity()
export class Cart{
    @PrimaryGeneratedColumn('increment')
    id: number
   @OneToOne(()=> Customer,customer =>customer.cart)
   @JoinColumn({
       name: "customer_id"
   })
   customer: Customer
   @OneToMany(()=> Cart_item, item  =>item.cart)
   items: Cart_item[]
}