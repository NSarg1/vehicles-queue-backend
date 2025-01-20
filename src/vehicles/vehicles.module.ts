import { Module } from '@nestjs/common';
import { VehiclesController } from './vehicles.controller';
import { VehiclesService } from './vehicles.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Event } from 'src/events/events.entity';
import { Vehicle } from './vehicles.entity';
import { VehiclesGateway } from './vehicles.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, Event])],
  controllers: [VehiclesController],
  providers: [VehiclesService, VehiclesGateway],
})
export class VehiclesModule {}
