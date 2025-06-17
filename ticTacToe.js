let arr = [["","",""],["","",""],["","",""]]
let turn = "x"
let flag = 0

// console.log(arr)
const game = document.getElementById('game')
const complete = document.getElementById('complete')
const winner = document.getElementById('text')
const chance = document.getElementById('chance')
chance.textContent = '------    Player x turn    ------'

function getXYCoordinate(id) {
    const x = id%3
    const y = Math.floor(id/3)
    return [x, y]
}

function click1(e){
    // console.log(arr)
    const [x, y] = getXYCoordinate(e.id)
    const isCellEmpty = !arr[y][x]
    if(isCellEmpty) {
        arr[y][x] = turn
        turn = (turn == "x") ? "o" : "x"
        hover()
        chance.textContent = `------    Player ${turn} turn    ------`
        flag = checkWinner(x,y)
        if(flag == 1){
            winner.textContent = `Congratulations!!! \n\n player ${(turn == 'x' ? '0' : 'x')} won the game`
            chance.classList.add('display')
            // game.classList.add('display');
            complete.classList.remove('display')
            return
        }
        else if(flag == 2){
          winner.textContent = `Match Drawn`
            chance.classList.add('display')
            // game.classList.add('display');
            complete.classList.remove('display')
            return
        }
        show()
    }
}

function show(){
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      const box = document.getElementById((i*3)+j)
      box.textContent = arr[i][j]
      // box.classList = 'text1'
    }
  }
}

function checkWinner(x,y){
  if(arr[y][0] == arr[y][1] && arr[y][1] == arr[y][2]){
    return 1
  }
  else if( arr[0][x] == arr[1][x] && arr[1][x] == arr[2][x]){
    return 1
  }
  else if(x == y && arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]){
    return 1
  }
  else if(x+y == 2 && arr[2][0] == arr[1][1] && arr[1][1] == arr[0][2]){
    return 1
    
  }
  let flag1 = 2
  for(let i=0; i<3; i++){
    for(let j=0;j<3; j++){
      if(arr[i][j] == ''){
        flag1 = 3
      }
    }
  }
  if(flag1 == 2) return 2
  return 0
}

function restart(){
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      const box = document.getElementById((i*3)+j)
      if(turn == 'x'){
        box.classList.remove('red')
        box.classList.add('green')
      }
      else{
        box.classList.remove('red')
        box.classList.add('green')
      }
    }
  }
  turn = 'x'
  chance.textContent = `Player ${turn} turn`
  flag=false
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      arr[i][j] = ''
    }
  }
  show()
  chance.classList.remove('display');
  // game.classList.remove('display');
  complete.classList.add('display')
}

function hover(){
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      const box = document.getElementById((i*3)+j)
      if(arr[i][j] != ''){
        box.classList.remove('red')
        box.classList.remove('green')
      }
      else if(arr[i][j] == '' && turn == "x"){
        box.classList.remove('red')
        box.classList.add('green')
      }
      else if(arr[i][j] == '' && turn == "o"){
        box.classList.add('red')
        box.classList.remove('green')
      }
    }
  }
}