//Bai1
let user = {
  name: "Hoang",
  surname: "Viet",
};
user.name = "Bui";
delete user.name;

//Bai2
let salaries = {
  Bui: 1200,
  Viet: 1600,
  Hoang: 1350,
};
function summary() {
  let sum = 0;
  for (let summary in salaries) {
    sum += salaries[summary];
  }
  return sum;
}

//Bai 3
let menu = {
  width: 200,
  height: 300,
  name: "Bui Viet Hoang",
};
function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] === "number") {
      menu[key] *= 2;
    }
  }
  return menu;
}

// Bai4
const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Raggea");
// Bai5
function camelize(str) {
  return str
    .split("-")
    .map((word, index) =>
      index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
// bai 6
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterRange(arr, a, b) {
  return arr.filter((list) => a <= list && list <= b);
}

//bai7
let initArray = [
  { name: "Bui", age: 25 },
  { name: "Viet", age: 26 },
  { name: "Hoang", age: 27 },
  { name: "Bui2" },
  { age: 20 },
  { name: "Hoang2", age: 18 },
];
let names = initArray.reduce(
  (res, curr) => (curr.name != undefined ? [...res, curr.name] : res),
  []
);

// bai8
function getAverageAge(users) {
  return (
    users.reduce(
      (prev, user) => (user.age != undefined ? prev + user.age : prev),
      0
    ) /
    (users.length - 1)
  );
}

// bai9
let flattened = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(flattened.flat(Infinity));
// bai10
function print_number() {
  let inputValue = document.querySelector(".select-input").value;
  let addtext = "";
  if (inputValue === "") {
    addtext = 1;
    alert("Vui lòng nhập giá trị số vào ô input");
  } else {
    for (let i = 1; i <= inputValue; i++) {
      addtext += i + " ";
    }
  }
  document.querySelector(".text-number").innerHTML = addtext;
}
