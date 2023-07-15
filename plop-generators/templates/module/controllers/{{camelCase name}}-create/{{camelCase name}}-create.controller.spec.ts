// {{camelCase name}}-create.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { {{pascalCase name}}CreateController } from './{{camelCase name}}-create.controller';
import { {{pascalCase name}}CreateService } from '@/modules/{{kebabCase name}}/services/{{camelCase name}}-create/{{camelCase name}}-create.service';
import { Create{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/create-{{kebabCase name}}.dto';

describe('{{pascalCase name}}CreateController', () => {
  let controller: {{pascalCase name}}CreateController;
  let service: {{pascalCase name}}CreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [{{pascalCase name}}CreateController],
      [
        { provide: {{pascalCase name}}CreateService, useValue: {
          jest.fn(),
        } },
      ],
    }).compile();

    controller = module.get<{{pascalCase name}}CreateController>({{pascalCase name}}CreateController)
    service = module.get<{{pascalCase name}}CreateService>({{pascalCase name}}CreateService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    it('should call the service with the correct arguments', async () => {
      const create{{pascalCase name}}Create{{pascalCase name}}Dto = { /* create DTO object */ };

      await controller.create(create{{pascalCase name}}Dto)

      expect(service.create).toHaveBeenCalledWith(create{{pascalCase name}}Dto)
    });

    it('should return the created entity', async () => {
      const created{{pascalCase name}} = { /* created entity object */ };
      jest.spyOn(service, 'create').mockResolvedValueOnce(created{{pascalCase name}})

      const create{{pascalCase name}}Create{{pascalCase name}}Dto = { /* create DTO object */ };
      const result = await controller.create(create{{pascalCase name}}Dto)

      expect(result).toBe(created{{pascalCase name}})
    });

    it('should handle service errors', async () => {
      const errorMessage = 'Error creating {{camelCase name}}';
      jest.spyOn(service, 'create').mockImplementationOnce(() => {
        throw new Error(errorMessage);
      });

      const create{{pascalCase name}}Create{{pascalCase name}}Dto = { /* create DTO object */ };

      try {
        await controller.create(create{{pascalCase name}}Dto)
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
