import { Test, TestingModule } from '@nestjs/testing';
import { {{pascalCase name}}GetService } from './{{camelCase name}}-get.service';
import { PrismaService } from '@/app/infra/prisma/prisma.service';
import { GetPaginated{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/get-paginated-{{kebabCase name}}.dto';

describe('{{pascalCase name}}GetService', () => {
  let service: {{pascalCase name}}GetService;
  let prismaService: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {{pascalCase name}}GetService,
        {
          provide: PrismaService,
          useValue: {
            {{camelCase name}}: {
              jest.fn(),
              findUnique: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<{{pascalCase name}}GetService>({{pascalCase name}}GetService)
    prismaService = module.get<PrismaService>(PrismaService);
  });

  describe('findAll', () => {
    it('should return an array of {{camelCase name}}', async () => {
      const getPaginated{{pascalCase name}}GetPaginated{{pascalCase name}}Dto = {
        limit: 10,
        offset: 0,
        search: '',
        orderBy: '',
      };
      const expected{{pascalCase name}} = [{ id: 1, name: 'Test {{camelCase name}}' }];
      jest.spyOn(prismaService.{{camelCase name}}, 'findMany').mockResolvedValue(expected{{pascalCase name}})

      const result = await service.findAll(getPaginated{{pascalCase name}}Dto)

      expect(result).toEqual(expected{{pascalCase name}})
      expect(prismaService.{{camelCase name}}.findMany).toHaveBeenCalledWith({
        take: getPaginated{{pascalCase name}}Dto.limit,
        skip: getPaginated{{pascalCase name}}Dto.offset,
        where: {},
        {},
      })
    });
  });

  describe('findOne', () => {
    it('should return a {{camelCase name}} with the given id', async () => {
      const expected{{pascalCase name}} = { id: 1, name: 'Test {{camelCase name}}' };
      jest.spyOn(prismaService.{{camelCase name}}, 'findUnique').mockResolvedValue(expected{{pascalCase name}})

      const result = await service.findOne(1);

      expect(result).toEqual(expected{{pascalCase name}})
      expect(prismaService.{{camelCase name}}.findUnique).toHaveBeenCalledWith({
        where: {
          id: 1,
        },
      });
    });
  });
});
