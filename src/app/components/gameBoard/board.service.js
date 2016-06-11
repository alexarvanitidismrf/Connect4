(function() {
  'use strict';

  angular
      .module('connect4')
      .service('Board', Board);

  /** @ngInject */
  function Board() {
    console.log('sad');
    var rowNum = 7;
    var colNum = 6;
    var board;
    var playerTurn;
    var versusMachine = true;
    var difficultyLevel = 0;

    this.setup = function(){
      this.initBoard();
      playerTurn = 0; //TODO: Coin toss
      //status = "player";
    }

    this.initBoard = function (){
      board = [];
      for(var i = 0; i < colNum; i++){
        board[i]=[]
        for(var j = 0; j < rowNum; j++){
          board[i][j]=0;
        }
      }
    }

    this.play = function(player,column){
      if (player != playerTurn){
        return false;
      }

    }

    this.getBoard = function (){
      return board;
    }

    this.getStatus = function (){
      return
    }

    this.setup();
  }
})();
