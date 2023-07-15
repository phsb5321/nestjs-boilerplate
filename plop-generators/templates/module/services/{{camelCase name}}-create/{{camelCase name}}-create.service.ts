// {{camelCase name}}-create.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/app/infra/prisma/prisma.service';
import { Create{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/create-{{kebabCase name}}.dto';

@Injectable()
export class {{pascalCase name}}CreateService {
  constructor(private PrismaService) {}

  async create(data: Create{{pascalCase name}}Dto) {
    const {{camelCase name}} = await this.prisma.{{camelCase name}}.create({ data });
    return {{camelCase name}}
  }
}
