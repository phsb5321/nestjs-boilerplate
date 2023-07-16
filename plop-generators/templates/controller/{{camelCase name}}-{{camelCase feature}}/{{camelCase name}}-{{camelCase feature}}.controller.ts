import { Controller, Post, Body } from '@nestjs/common';
import { {{pascalCase name}}{{pascalCase feature}}Service } from '@/modules/{{kebabCase name}}/services/{{kebabCase name}}/{{kebabCase name}}.service';
import { {{pascalCase feature}}{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/{{kebabCase feature}}-{{kebabCase name}}.dto';

// {{pascalCase name}}{{pascalCase feature}}Controller handles HTTP requests for the {{kebabCase name}} resource.
@Controller('{{kebabCase name}}')
export class {{pascalCase name}}{{pascalCase feature}}Controller {
  constructor(private readonly {{camelCase name}}Service: {{pascalCase name}}{{pascalCase feature}}Service) {}

  // {{camelCase name}} is the handler for the POST {{kebabCase feature}} endpoint.
  // It uses {{camelCase name}}Service to execute the core logic.
  @Post('{{kebabCase feature}}')
  async {{camelCase name}}(@Body() {{camelCase feature}}Dto: {{pascalCase feature}}{{pascalCase name}}Dto) {
    return await this.{{camelCase name}}Service.{{camelCase name}}({{camelCase feature}}Dto);
  }
}
