import { HttpService, Injectable } from '@nestjs/common';

import awsExports from '@habit-mapper-app/infrastructures/aws';

@Injectable()
export class AmplifyService {
  constructor(private httpService: HttpService) {
    this.clientId = awsExports.aws_user_pools_web_client_id;
    this.issuer = `https://cognito-idp.${awsExports.aws_project_region}.amazonaws.com/${awsExports.aws_user_pools_id}`;
    this.jwksUri = `${this.issuer}/.well-known/jwks.json`;
  }

  public clientId;

  public issuer;

  public jwksUri;
}
