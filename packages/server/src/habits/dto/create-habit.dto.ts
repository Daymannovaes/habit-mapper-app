import { PickType } from '@nestjs/mapped-types';
import { Habit } from '../entities/habit.entity';

export class CreateHabitDto extends PickType(Habit, [
  'trigger',
  'behavior',
  'reward',
  'userId',
]) {}
