import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsPositive()
  @IsOptional()
  //   @Type(() => Number)  ---> NO NECESSARY anymore as in the main.ts enabled 'enableImplicitConversion' property
  limit: number;

  @IsPositive()
  @IsOptional()
  //   @Type(() => Number)  ---> NO NECESSARY anymore as in the main.ts enabled 'enableImplicitConversion' property
  offset: number;
}
