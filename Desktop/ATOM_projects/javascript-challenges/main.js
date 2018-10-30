var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;

for (var i=0; i<prices.length; i++){
  sum += prices[i];
console.log("The sum is", sum);
}


for (let i= 99; i>=1; i--){
  if(i===1){console.log(i);(i+" crow on the wall, 98 crows"+ i +"crows.");
  console.log("1 fell down and became a wight");
  console.log(i-1 + "crows on the wall");

  } else{
  console.log(i);(i+" crows on the wall, 98 crows"+ i +"crows.");
  console.log("1 fell down and became a wight");
  console.log(i-1 + "crows on the wall");
  console.log("");
}
