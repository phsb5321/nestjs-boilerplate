// {{camelCase name}}-create.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { {{pascalCase name}}CreateService } from './{{camelCase name}}-create.service';
import { PrismaService } from '@/app/infra/prisma/prisma.service';

describe('{{pascalCase name}}CreateService', () => {
  let service: {{pascalCase name}}CreateService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {{pascalCase name}}CreateService,
        { provide: PrismaService, useValue: {
          {{camelCase name}}: {
            jest.fn(),
          },
        } },
      ],
    }).compile();

    service = module.get<{{pascalCase name}}CreateService>({{pascalCase name}}CreateService)
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('should call the Prisma service with the correct argument', async () => {
      const data = { /* DTO object */ };

      await service.create(data);

      expect(prismaService.{{camelCase name}}.create).toHaveBeenCalledWith({ data });
    });

    it('should return the created {{camelCase name}}', async () => {
      const created{{pascalCase name}} = { /* Prisma {{camelCase name}} object */ };
      prismaService.{{camelCase name}}.create.mockResolvedValueOnce(created{{pascalCase name}})

      const data = { /* DTO object */ };
      const result = await service.create(data);

      expect(result).toEqual(created{{pascalCase name}})
    });
  });
});
