 // var sides = ["d1.png", "d2.png", "d3.png", "d4.png", "d5.png", "d6.png"];
 var side_alt = ["roll: 1", "roll: 2", "roll: 3", "roll: 4", "roll: 5", "roll: 6"];

 function throwdice(){
 //create a random integer between 1 and 6
 var rand1 = Math.round(Math.random()*5) + 1;
 var rand3 = Math.round(Math.random()*5) + 1;

 // Set Image src
 document.getElementById("mydice1").src = "images/d" + rand1 + ".png";
 document.getElementById("hisdice1").src = "images/e" + rand3 + ".png";
 
 // Set Image alt
 document.getElementById("mydice1").alt = side_alt[rand1];
 document.getElementById("hisdice1").alt = side_alt[rand3];

 who_won(rand1,rand3);
 }

 function who_won(rand1, rand3){
   let player_points = rand1;
   let enemy_points = rand3;
   let giffy = winner(player_points,enemy_points);
   document.getElementById("message").src = "images/" + giffy;
   document.getElementById("message").alt = giffy;
 }

 function winner(player, enemy) {
   if (player < enemy) {
     return "lode.gif";
   }
   if (enemy < player) {
     return "win.gif"
   }
   if (player == enemy) {
     return "same.gif"
   }
 }