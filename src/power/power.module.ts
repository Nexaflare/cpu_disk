import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  exports: [PowerService], // Step 1: makes the class available to other modules within the projects
})
export class PowerModule {}
