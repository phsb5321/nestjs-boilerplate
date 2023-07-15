// {{camelCase name}}.module.ts
import { Module } from '@nestjs/common';

// Controllers
import {
  {{pascalCase name}}CreateController,
  {{pascalCase name}}DeleteController,
  {{pascalCase name}}GetController,
  {{pascalCase name}}UpdateController,
} from '@/modules/{{camelCase name}}/controllers';

// Services
import {
  {{pascalCase name}}CreateService,
  {{pascalCase name}}DeleteService,
  {{pascalCase name}}GetService,
  {{pascalCase name}}UpdateService,
} from '@/modules/{{camelCase name}}/services';

// Infra
import { InfraModule } from '@/app/infra/infra.module';

@Module({
  imports: [InfraModule],
  controllers: [
    {{pascalCase name}}CreateController,
    {{pascalCase name}}DeleteController,
    {{pascalCase name}}GetController,
    {{pascalCase name}}UpdateController,
  ],
  [
    {{pascalCase name}}CreateService,
    {{pascalCase name}}DeleteService,
    {{pascalCase name}}GetService,
    {{pascalCase name}}UpdateService,
  ],
})
export class {{pascalCase name}}Module {}
