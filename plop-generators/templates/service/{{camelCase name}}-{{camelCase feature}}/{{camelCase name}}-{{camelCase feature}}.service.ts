// {{camelCase feature}}-{{camelCase entity}}.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/app/infra/prisma/prisma.service';
import { {{pascalCase entity}}{{pascalCase feature}}Dto } from '@/modules/{{camelCase entity}}/dto/{{camelCase feature}}-{{camelCase entity}}.dto';

@Injectable()
export class {{pascalCase entity}}{{pascalCase feature}}Service {
  constructor(private readonly prismaService: PrismaService) { }

  async {{camelCase feature}}{{pascalCase entity}}(dto: {{pascalCase entity}}{{pascalCase feature}}Dto): Promise<void> {
    // TODO: Implement
  }
}