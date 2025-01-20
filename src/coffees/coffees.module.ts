import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Event } from 'src/events/events.entity';
import { CoffeesGateway } from './coffees.gateway';
import { Coffee, Flavor } from './coffees.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [CoffeesService, CoffeesGateway],
})
export class CoffeesModule {}
