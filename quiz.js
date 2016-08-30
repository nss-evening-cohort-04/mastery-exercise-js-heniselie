var button = document.getElementById("growTree");
button.addEventListener("click", printTreeInfo); //event listenter

function printTreeInfo() {
  var buildingTree = { height: parseInt(document.getElementById("height").value),

    symbol: document.getElementById("symbol").value
  };
  checkingUserInput(buildingTree);
}

function checkingUserInput(mytree) {

  createTree(mytree);

}

var characterSize;
var spaceSize;
var bigTree = "";
var width;


//calculation to creat PineTree  
function createTree(pineTree) {
  width = (pineTree.height * 2) - 1;
  for (var i = 0; i < pineTree.height; i++) {
    characterSize = (i * 2) + 1;
    spaceSize = (width - characterSize) / 2;
    for (var k = 0; k < (spaceSize * pineTree.symbol.length); k++) {
      bigTree += " ";
    }
    for (var a = 0; a < characterSize; a++) {
      bigTree += pineTree.symbol;
    }
    for (var b = 0; b < spaceSize; b++) {
      bigTree += " ";
    }
    bigTree += "\n";
  }

  console.log(bigTree);
}

   function treeEnter(event) {
     if (event.keyCode == 13 || event.which == 13) {
         console.log("tree growing when you enter");
        
   }
 }


