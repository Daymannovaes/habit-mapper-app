import { User as BaseUser } from '@habit-mapper-app/entities';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class User implements BaseUser {
  @PrimaryColumn()
  id: string;

  @Column()
  email: string;
}
