import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { CreateVehicleQueueDto } from './vehicles.dto';

@WebSocketGateway({ cors: { origin: '*' } })
export class VehiclesGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  afterInit() {
    console.log('WebSocket Gateway initialized');
  }

  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }

  emitVehicleCreated(vehicle: CreateVehicleQueueDto) {
    this.server.emit(`${vehicle.charger}.vehicle.created`, vehicle);
  }

  emitVehicleDeleted(vehicle: CreateVehicleQueueDto & { id: number }) {
    this.server.emit(`${vehicle.charger}.vehicle.deleted`, vehicle);
  }
}
