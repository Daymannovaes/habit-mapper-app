import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getOrmConfig } from '../configurations/database';
import { ApiController } from './api.controller';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { HabitsModule } from './modules/habits/habits.module';
import { Habit } from './modules/habits/entities/habit.entity';

@Module({
  imports: [
    HabitsModule,
    AuthenticationModule,
    TypeOrmModule.forRoot(
      getOrmConfig(process.env.NODE_ENV || 'development', [Habit]),
    ),
  ],
  controllers: [ApiController],
})
export class ApiModule {}
