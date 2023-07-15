// {{camelCase name}}-delete.controller.ts
import { {{pascalCase name}}DeleteService } from '@/modules/{{kebabCase name}}/services/{{kebabCase name}}-delete/{{kebabCase name}}-delete.service';
import { Controller, Delete, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('{{kebabCase name}}')
@Controller('{{kebabCase name}}')
export class {{pascalCase name}}DeleteController {
  constructor(private readonly {{camelCase name}}{{pascalCase name}}DeleteService: {{pascalCase name}}DeleteService) {}

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a {{camelCase name}} by id' })
  @ApiResponse({ status: 200, description: 'The {{camelCase name}} has been deleted.' })
  remove(@Param('id') id: string) {
    return this.{{camelCase name}}{{pascalCase name}}DeleteService.remove(+id);
  }
}
