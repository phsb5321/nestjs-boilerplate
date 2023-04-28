// create-{{kebabCase name}}.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class Create{{pascalCase name}}Dto {
  @ApiProperty({ maxLength: 50 })
  name: string;

  @ApiProperty({ maxLength: 50 })
  description: string;
}
