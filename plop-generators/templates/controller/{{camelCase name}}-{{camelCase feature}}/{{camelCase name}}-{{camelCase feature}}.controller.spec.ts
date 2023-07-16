import { Test, TestingModule } from '@nestjs/testing';
import { {{pascalCase name}}{{pascalCase feature}}Controller } from './{{camelCase name}}-{{camelCase feature}}.controller';
import { {{pascalCase name}}{{pascalCase feature}}Service } from '@/modules/{{kebabCase name}}/services/{{kebabCase name}}/{{kebabCase name}}.service';
import { {{pascalCase feature}}{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/{{kebabCase feature}}-{{kebabCase name}}.dto';

describe('{{pascalCase name}}{{pascalCase feature}}Controller', () => {
  let controller: {{pascalCase name}}{{pascalCase feature}}Controller;
  let service: {{pascalCase name}}{{pascalCase feature}}Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [{{pascalCase name}}{{pascalCase feature}}Controller],
      providers: [
        {
          provide: {{pascalCase name}}{{pascalCase feature}}Service,
          useValue: {
            {{camelCase name}}: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<{{pascalCase name}}{{pascalCase feature}}Controller>({{pascalCase name}}{{pascalCase feature}}Controller);
    service = module.get<{{pascalCase name}}{{pascalCase feature}}Service>({{pascalCase name}}{{pascalCase feature}}Service);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should call the service when {{camelCase name}} method is called', async () => {
    const dto = new {{pascalCase feature}}{{pascalCase name}}Dto();
    const result = {};
    jest.spyOn(service, '{{camelCase name}}').mockImplementation(() => Promise.resolve(result));

    expect(await controller.{{camelCase name}}(dto)).toBe(result);
    expect(service.{{camelCase name}}).toHaveBeenCalledWith(dto);
  });
});
