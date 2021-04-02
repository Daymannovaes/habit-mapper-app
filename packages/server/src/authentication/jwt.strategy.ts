import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { passportJwtSecret } from 'jwks-rsa';
import { User } from '../user/entities/user.entity';
import { AmplifyService } from './amplify.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // @todo think a better way to decouple this service from amplifyService
  constructor(amplifyService: AmplifyService) {
    super({
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: amplifyService.jwksUri,
      }),

      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: amplifyService.clientId,
      issuer: amplifyService.issuer,
      algorithms: ['RS256'],
    });
  }

  async validate(payload: any): Promise<Pick<User, 'id' | 'email'>> {
    return {
      id: payload.sub,
      email: payload.email,
    };
  }
}
