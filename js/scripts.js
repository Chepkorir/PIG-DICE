$(function rolldice() {
var die1 = documents.getElementById("die1");
var die2 = documents.getElementById("die2");
var status = document.getElementById("status");
var d1  = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor(Math.random() * 6) + 1;
var diceTotal = d1 + d2;
die1.innerHTML = d1;
die2.innerHTML = d2;
status.innerHTML = "YOU ROLLED" +diceTotal+ ".";
if( d1 == d2) {
  status.innerHTML += "YEEIY! NEW ROUND!!";
}


});
