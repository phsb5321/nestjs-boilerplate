// {{camelCase name}}-delete.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/app/infra/prisma/prisma.service';

@Injectable()
export class {{pascalCase name}}DeleteService {
  constructor(private PrismaService) {}

  async remove(id: number) {
    const {{camelCase name}} = await this.prisma.{{camelCase name}}.delete({ where: { id } });
    return {{camelCase name}}
  }
}
