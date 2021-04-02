import { PickType } from '@nestjs/mapped-types';
import { CreateHabitDto } from './create-habit.dto';

export class UpdateHabitDto extends PickType(CreateHabitDto, [
  'trigger',
  'behavior',
  'reward',
]) {}
