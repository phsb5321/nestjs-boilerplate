import { Test, TestingModule } from '@nestjs/testing';
import { {{pascalCase name}}UpdateService } from './{{camelCase name}}-update.service';
import { PrismaService } from '@/app/infra/prisma/prisma.service';
import { {{pascalCase name}} } from '@prisma/client';

describe('{{pascalCase name}}UpdateService', () => {
  let service: {{pascalCase name}}UpdateService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {{pascalCase name}}UpdateService,
        {
          provide: PrismaService,
          useValue: {
            {{camelCase name}}: {
              update: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<{{pascalCase name}}UpdateService>({{pascalCase name}}UpdateService);
    prismaService = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('update', () => {
    it('should update a {{camelCase name}} by id', async () => {
      const id = 1;
      const updateData = {
        name: 'Updated {{pascalCase name}}',
        description: 'This is an updated {{camelCase name}}.',
      };
      const updated{{pascalCase name}}: {{pascalCase name}} = {
        id,
        name: updateData.name,
        description: updateData.description,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(prismaService.{{camelCase name}}, 'update').mockResolvedValueOnce(updated{{pascalCase name}});

      const result = await service.update(id, updateData);

      expect(result).toEqual(updated{{pascalCase name}});
      expect(prismaService.{{camelCase name}}.update).toHaveBeenCalledWith({
        where: { id },
        data: updateData,
      });
    });
  });
});
