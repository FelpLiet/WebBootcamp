const delayedColorChange = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      console.log("Color Changed to " + newColor);
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("green", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("violet", 1000));

// Async Functions
// Async functions always return a promise
// If the function returns a value, the promise will be resolved with that value
// If the function throws an exception, the promise will be rejected

// const sing = async () => {
//   throw new Error("OH NO, PROBLEM!");
//   return "LA LA LA LA";
// };

// sing().then((data) => {
//   console.log("Promise Resolved with:", data);
// }).catch((err) => {
//   console.log("Promise Rejected with:", err);
// });

const form = document.querySelector("#searchForm");
const container = document.querySelector(".container");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = form.elements.search.value;
  fetch(`/search?q=${searchTerm}`)
    .then((res) => res.json())
    .then((data) => {
      if(container.children.length > 1) {
        container.removeChild(container.lastChild);
      } 
      const img = document.createElement("img");
      img.src = data.photos[0].src.large;
      container.appendChild(img);
    })
    .catch((err) => {
      console.log("OH NO! ERROR SEARCHING!", err);
    });
});
