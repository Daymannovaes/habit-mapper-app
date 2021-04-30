import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getOrmConfig } from '../../infrastructure/database/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { HabitsModule } from './habits/habits.module';
import { Habit } from './habits/entities/habit.entity';

@Module({
  imports: [
    HabitsModule,
    AuthenticationModule,
    TypeOrmModule.forRoot(
      getOrmConfig(process.env.NODE_ENV || 'development', [Habit]),
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
