import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // sql table === 'coffee'
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  charger: string;
  @Column()
  plate: string;
  @Column({ default: Date() })
  registerTime: string;
}
