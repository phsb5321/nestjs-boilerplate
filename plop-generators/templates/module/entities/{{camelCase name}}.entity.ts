// {{camelCase name}}.entity.ts
import { IsNotEmpty, IsOptional, IsString, Length } from 'class-validator';

export class {{pascalCase name}} {
  @IsNotEmpty()
  @IsString()
  @Length(1, 50)
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  constructor(name: string, description?: string) {
    this.name = name;
    this.description = description;
  }
}
