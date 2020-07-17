//feetToMile
function feetToMile(feet){
    var mile = feet / 5280; 
    if(feet < 0){
        return "invalid input!";
        }
    else{
          return mile;
        }
    }
var mileCalculation = feetToMile(30000);
console.log(mileCalculation);



//woodCalculator
function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    if(totalWood < 0){
        return "invalid input!";
    }
    else{
       return totalWood;
    }
}
 var totalFurnitureWood = woodCalculator(6, 3, 3);
 console.log(totalFurnitureWood);






//brickCalculator
function brickCalculator(floor){
   
    if(floor <= 10){
     var firstTenBricks = 1000* 15;
     var totalBricks  = firstTenBricks * floor;

     if(totalBricks < 0){
         return "invalid input!";
     }
     else{
         return totalBricks;
     }
}
    else if(floor <= 20 && floor > 10){
      var firstTenBricks = 1000 * 15 * 10;
      var secondTenBricks = 1000 * 12 * (floor-10);
      var totalBricks = firstTenBricks + secondTenBricks;

      if(totalBricks < 0){
        return "invalid input!";
      }
      else{
      return totalBricks;
      }
}
     else{
      var firstTenBricks = 1000 * 15 * 10;
      var secondTenBricks = 1000 * 12 * 10;
      var thirdTenBricks = 1000 * 10 * (floor - 20);
      var totalBricks = firstTenBricks + secondTenBricks + thirdTenBricks;

      if(totalBricks < 0){
        return "invalid input!";
      }
      else{
      return totalBricks;
      }
 }
    
}
var totalFloorBrick = brickCalculator(25);
console.log(totalFloorBrick);







//tinyFriend
function  tinyFriend(names){
   var shortestName = names[0];
   for(var i = 0; i<names.length; i++){
       var currentName = names[i];
       if(currentName.length < shortestName.length){
           shortestName = currentName;
       }
    }
    return shortestName;
}
var shortestNameFind = tinyFriend(['kalam', 'sn',  'ashmaa', 'diya']);
console.log(shortestNameFind);

