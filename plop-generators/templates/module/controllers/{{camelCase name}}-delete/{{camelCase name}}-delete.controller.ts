// {{camelCase name}}-delete.controller.ts
import { Controller, Delete, Param } from '@nestjs/common';
import { {{pascalCase name}}DeleteService } from '@/modules/{{kebabCase name}}/services/{{camelCase name}}-delete/{{camelCase name}}-delete.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('{{kebabCase name}}')
@Controller('{{kebabCase name}}')
export class {{pascalCase name}}DeleteController {
  constructor(private readonly {{camelCase name}}{{pascalCase name}}DeleteService) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a {{camelCase name}} by id' })
  @ApiResponse({ status: 200, description: 'The {{camelCase name}} has been deleted.'})
  remove(@Param('id') string) {
    return this.{{camelCase name}}DeleteService.remove(+id);
  }
}