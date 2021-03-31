import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getOrmConfig } from '@habit-mapper-app/infrastructure/database/configuration';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [AuthenticationModule, TypeOrmModule.forRoot(getOrmConfig())],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
