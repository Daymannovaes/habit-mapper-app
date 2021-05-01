import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { Habit } from './entities/habit.entity';

// @todo move to another service
function generateUpdateQueryFromDto<T>(dto: T, fields: Array<keyof T>): T {
  const entries = Object.entries(dto);
  const updateQuery = entries.reduce((update, [key, value]) => {
    return fields.includes(key as keyof T)
      ? {
          ...update,
          [key]: value,
        }
      : update;
  }, {});

  return updateQuery as T;
}

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

  findAllForUser(userId: string): Promise<Habit[]> {
    return this.habitRepository.find({
      userId,
    });
  }

  findOneForUser(id: number, userId: string): Promise<Habit | void> {
    return this.habitRepository.findOne({
      id,
      userId,
    });
  }

  updateOneForUser(
    id: number,
    userId: string,
    updateHabitDto: UpdateHabitDto,
  ): Promise<any> {
    const fields: (keyof UpdateHabitDto)[] = ['trigger', 'behavior', 'reward'];

    const updateQuery = generateUpdateQueryFromDto<UpdateHabitDto>(
      updateHabitDto,
      fields,
    );

    return this.habitRepository.update(
      {
        id,
        userId,
      },
      updateQuery,
    );
  }

  removeOneForUser(id: number, userId: string): Promise<any> {
    return this.habitRepository.delete({
      id,
      userId,
    });
  }
}
