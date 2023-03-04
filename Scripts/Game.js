var pieces = document.getElementsByClassName("piece");

var squares = document.getElementsByClassName('square');

var activePiece = document.createElement("div");

var files = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];

var currentMoveSquares = [];

var CurrentBoard = new Board();
CurrentBoard.renderPosition();
var rook = new Rook('4-e');







function highlightSquare(event) {
  var square = event.path[1];
  var activeClass = "activeSquare";
  var green = false;
  if (
    document.defaultView.getComputedStyle(square, null)["backgroundColor"] ===
    "rgb(118, 150, 86)"
  ) {
    green = true;
  }
  if (square.className.includes("activeSquare")) {
    square.classList.remove("activeSquare");
    activePiece = document.createElement("div");
  } else {
    square.classList.add("activeSquare");
    if (green) {
      square.classList.add("green");
    }
    activePiece.classList.remove("activeSquare");
    activePiece = square;
  }
}
function removeAllPossibleMoves(){
  var possibleMoves = document.getElementsByClassName('possibleMoves');
  
  for(let i = 0; i < possibleMoves.length; i++){
    console.log(possibleMoves[i])
    possibleMoves[i].remove();
  }
}
function displayPossibleMoves(currentPosition, positions, remove) {

  var green = false;
  var circle = document.createElement("div");
  circle.className = `possibleMoves ${currentPosition}`;
  for (let i = 0; i < currentMoveSquares; i++) {
    currentMoveSquares[i].removeChild(circle);
  }
  currentMoveSquares = [];

  for (let i = 0; i < positions.length; i++) {
    var pos = positions[i];
    var square = document.getElementById(pos);
  
    if (!square.childElementCount) {
      if (
        document.defaultView.getComputedStyle(square, null)[
          "backgroundColor"
        ] === "rgb(118, 150, 86)"
      ) {
        green = true;
      }
      
      var circleCopy = circle.cloneNode(true); 
      if(green){
        circleCopy.classList.add('green');
      }

      square.appendChild(circleCopy);
      currentMoveSquares.push(square);
      green = false;
    } else if(square.children[0].className.includes('possibleMoves') && remove){
      
      square.children[0].remove();
    }
  }
}
// create piece class from square 

function createPieceClass(square){
   var pieceName = document.getElementById(square).children[0].className.split(" ")[1];

   switch(pieceName){
     case "rook":
       return new Rook(square);
     default:
       return null;
   }
   

}
rook.renderPiece();

// call functions on piece clicked

for (let i = 0; i < squares.length; i++) {
  var element = squares[i];
  
  element.addEventListener("click", event => {
    var square = event.path[1];
    if(!square.childElementCount) return;
    console.log(square);
    var squareId = square.id 

    var squareClassName = square.className;
    // if the square clicked is a possible move element then move the piece attached to possible move
    console.log(square.children[0].className); 
    if(square.children[0].className.includes('possibleMoves')){
      console.log(true); 
       var squareAttatched = square.children[0].className.split(" ")[1];
       var pieceAttatched = createPieceClass(squareAttatched);
       // remove all children in the square el moving to
       for(let i = 0; i < square.children.length;i++){
        square.children[i].remove();
       }
      pieceAttatched.movePiece(squareId);
      return displayPossibleMoves(pieceAttatched.square, pieceAttatched.possibleMoves(), true); 
       
    }
    
    // display the possible moves to the player
    
    var pieceClass = createPieceClass(squareId);
    // if possible moves have already been displayed remove them
    if(squareClassName.includes('activeSquare')){
      displayPossibleMoves(pieceClass.square, pieceClass.possibleMoves(), true)
    } else if(pieceClass){
      displayPossibleMoves(pieceClass.square, pieceClass.possibleMoves(), false);
    }
    
    // make piece selected turn yellow 
    if(pieceClass){
      highlightSquare(event);
    }
  });
}


