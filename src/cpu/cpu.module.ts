import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from '../power/power.module';

@Module({
  imports: [PowerModule], // Step 2: connected the power module to the cpu module
  providers: [CpuService],
  // by default services are private inside the @Module unless we write them in the 'exports'
  exports: [CpuService],
})
export class CpuModule {}
