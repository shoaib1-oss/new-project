import { Injectable } from '@nestjs/common';

@Injectable()
export class GameService {
  private gameState: any = {};  // Store the chess game state

  getGameState() {
    return this.gameState;
  }

  makeMove(move: any) {
    // Process the chess move and update the game state
    return { success: true, gameState: this.gameState };
  }
}
