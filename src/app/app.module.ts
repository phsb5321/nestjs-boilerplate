// src/app/app.module.ts
import { AppController } from '@/app/controllers/app.controller';
import { AppService } from '@/app/services/app.service';
import { ModulesModule } from '@/modules/modules.module';

import { Module } from '@nestjs/common';
import { InfraModule } from '@/app/infra/infra.module';

@Module({
  imports: [ModulesModule, InfraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
