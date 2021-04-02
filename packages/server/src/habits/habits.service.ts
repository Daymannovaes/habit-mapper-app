import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit } from './entities/habit.entity';

@Injectable()
export class HabitsService {
  constructor(
    @InjectRepository(Habit) private habitRepository: Repository<Habit>,
  ) {}

  create(createHabitDto: CreateHabitDto): Promise<Habit> {
    const habit = new Habit();
    const { trigger, behavior, reward, userId } = createHabitDto;

    habit.trigger = trigger;
    habit.behavior = behavior;
    habit.reward = reward;

    habit.userId = userId;

    return this.habitRepository.save(habit);
  }

  findAll(userId): Promise<Habit[]> {
    return this.habitRepository.find({
      userId,
    });
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
