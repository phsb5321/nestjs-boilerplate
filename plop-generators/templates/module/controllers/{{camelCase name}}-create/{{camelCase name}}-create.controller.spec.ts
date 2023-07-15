// {{camelCase name}}-create.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { {{pascalCase name}}CreateController } from './{{camelCase name}}-create.controller';
import { {{pascalCase name}}CreateService } from '@/modules/{{kebabCase name}}/services/{{camelCase name}}-create/{{camelCase name}}-create.service';
import { Create{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/create-{{kebabCase name}}.dto';

describe('{{pascalCase name}}CreateController', () => {
  let controller: {{pascalCase name}}CreateController;
  let service: {{pascalCase name}}CreateService;
  let create{{pascalCase name}}Dto: Create{{pascalCase name}}Dto;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [{{pascalCase name}}CreateController],
      providers: [
        {
          provide: {{pascalCase name}}CreateService,
          useValue: {
            create: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<{{pascalCase name}}CreateController>({{pascalCase name}}CreateController);
    service = module.get<{{pascalCase name}}CreateService>({{pascalCase name}}CreateService);

    // initializing create{{pascalCase name}}Dto with the required properties
    create{{pascalCase name}}Dto = {
      name: 'Test name',
      description: 'Test description',
      // add more properties if required according to your Create{{pascalCase name}}Dto definition
    };
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call the service with the correct arguments', async () => {
      await controller.create(create{{pascalCase name}}Dto);

      expect(service.create).toHaveBeenCalledWith(create{{pascalCase name}}Dto);
    });

    it('should return the created entity', async () => {
      const created{{pascalCase name}} = {
        id: 1,
        name: 'Test name',
        description: 'Test description',
        createdAt: new Date(),
        updatedAt: new Date(),
        // define other properties according to your type
      };
      jest.spyOn(service, 'create').mockResolvedValue(created{{pascalCase name}});

      const result = await controller.create(create{{pascalCase name}}Dto);

      expect(result).toBe(created{{pascalCase name}});
    });

    it('should handle service errors', async () => {
      const errorMessage = 'Error creating {{camelCase name}}';
      jest.spyOn(service, 'create').mockImplementationOnce(() => {
        throw new Error(errorMessage);
      });

      try {
        await controller.create(create{{pascalCase name}}Dto);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
