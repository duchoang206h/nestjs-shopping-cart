import { PrimaryGeneratedColumn, Entity, Column, ManyToOne, JoinColumn} from 'typeorm'

@Entity()
export class RefreshToken {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    refreshtoken: string
   
    @Column()
    user_id: number
}