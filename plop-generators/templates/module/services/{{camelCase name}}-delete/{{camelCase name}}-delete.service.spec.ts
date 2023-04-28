// {{camelCase name}}-delete.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { {{pascalCase name}}DeleteService } from './{{camelCase name}}-delete.service';
import { PrismaService } from '@/app/infra/prisma/prisma.service';

describe('{{pascalCase name}}DeleteService', () => {
  let service: {{pascalCase name}}DeleteService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {{pascalCase name}}DeleteService,
        { provide: PrismaService, useValue: {
          {{camelCase name}}: {
            delete: jest.fn(),
          },
        } },
      ],
    }).compile();

    service = module.get<{{pascalCase name}}DeleteService>({{pascalCase name}}DeleteService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('remove', () => {
    it('should call the Prisma service with the correct argument', async () => {
      const id = 1;

      await service.remove(id);

      expect(prismaService.{{camelCase name}}.delete).toHaveBeenCalledWith({ where: { id } });
    });

    it('should return the deleted {{camelCase name}} object', async () => {
      const deleted{{pascalCase name}} = { /* Prisma {{camelCase name}} object */ };
      prismaService.{{camelCase name}}.delete.mockResolvedValueOnce(deleted{{pascalCase name}});

      const id = 1;
      const result = await service.remove(id);

      expect(result).toEqual(deleted{{pascalCase name}});
    });
  });
});
