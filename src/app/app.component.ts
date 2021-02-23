import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  turn = 1;

  winner = ""

  row = 0;
  col = 0;
  show = [
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*"]
  ];

  checkWin(){
    var i: number = 0
    var j: number = 0

    for (i = 0; i < 5; i++) {
      var win1: number = 0;
      var win2: number = 0;
      for (j = 0; j < 5; j++) {
        if (this.show[i][j] == "1"){
          win1++;
        }
        else{
          win1 = 0;
        }
        if (this.show[i][j] == "2"){
          win2++;
        }
        else{
          win2 = 0;
        }
        if (win1 == 4){
          this.winner = "Player1";
          return;
        }
        if (win2 == 4){
          this.winner = "Player2";
          return;
        }
      }
    }

    for (i = 0; i < 5; i++) {
      var win1: number = 0;
      var win2: number = 0;
      for (j = 0; j < 5; j++) {
        if (this.show[j][i] == "1"){
          win1++;
        }
        else{
          win1 = 0;
        }
        if (this.show[j][i] == "2"){
          win2++;
        }
        else{
          win2 = 0;
        }
        if (win1 == 4){
          this.winner = "Player1";
          return;
        }
        if (win2 == 4){
          this.winner = "Player2";
          return;
        }
      }
    }

  }

  changeTurn(){
    if (this.winner != ""){
      alert("Game sudah selesai");
      return;
    }
    this.row = this.row * 1
    this.col = this.col * 1
    if (this.row < 1 || this.row > 5 || this.col < 1 || this.col > 5){
      alert("Input salah");
      return
    }
    if (this.show[this.row - 1][this.col - 1] != "*"){
      alert("Sudah terisi");
      return
    }
    this.show[this.row - 1][this.col - 1] = this.turn.toString()
    if (this.turn == 1){
      this.turn = 2;
    }
    else{
      this.turn = 1;
    }
    this.checkWin();
    if (this.winner != ""){
      alert(this.winner + " win!!")
    }
  }

}
