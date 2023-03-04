var pieceImages = {
    bishopBlack: "./assets/Bishop_Black.png",
    bishopWhite: "./assets/Bishop_White.png", 
    kingBlack: "./assets/King_Black.png",
    kingWhite: "./assets/King_White.png",
    knightBlack: "./assets/Knight_Black.png",
    knightWhite: "./assets/Knight_White.png", 
    pawnBlack: "./assets/Pawn_Black.png",
    pawnWhite: "./assets/Pawn_White.png",
    queenBlack: "./assets/Queen_Black.png",
    queenWhite: "./assets/Queen_White.png",
    rookBlack: "./assets/Rook_Black.png",
    rookWhite: "./assets/Rook_White.png"
}
class Piece {
    constructor(name, colour, dead, square){
        this.name = name; 
        this.colour = colour; 
        this.dead = dead;
        this.square = square;
        this.rank = square.charAt(2);
        this.file = square.charAt(0);
        this.imgSrc = this.findImgSrc();
        this.className = `piece ${this.name.toLowerCase()}`;
       
        var element = document.createElement('img');
        element.src = this.imgSrc;
        element.className = this.className;
        this.element = element;

    }
    findImgSrc(name){
        console.log(`${this.name}${this.colour}`);
      return pieceImages[`${this.name}${this.colour}`];
    }
    renderPiece(){
        var square = document.getElementById(this.square);
        console.log(square.children)
        if(square.children.length) return; 
        var newElement = this.element.cloneNode();
        console.log(newElement); 
        return square.appendChild(newElement);
    }
    removePiece(){
       var square = document.getElementById(this.square);
       var piece = square.children[0]; 
       if(piece.className === this.className){
           piece.remove();
           return true;
       } else {
           return false;
       }
    }
    movePiece(newSquare){
        this.removePiece();
        this.square = newSquare;
        return this.renderPiece();
    }
}
