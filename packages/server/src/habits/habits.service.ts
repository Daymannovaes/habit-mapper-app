import { Injectable } from '@nestjs/common';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';

@Injectable()
export class HabitsService {
  habits = [];

  create(createHabitDto: CreateHabitDto) {
    const habit = {
      ...createHabitDto,
      id: Math.random(),
    };

    this.habits.push(habit);
    return habit;
  }

  findAll() {
    return this.habits;
  }

  findOne(id: string) {
    return `This action returns a #${id} habit`;
  }

  update(id: string, updateHabitDto: UpdateHabitDto) {
    return `This action updates a #${id} habit`;
  }

  remove(id: string) {
    return `This action removes a #${id} habit`;
  }
}
