const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d');
//블록 사이즈
const blockSize = 30
const borderWidth = 5

ctx.fillstyle = "gray";

for(x=0;x<12;x++){
    for(y=0;y<24; y++){
        ctx.fillRect (
            borderWidth*x + blockSize*x,
            borderWidth*y + blockSize*y,
            blockSize,
            blockSize
        )
    }
}


const widthBlockCount = 10
const heightBlockCount = 25

let stackedBlock = new Array(widthBlockCount);
let controlBlock = new Array(widthBlockCount)

initBlockArray(stackedBlock)
initBlockArray(controlBlock)

function initBlockArray(blockArray){
    for(x=0;x<widthBlockCount;x++){
        blockArray[x] = new Array(heightBlockCount)
    }
    for(x=0;x<widthBlockCount;x++){
        for(y=0;y<heightBlockCount;y++){
            blockArray[x][y] = false
        }
    }
}

function drawBlocks() {
    for (let x = 0; x < widthBlockCount; x++) {
      for (let y = 0; y < heightBlockCount; y++) {
        if (stackedBlock[x][y]) {
          ctx.fillStyle = "black";
        } else {
          ctx.fillStyle = "gray";
        }
  
        if (controlBlock[x][y]) {
          ctx.fillStyle = "blue";
        }
  
        ctx.fillRect(
          borderWidth * x + blockSize * x,
          borderWidth * y + blockSize * y,
          blockSize,
          blockSize
        );
      }
    }
  }
const testButton = document.querySelector('.testButton')
let testButtonOn = false;
let timeId = null;
testButton.addEventListener('click',()=>{
    onClickTestButton()
})


function onClickTestButton(){
    if(testButtonOn){
        clearInterval(timeId)
    } else {
        timeId = setInterval(flowGravity,300);
    }
    testButtonOn = !testButtonOn
}



function flowGravity(){
    let collisionCheckTmpArray = copyBlockArray(controlBlock);
    if(isCollided(collisionCheckTmpArray,stackedBlock)){
        addBlockToStackedArray(controlBlock,stackedBlock)
        addNewControlBlock(controlBlock)
    } else {
        controlBlock = collisionCheckTmpArray;
    }
    ctx.clearReact(0,0,canvas.width,canvas.height)
    drawBlocks()
}