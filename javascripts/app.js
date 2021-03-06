// Rover Object Goes Here
// ======================
var rover1 = {
  direction: "North",
  x : 0,
  y : 0,
  travelLog: [],
}

var rover2 = {
  direction: "North",
  x : 0,
  y : 2,
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

function tryToMove(newX, newY, rover){
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

  tryToMove(newX, newY, rover)

  console.log("moveForward was called")
}

function moveBackward(rover){

  let newX = rover.x;
  let newY = rover.y;

  switch (rover.direction){
    case "North":
    newY = rover.y + 1;
    break;

    case "East":
    newX = rover.x -1;
    break;

    case "South":
    newY = rover.y - 1;
    break;

    case "West":
    newX = rover.x + 1;
    break;
  }

tryToMove(newX, newY, rover)

  console.log("moveBackward was called!");

}


function command(letter, rover){
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




command("rfrflffrfflffffrflfrffffflfbrblbbrbbrbblbblbbrblbblbbbrbblbrblbb", rover1);
console.log(rover1);
console.log(rover2);
