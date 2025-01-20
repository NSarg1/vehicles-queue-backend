import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { VehiclesService } from './vehicles.service';

import { PaginationQueryDto } from 'src/common/common.dto';
import { CreateVehicleQueueDto, GetVehiclesQueueDto } from './vehicles.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehicleService: VehiclesService) {}

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto & GetVehiclesQueueDto) {
    return this.vehicleService.findAll(paginationQuery);
  }
  @Post()
  create(@Body() createVehicleQueueDto: CreateVehicleQueueDto) {
    return this.vehicleService.create(createVehicleQueueDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.vehicleService.remove(id);
  }
}
