// modules.module.ts
import { Module } from '@nestjs/common';

// Add imports here
import { InfraModule } from '@/app/infra/infra.module';

@Module({
  imports: [
    // Infra
    InfraModule,

    // Modules
    // Add modules here
  ],
})
export class ModulesModule {}
