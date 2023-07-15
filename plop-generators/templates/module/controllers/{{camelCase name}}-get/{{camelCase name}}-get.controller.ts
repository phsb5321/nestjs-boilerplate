// {{camelCase name}}-get.controller.ts
import { Controller, Get, Param, Query } from '@nestjs/common';
import { {{pascalCase name}}GetService } from '@/modules/{{kebabCase name}}/services/{{camelCase name}}-get/{{camelCase name}}-get.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { GetPaginated{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/get-paginated-{{kebabCase name}}.dto';

@ApiTags('{{kebabCase name}}')
@Controller('{{kebabCase name}}')
export class {{pascalCase name}}GetController {
  constructor(private readonly {{camelCase name}}{{pascalCase name}}GetService) {}

  @Get()
  @ApiOperation({ summary: 'Find all {{camelCase name}} with pagination, search, and orderBy options' })
  @ApiResponse({ status: 200, description: 'List of all {{camelCase name}}.' })
  findAll(@Query() getPaginated{{pascalCase name}}GetPaginated{{pascalCase name}}Dto) {
    return this.{{camelCase name}}GetService.findAll(getPaginated{{pascalCase name}}Dto)
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find a {{camelCase name}} by id' })
  @ApiResponse({ status: 200, description: 'The {{camelCase name}} with the given id.' })
  findOne(@Param('id') string) {
    return this.{{camelCase name}}GetService.findOne(+id);
  }
}
