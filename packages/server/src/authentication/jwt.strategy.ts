import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { passportJwtSecret } from 'jwks-rsa';
import { AmplifyService } from './amplify.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  // @todo think a better way to decouple this service from amplifyService
  constructor(private amplifyService: AmplifyService) {
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

  async validate(payload: any) {
    return {
      userId: payload.sub,
      email: payload.email,
    };
  }
}
