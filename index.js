const app = document.getElementById("app");

function buildCounter() {
  let count = 0;

  function build() {
    const container = document.createElement("div");
    container.className = "counter-container";
    const display = document.createElement("div");
    display.className = "counter-display";
    display.innerText = count;
    const control = document.createElement("div");
    control.className = "counter-control";
    const incButton = document.createElement("button");
    incButton.innerText = "++";
    incButton.onclick = () => {
      display.innerText = ++count;
      //   console.log("ai apasat ++");
    };
    const decButton = document.createElement("button");
    decButton.innerText = "--";
    decButton.onclick = () => {
      display.innerText = --count;
      console.log("ai apasat --");
    };
    control.append(decButton, incButton);
    container.append(display, control);
    return container;
  }

  return build;
}

const counterBuilder1 = buildCounter();
const counterBuilder2 = buildCounter();
const counterBuilder3 = buildCounter();

const counter1 = counterBuilder1();
const counter2 = counterBuilder2();
const counter3 = counterBuilder3();

console.log(counter1, counter2);

app.append(counter1, counter2, counter3);

// //closure example
// function main() {
//   let count = 0;

//   function counter() {
//     return ++count;
//   }

//   return counter;
// }

// const f = main();

// console.log(f()); //1
// console.log(f()); //2
// console.log(f()); //3

// const f1 = main();

// console.log(f1()); //1
// console.log(f1()); //2
// console.log(f1()); //3
// console.log(f1()); //4
// console.log(f1()); //5

// console.log(f()); //4
// console.log(f()); //5
