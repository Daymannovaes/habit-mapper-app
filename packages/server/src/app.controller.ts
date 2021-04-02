import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from './authentication/jwt-auth.guard';
import { User } from './user/user.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  getMe(@User() user): string {
    console.log('userId: ', user.userId);
    console.log('email: ', user.email);

    return user;
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
