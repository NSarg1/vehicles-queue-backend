import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './coffees.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class CoffeesGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly coffeesService: CoffeesService) {}

  @SubscribeMessage('createCoffee')
  async create(@MessageBody() data: CreateCoffeeDto) {
    await this.coffeesService.create(data);
    this.server.emit('newCoffee', data);
  }
}
