// {{camelCase name}}-update.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/app/infra/prisma/prisma.service';
import { Update{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/update-{{kebabCase name}}.dto';

@Injectable()
export class {{pascalCase name}}UpdateService {
  constructor(private prisma: PrismaService) {}

  async update(id: number, data: Update{{pascalCase name}}Dto) {
    const {{camelCase name}} = await this.prisma.{{camelCase name}}.update({ where: { id }, data });
    return {{camelCase name}};
  }
}
