class Rook extends Piece {
    constructor(square){
        super('rook', 'Black', false, square)
    }
    // the squares rook can move before filtering
    possibleMoves(){

      var moves = [];
      for(let i = 1; i <= 8; i++){
        var square = `${i}-${this.rank}`; 
        if(square != this.square){
            moves.push(square)
       }
        
      }
      for(let i = 0; i < files.length; i++){
          var square = `${this.file}-${files[i]}`;
          if(square != this.square){
          moves.push(square)
          }
      }
      return moves;
    }
}