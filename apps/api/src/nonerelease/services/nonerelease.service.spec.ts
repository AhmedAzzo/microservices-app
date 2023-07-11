import { Test, TestingModule } from '@nestjs/testing';
import { NoneReleaseService } from './nonerelease.service';

describe('NoneReleaseService', () => {
  let service: NoneReleaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NoneReleaseService],
    }).compile();

    service = module.get<NoneReleaseService>(NoneReleaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
