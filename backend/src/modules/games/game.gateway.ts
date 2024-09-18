import { WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';
import { GameService } from './game.service';

@WebSocketGateway()
export class GameGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly gameService: GameService) {}

  @SubscribeMessage('move')
  handleMove(@MessageBody() move: any): void {
    const updatedGameState = this.gameService.makeMove(move);
    this.server.emit('gameUpdate', updatedGameState);
  }
}
