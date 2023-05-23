import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];
  currentPlayer: string = 'X';
  winner: string = '';
  winnigLines = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ], // rows
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ], // cols
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ], // diagonal
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  constructor() {}

  ngOnInit(): void {}

  makeMove(row: number, col: number): void {
    if (this.board[row][col]) return;
    this.board[row][col] = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    this.checkWinner();
  }

  checkWinner() {
    for (let line of this.winnigLines) {
      const [r1, c1] = line[0];
      const [r2, c2] = line[1];
      const [r3, c3] = line[2];

      if (
        this.board[r1][c1] !== '' &&
        this.board[r1][c1] === this.board[r2][c2] &&
        this.board[r2][c2] === this.board[r3][c3]
      ) {
        this.winner = this.board[r1][c1];
        break;
      }
    }
  }

  resetGame() {
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
    this.currentPlayer = 'X';
  }
}
