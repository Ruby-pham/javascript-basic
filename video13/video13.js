console.log("Hello World from HTML".toUpperCase());
let cars = ["BMW", "Volvo", "Saab", "Ford"];
for (let i = 0; i < cars.length; ) {
  console.log("Top cars:", i + 1, cars[i]);
  i++;
}
let i = 0;
// while (i < cars.length) {
//   if (cars[i].length === 3) {
//     console.log("Top cars 3 letters:", i + 1, cars[i]);
//   } else if (cars[i].length === 4) {
//     console.log("top cars 4 letters:", i + 1, cars[i]);
//   } else {
//     console.log("top cars 5 letters:", i + 1, cars[i]);
//   }
//   i++;
// }
while (i < cars.length) {
  console.log("check i:", i);
  if (cars[i] === "Volvo") {
    console.log("Found it:", cars[i]);
    break;
  }
  i++;
}
