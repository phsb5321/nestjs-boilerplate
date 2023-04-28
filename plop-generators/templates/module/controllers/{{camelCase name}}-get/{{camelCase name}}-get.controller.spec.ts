// {{camelCase name}}-get.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { {{pascalCase name}}GetController } from './{{camelCase name}}-get.controller';
import { {{pascalCase name}}GetService } from '@/modules/{{kebabCase name}}/services/{{camelCase name}}-get/{{camelCase name}}-get.service';
import { GetPaginated{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/get-paginated-{{kebabCase name}}.dto';

describe('{{pascalCase name}}GetController', () => {
  let controller: {{pascalCase name}}GetController;
  let service: {{pascalCase name}}GetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [{{pascalCase name}}GetController],
      providers: [
        { provide: {{pascalCase name}}GetService, useValue: {
          findAll: jest.fn(),
          findOne: jest.fn(),
        } },
      ],
    }).compile();

    controller = module.get<{{pascalCase name}}GetController>({{pascalCase name}}GetController);
    service = module.get<{{pascalCase name}}GetService>({{pascalCase name}}GetService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should call the service with the correct argument', async () => {
      const getPaginated{{pascalCase name}}Dto: GetPaginated{{pascalCase name}}Dto = { /* DTO object */ };

      await controller.findAll(getPaginated{{pascalCase name}}Dto);

      expect(service.findAll).toHaveBeenCalledWith(getPaginated{{pascalCase name}}Dto);
    });

    it('should return a list of all {{camelCase name}}', async () => {
      const {{camelCase name}}List = [/* list of {{camelCase name}} objects */];
      jest.spyOn(service, 'findAll').mockResolvedValueOnce({{camelCase name}}List);

      const getPaginated{{pascalCase name}}Dto: GetPaginated{{pascalCase name}}Dto = { /* DTO object */ };
      const result = await controller.findAll(getPaginated{{pascalCase name}}Dto);

      expect(result).toBe({{camelCase name}}List);
    });
  });

  describe('findOne', () => {
    it('should call the service with the correct argument', async () => {
      const id = '1';

      await controller.findOne(id);

      expect(service.findOne).toHaveBeenCalledWith(+id);
    });

    it('should return a {{camelCase name}} with the given id', async () => {
      const {{camelCase name}} = { /* {{camelCase name}} object */ };
      jest.spyOn(service, 'findOne').mockResolvedValueOnce({{camelCase name}});

      const id = '1';
      const result = await controller.findOne(id);

      expect(result).toBe({{camelCase name}});
    });

    it('should handle service errors', async () => {
      const errorMessage = 'Error finding {{camelCase name}}';
      jest.spyOn(service, 'findOne').mockImplementationOnce(() => {
        throw new Error(errorMessage);
      });

      const id = '1';

      try {
        await controller.findOne(id);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
