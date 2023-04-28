// get-paginated-{{kebabCase name}}.dto.ts
import { IsOptional, IsPositive, IsString } from 'class-validator';

export class GetPaginated{{pascalCase name}}Dto {
  @IsOptional()
  @IsPositive()
  limit?: number;

  @IsOptional()
  @IsPositive()
  offset?: number;

  @IsOptional()
  @IsString()
  search?: string;

  @IsOptional()
  @IsString()
  orderBy?: string;
}
