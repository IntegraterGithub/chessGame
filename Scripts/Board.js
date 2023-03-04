
class Board {
  constructor(fen='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'){
    this.positionFen = fen // fen 
  }
  renderPosition(){
    
      var fenFields = this.positionFen.split(/\s|\//); 
      for(let i = 0; i < fenFields.length; i++){
          // if current field is file
          if(files[i]){
              // render ranks
              var currentRank = fenFields[i].split("");
              console.log(currentRank)
              for(let j = 0; j < currentRank.length; j++){
                 var piece = currentRank[j];
                 if(currentRank[j].search(/a-z/)){
                    var currentSquare = document.getElementById(`${j}-${files[i]}`) 
                    switch(piece){
                        case 'r':
                          
                    }
                 }  
              }
          } else {
            
          }
      }
  }
}
