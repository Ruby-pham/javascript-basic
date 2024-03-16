console.log("hello world from html".toUpperCase());
let sum = (a, b) => {
  return a + b;
};
console.log("check sum", sum(9, 6));
let obj = {
  name: "Ruby",
  address: "HCM",
  getName: function () {
    return this.name;
  },
};
console.log("get name", obj.getName());
