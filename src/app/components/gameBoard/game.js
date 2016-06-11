(function() {
  'use strict';

  angular
      .module('connect4')
      .service('board', board);

  /** @ngInject */
  function board() {
    var rowNum = 6;
    var colNum = 7;
    var board;
    var playerTurn;
    var versusMachine = true;
    var difficultyLevel = 0;

    this.setup = function(){
      setupBoard();
      playerTurn = 0; //TODO: Coin toss
      status = "player";
    }

    this.getTec = getTec;

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








class Game{
  var rowNum = 6;
  var colNum = 7;
  var board;
  var playerTurn;
  var versusMachine = true;
  var difficultyLevel = 0;



}


module.export = new Game();
