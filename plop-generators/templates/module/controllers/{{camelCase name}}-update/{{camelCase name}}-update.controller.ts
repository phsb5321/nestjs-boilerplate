// {{camelCase name}}-update.controller.ts
import { Controller, Put, Param, Body } from '@nestjs/common';
import { Update{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/update-{{kebabCase name}}.dto';
import { {{pascalCase name}}UpdateService } from '@/modules/{{kebabCase name}}/services/{{camelCase name}}-update/{{camelCase name}}-update.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('{{kebabCase name}}')
@Controller('{{kebabCase name}}')
export class {{pascalCase name}}UpdateController {
  constructor(private readonly {{camelCase name}}{{pascalCase name}}UpdateService) {}

  @Put(':id')
  @ApiOperation({ summary: 'Update a {{camelCase name}} by id' })
  @ApiResponse({ status: 200, description: 'The {{camelCase name}} has been updated.'})
  update(@Param('id') string, @Body() update{{pascalCase name}}Update{{pascalCase name}}Dto) {
    return this.{{camelCase name}}UpdateService.update(+id, update{{pascalCase name}}Dto)
  }
}
