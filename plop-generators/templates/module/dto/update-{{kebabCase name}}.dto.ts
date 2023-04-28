// update-{{kebabCase name}}.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { PartialType } from '@nestjs/mapped-types';

import { Create{{pascalCase name}}Dto } from '@/modules/{{kebabCase name}}/dto/create-{{kebabCase name}}.dto';

export class Update{{pascalCase name}}Dto extends PartialType(Create{{pascalCase name}}Dto) {
  @ApiProperty({ maxLength: 50 })
  description?: string;
}
