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
    rover.x = rover.x + 1;
    break;

    case "South":
    rover.y = rover.y - 1;
    break;

    case "West":
    rover.x = rover.x - 1;
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
    var commands = letter[i];

    if(letter[i] == "l"){
      turnLeft(rover);
      
    } else if (letter[i] == "r"){
      turnRight(rover);
      
    } else if (letter[i] == "f"){
      moveForward(rover);
      
    } else if (letter[i] == "b"){
      moveBackward(rover);
      
    } else {
      console.log("Rover doesn't understand your command!");
    }
  }
}


console.log(rover.direction);
/*moveBackward(rover);
turnLeft(rover);
moveForward(rover);
turnLeft(rover);
moveForward(rover);
console.log(rover.direction);
console.log(rover);*/

command("lrfb");
console.log(rover);