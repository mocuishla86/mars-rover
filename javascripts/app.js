// Rover Object Goes Here
// ======================
var rover = {
  direction: "North",
  x : 0,
  y : 0,
  travelLog: [],
}

var land = [
  ["path", "path", "rock","path", "path","puddle","rock","path","path","rock"],
  ["puddle", "path", "path","path", "path","path","rock","path","puddle","path"],
  ["path", "rock", "rock","path", "rock","path","path","rock","path","path"],
  ["path", "path", "path","path", "path","path","path","path","rock","path"],
  ["path", "path", "rock","path", "path","rock","path","path","path","rock"],
  ["rock", "path", "rock","path", "path","path","puddle","rock","path","path"],
  ["path", "rock", "path","path", "path","rock","path","path","path","path"],
  ["rock", "path", "path","rock", "rock","puddle","path","rock","path","path"],
  ["path", "path", "rock","path", "path","rock","path","path","path","puddle"],
  ["puddle", "path", "path","rock", "path","puddle","path","rock","path","path"],
  
  ]
// ======================
function checkPosition(x, y){
if (x < 0 || y < 0 || x > 9 || y > 9){
  console.log("Out of boundaries")
  return false;
}

let whatsThere = land[y][x];
if (whatsThere === "rock" || whatsThere === "puddle"){
  console.log("obstacle found!");
  return false;
}
else {
  return true;
}

}

function tryToMove(newX, newY){
  let iCanMove = checkPosition(newX, newY);
  if (iCanMove){
    rover.x = newX;
    rover.y = newY;
  }
  else {
    console.log("Try another movement");
  }
}

function turnLeft(rover){
  switch(rover.direction){
    case "North":
    rover.direction = "West";
    break;
    
    case "West":
    rover.direction = "South";
    break;

    case "South":
    rover.direction = "East";
    break;

    case "East":
    rover.direction = "North";

  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch(rover.direction){
    case "North":
    rover.direction = "East";
    break;

    case "East":
    rover.direction = "South";
    break;

    case "South":
    rover.direction = "West";
    break;

    case "West":
    rover.direction = "North";
    break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){

  let newX = rover.x;
  let newY = rover.y;

  switch(rover.direction){
    case "North":
    newY = rover.y - 1;
    break;

    case "East":
    newX = rover.x + 1;
    break;

    case "South":
    newY = rover.y + 1;
    break;

    case "West":
    newX = rover.x - 1;
    break;
  }

  console.log("moveForward was called")
}

function moveBackward(rover){
  switch (rover.direction){
    case "North":
    rover.y = rover.y - 1;
    break;

    case "East":
    rover.x = rover.x -1;
    break;

    case "South":
    rover.y = rover.y + 1;
    break;

    case "West":
    rover.x = rover.x + 1;
    break;
  }
  console.log("moveBackward was called!");

}


function command(letter){
  for (i = 0; i<letter.length; i++){

    if(letter[i] == "l"){
      turnLeft(rover);
      rover.travelLog.push("x:" + rover.x + ", " + "y:" + rover.y);
      
    } else if (letter[i] == "r"){
      turnRight(rover);
      rover.travelLog.push("x:" + rover.x + ", " + "y:" + rover.y);
      
    } else if (letter[i] == "f"){
      moveForward(rover);
      rover.travelLog.push("x:" + rover.x + ", " + "y:" + rover.y);
      
      
    } else if (letter[i] == "b"){
      moveBackward(rover);
      rover.travelLog.push("x:" + rover.x + ", " + "y:" + rover.y);
      
      
    } else {
      console.log("Rover doesn't understand your command!");
    }
  }
}


console.log(rover.direction);
console.log(rover.travelLog);
/*moveBackward(rover);
turnLeft(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);
console.log(rover.direction);
console.log(rover);*/

command("bbbbbbbbbb");
console.log(rover);