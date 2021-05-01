import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './modules/authentication/jwt-auth.guard';
import { User } from './modules/user/user.decorator';

@Controller()
export class ApiController {
  @Get('/me')
  @UseGuards(JwtAuthGuard)
  getMe(@User() user): string {
    console.log('userId: ', user.userId);
    console.log('email: ', user.email);

    return user;
  }

  @Get('/ping')
  ping(): string {
    return 'pong';
  }
}
