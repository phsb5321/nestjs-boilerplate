import { Module } from '@nestjs/common';
import { PrismaService } from '@/app/infra/prisma/prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class InfraModule {}
