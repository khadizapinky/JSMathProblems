//feetToMile
function feetToMile(feet){
    var mile = feet/ 5280; 
    return mile;
}
var roadfeet = feetToMile(30000);
console.log(roadfeet);





//woodCalculator
// function woodCalculator(chair, table, bed){
//     var chairWood = chair * 1;
//     var tableWood = table * 3;
//     var bedWood = bed * 5;
//     var totalWood = chairWood + tableWood + bedWood;
//     return totalWood;
// }
//  var result = woodCalculator(2, 2, 2);
//  console.log(result);






//brickCalculator
function brickCalculator(numbers){
    var oneFeetBrick = 1000;
    var totalBrick = 0;
    if(numbers <= 10){
      totalBrick = oneFeetBrick * 15;
    }
    else if(numbers <= 20 && numbers > 10){
       totalBrick = oneFeetBrick * 12;
    }
    else{
       totalBrick = oneFeetBrick * 10;
    }
    return totalBrick;
}
var result = brickCalculator(38);
console.log(result);







//tinyFriend
// function  tinyFriend(name){
//    var smallest = name[0];
//    for(var i = 0; i<name.length; i++){
//        var str = name[i];
//        var currentName = str.length;
//        if(currentName > largest){
//            smallest = currentName;
//        }
//     }
//     return smallest;
// }
// var result = tinyFriend(['kalam', 'salam', 'khadiza', 'ashmaa']);
// console.log(result);

