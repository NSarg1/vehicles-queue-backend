import { IsString } from 'class-validator';

export class CreateVehicleQueueDto {
  @IsString()
  readonly plate: string;
  @IsString()
  readonly charger: string;
}

export class GetVehiclesQueueDto {
  @IsString()
  readonly charger: string;
}
