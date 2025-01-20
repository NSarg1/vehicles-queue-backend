import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateVehicleQueueDto } from './vehicles.dto';
import { Vehicle } from './vehicles.entity';
import { VehiclesGateway } from './vehicles.gateway';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehiclesRepository: Repository<Vehicle>,
    private readonly vehiclesGateway: VehiclesGateway, // Inject VehiclesGateway
  ) {}

  findAll(paginationQuery: any) {
    const { limit, offset, charger } = paginationQuery;

    return this.vehiclesRepository.find({
      skip: offset,
      take: limit,
      where: { charger },
    });
  }

  async create(createVehicleDto: CreateVehicleQueueDto) {
    const vehicle = this.vehiclesRepository.create(createVehicleDto);
    const savedVehicle = await this.vehiclesRepository.save(vehicle);
    this.vehiclesGateway.emitVehicleCreated(savedVehicle); // Emit socket message
    return savedVehicle;
  }

  async remove(id: string) {
    const vehicle = await this.vehiclesRepository.findOne({
      where: { id: +id },
    });
    if (!vehicle) {
      throw new Error('Vehicle not found');
    }
    const removedVehicle = await this.vehiclesRepository.remove(vehicle);
    this.vehiclesGateway.emitVehicleDeleted({ ...removedVehicle, id: +id }); // Emit socket message
    return removedVehicle;
  }
}
