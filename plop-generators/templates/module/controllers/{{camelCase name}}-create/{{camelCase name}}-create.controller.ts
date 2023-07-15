// {{camelCase name}}-create.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { Create{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/create-{{kebabCase name}}.dto';
import { {{pascalCase name}}CreateService } from '@/modules/{{kebabCase name}}/services/{{camelCase name}}-create/{{camelCase name}}-create.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('{{kebabCase name}}')
@Controller('{{kebabCase name}}')
export class {{pascalCase name}}CreateController {
  constructor(private readonly {{camelCase name}}{{pascalCase name}}CreateService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new {{camelCase name}}' })
  @ApiResponse({ status: 201, description: 'The {{camelCase name}} has been created.'})
  create(@Body() create{{pascalCase name}}Create{{pascalCase name}}Dto) {
    return this.{{camelCase name}}CreateService.create(create{{pascalCase name}}Dto)
  }
}