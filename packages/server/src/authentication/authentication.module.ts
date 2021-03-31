import { HttpModule, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AmplifyService } from './amplify.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Module({
  imports: [
    HttpModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  providers: [AmplifyService, JwtStrategy, JwtAuthGuard],
})
export class AuthenticationModule {}
