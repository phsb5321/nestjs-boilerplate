// {{camelCase name}}-delete.controller.spec.ts
import { {{pascalCase name}}DeleteService } from '@/modules/{{kebabCase name}}/services/{{kebabCase name}}-delete/{{kebabCase name}}-delete.service';
import { {{pascalCase name}}DeleteController } from './{{camelCase name}}-delete.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('{{pascalCase name}}DeleteController', () => {
  let controller: {{pascalCase name}}DeleteController;
  let service: {{pascalCase name}}DeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [{{pascalCase name}}DeleteController],
      providers: [
        {
          provide: {{pascalCase name}}DeleteService,
          useValue: {
            remove: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<{{pascalCase name}}DeleteController>({{pascalCase name}}DeleteController);
    service = module.get<{{pascalCase name}}DeleteService>({{pascalCase name}}DeleteService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('remove', () => {
    it('should call the service with the correct argument', async () => {
      const id = '1';

      await controller.remove(id);

      expect(service.remove).toHaveBeenCalledWith(+id);
    });

    it('should return the deleted entity', async () => {
      const deleted{{pascalCase name}} = {
        id: 1,
        name: 'test',
        description: 'test',
        createdAt: new Date(),
        updatedAt: new Date(),
      }; // the deleted entity object needs to match the expected type
      jest.spyOn(service, 'remove').mockResolvedValueOnce(deleted{{pascalCase name}});

      const id = '1';
      const result = await controller.remove(id);

      expect(result).toBe(deleted{{pascalCase name}});
    });

    it('should handle service errors', async () => {
      const errorMessage = 'Error deleting {{camelCase name}}';
      jest.spyOn(service, 'remove').mockImplementationOnce(() => {
        throw new Error(errorMessage);
      });

      const id = '1';

      try {
        await controller.remove(id);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
