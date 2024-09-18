import { Controller, Get, Post, Body } from '@nestjs/common';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getGameState() {
    return this.gameService.getGameState();
  }

  @Post()
  makeMove(@Body() move: any) {
    return this.gameService.makeMove(move);
  }
}
