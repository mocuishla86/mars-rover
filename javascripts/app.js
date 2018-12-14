// Rover Object Goes Here
// ======================
var rover = {
  direction: "North",
  x : 0,
  y : 0,
}

// ======================
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
  switch(rover.direction){
    case "North":
    rover.y = rover.y + 1;
    break;

    case "East":
    rover.x = rover.x -1;
    break;

    case "South":
    rover.y = rover.y - 1;
    break;

    case "West":
    rover.x = rover.x + 1;
    break;
  }

  console.log("moveForward was called")
}

console.log(rover.direction);
moveForward(rover);
console.log(rover.direction);
turnLeft(rover);
turnLeft(rover);
console.log(rover.direction);
moveForward(rover);
console.log(rover.x);
moveForward(rover);
moveForward(rover);
console.log(rover);

