import { Habit as BaseHabit } from '@habit-mapper-app/entities';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'habits',
})
export class Habit implements BaseHabit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  trigger: string;

  @Column()
  behavior: string;

  @Column()
  reward: string;

  @Column({
    name: 'user_id',
  })
  userId: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;
}
