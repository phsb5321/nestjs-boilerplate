// {{camelCase name}}-update.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { {{pascalCase name}}UpdateController } from './{{camelCase name}}-update.controller';
import { {{pascalCase name}}UpdateService } from '@/modules/{{kebabCase name}}/services/{{camelCase name}}-update/{{camelCase name}}-update.service';
import { Update{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/update-{{kebabCase name}}.dto';

describe('{{pascalCase name}}UpdateController', () => {
  let controller: {{pascalCase name}}UpdateController;
  let service: {{pascalCase name}}UpdateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [{{pascalCase name}}UpdateController],
      providers: [
        { provide: {{pascalCase name}}UpdateService, useValue: {
          update: jest.fn(),
        } },
      ],
    }).compile();

    controller = module.get<{{pascalCase name}}UpdateController>({{pascalCase name}}UpdateController);
    service = module.get<{{pascalCase name}}UpdateService>({{pascalCase name}}UpdateService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('update', () => {
    it('should call the service with the correct arguments', async () => {
      const id = '1';
      const update{{pascalCase name}}Dto: Update{{pascalCase name}}Dto = { /* DTO object */ };

      await controller.update(id, update{{pascalCase name}}Dto);

      expect(service.update).toHaveBeenCalledWith(+id, update{{pascalCase name}}Dto);
    });

    it('should return the updated entity', async () => {
      const id = '1';
      const update{{pascalCase name}}Dto: Update{{pascalCase name}}Dto = { /* DTO object */ };
      const updated{{pascalCase name}} = { /* updated entity object */ };
      jest.spyOn(service, 'update').mockResolvedValueOnce(updated{{pascalCase name}});

      const result = await controller.update(id, update{{pascalCase name}}Dto);

      expect(result).toBe(updated{{pascalCase name}});
    });

    it('should handle service errors', async () => {
      const errorMessage = 'Error updating {{camelCase name}}';
      jest.spyOn(service, 'update').mockImplementationOnce(() => {
        throw new Error(errorMessage);
      });

      const id = '1';
      const update{{pascalCase name}}Dto: Update{{pascalCase name}}Dto = { /* DTO object */ };

      try {
        await controller.update(id, update{{pascalCase name}}Dto);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
