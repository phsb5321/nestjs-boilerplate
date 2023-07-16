// {{camelCase feature}}-{{camelCase entity}}.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '@/app/infra/prisma/prisma.service';
import { {{pascalCase entity}}{{pascalCase feature}}Service } from '@/modules/{{camelCase entity}}/services/{{camelCase feature}}-{{camelCase entity}}.service';
import { {{pascalCase entity}}{{pascalCase feature}}Dto } from '@/modules/{{camelCase entity}}/dto/{{camelCase feature}}-{{camelCase entity}}.dto';

describe('{{pascalCase entity}}{{pascalCase feature}}Service', () => {
  let service: {{pascalCase entity}}{{pascalCase feature}}Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [{{pascalCase entity}}{{pascalCase feature}}Service, PrismaService],
    }).compile();

    service = module.get<{{pascalCase entity}}{{pascalCase feature}}Service>({{pascalCase entity}}{{pascalCase feature}}Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('{{camelCase feature}}{{pascalCase entity}} should process the {{pascalCase entity}}{{pascalCase feature}}Dto', async () => {
    const dto = new {{pascalCase entity}}{{pascalCase feature}}Dto();
    // Populate dto with valid data...

    // Assuming the method returns a Promise, it should not throw an error when resolved
    await expect(service.{{camelCase feature}}{{pascalCase entity}}(dto)).resolves.not.toThrow();
  });
});