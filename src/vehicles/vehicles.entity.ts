import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity() // sql table === 'coffee'
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  charger: string;
  @Column()
  plate: string;
  @CreateDateColumn()
  registerTime: Date;
}
