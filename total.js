"use strict"
var foodcost=79.25;
var tax=foodcost*.08
var tip=foodcost*.2
//calculation
var totaldue=foodcost+tax+tip
//output
console.log("Food cost is " + foodcost + " and tax is " + tax)
console.log("Tip is " + tip.toFixed(2))
console.log("the total due is " + totaldue)