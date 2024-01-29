import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';
@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {} // before creating the cpu service, nest will create an instance of the power service and provide it to the cpu constructor
  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from PowerService');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
