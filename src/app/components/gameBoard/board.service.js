(function() {
  'use strict';

  angular
      .module('connect4')
      .service('Board', Board);

  /** @ngInject */
  function Board() {
    var rowNum = 7;
    var colNum = 6;
    var board;
    var versusMachine = true;
    var difficultyLevel = 0;
    var currentPlayer;
    var status; //play, win, exit

    function setup(){
      initBoard();
      currentPlayer = 1; // Math.floor((Math.random()) + 2);
      status = "play";
    }

    function initBoard(){
      board = [];
      for(var i = 0; i < colNum; i++){
        board[i]=[]
        for(var j = 0; j < rowNum; j++){
          board[i][j]=0;
        }
      }
    }

    this.play = function(player,column){
      if (player != currentPlayer){
        return false;
      }

      var nextPos = nextRowAvailable(column);
      if (nextPos == -1){
        return false;
      }
      board[column][nextPos] = player;

      endTurn();
      return true;
    }



    this.getBoard = function (){
      return board;
    }

    this.getStatus = function (){
      return status + '_' + currentPlayer;
    }

    function nextRowAvailable(column){
      for(var i = 0; i < rowNum; i++)
      {
        if (board[column][i] != 0)
        {
          return i-1;
        }
      }
      return -1;
    }

    function endTurn(){
      if (currentPlayer == 1){
        currentPlayer = 2;
      }else {
        currentPlayer = 1;
      }


    }

    function waitForMove(callback){
      var waitFor = Math.floor((Math.random())*3000);

      setTimeout(function(){
        var choice = machinePlayColumn();
        this.play(2, choice);

        callback();
      },waitFor);
    }

    function machinePlayColumn(){
      if (difficultyLevel == 0){
        return Math.floor((Math.random()* colNum-1));
      }
    }

    setup();
  }
})();
