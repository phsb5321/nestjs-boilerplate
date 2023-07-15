// {{camelCase name}}-get.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/app/infra/prisma/prisma.service';
import { GetPaginated{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/get-paginated-{{kebabCase name}}.dto';

@Injectable()
export class {{pascalCase name}}GetService {
  constructor(private PrismaService) {}

  async findAll(params: GetPaginated{{pascalCase name}}Dto) {
    const { limit, offset, search, orderBy } = params;
    const where = search
      ? {
          OR: [
            { name: { contains: search } },
            { description: { contains: search } },
          ],
        }
      : {};

    const orderByClause = orderBy
      ? {
          [orderBy]: 'asc',
        }
      : {};

    const {{camelCase name}} = await this.prisma.{{camelCase name}}.findMany({
      take: limit,
      skip: offset,
      where,
      orderBy: orderByClause,
    });
    return {{camelCase name}}
  }

  async findOne(id: number) {
    const {{camelCase name}} = await this.prisma.{{camelCase name}}.findUnique({ where: { id } });
    return {{camelCase name}}
  }
}
