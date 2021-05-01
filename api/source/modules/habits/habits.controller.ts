import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { User } from '../user/user.decorator';
import { JwtAuthGuard } from '../authentication/jwt-auth.guard';
import { HabitsService } from './habits.service';
import { CreateHabitDto } from './dto/create-habit.dto';
import { UpdateHabitDto } from './dto/update-habit.dto';
import { User as UserEntity } from '../user/entities/user.entity';
import { Habit } from './entities/habit.entity';

@Controller('habits')
@UseGuards(JwtAuthGuard)
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  @Post()
  create(
    @User() user: UserEntity,
    @Body() createHabitDto: CreateHabitDto,
  ): Promise<Habit> {
    return this.habitsService.create({
      ...createHabitDto,
      userId: user.id,
    });
  }

  @Get()
  findAll(@User() user: UserEntity): Promise<Habit[]> {
    return this.habitsService.findAllForUser(user.id);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @User() user: UserEntity,
  ): Promise<Habit | void> {
    return this.habitsService.findOneForUser(+id, user.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @User() user: UserEntity,
    @Body() updateHabitDto: UpdateHabitDto,
  ): Promise<any> {
    return this.habitsService.updateOneForUser(+id, user.id, updateHabitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @User() user: UserEntity): Promise<any> {
    return this.habitsService.removeOneForUser(+id, user.id);
  }
}
