import { Test, TestingModule } from '@nestjs/testing';
import { UserDecorator } from './user.decorator';

describe('UserDecorator', () => {
  let provider: UserDecorator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDecorator],
    }).compile();

    provider = module.get<UserDecorator>(UserDecorator);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
