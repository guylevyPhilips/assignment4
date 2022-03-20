import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() gameStarted = new EventEmitter<{ incNumber: number }>();
  num: number = 0;
  ref: any;

  constructor() { }

  ngOnInit(): void {
  }

  onGameStarted() {
    this.ref = setInterval(this.fireGameStarted, 1000);
  }

  onGameStopped(){
    clearInterval(this.ref);
  }

  fireGameStarted = (): void =>{
    this.gameStarted.emit({incNumber: this.num++});
  }

}
