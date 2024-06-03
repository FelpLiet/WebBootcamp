const delayedColorChange = (newColor, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = newColor;
      console.log("Color Changed to " + newColor)
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

const searchTvShowImg = async (showName) => {
  try {
    showName = showName.toLowerCase().split(' ').join('-');
    const res = await axios.get('https://api.tvmaze.com/search/shows', { params: { q: showName } });
    const img = res.data[0].show.image.medium;
    return img;
  } catch (e) {
    console.log("Imagem nao encontrada", e);
  }
}

const form = document.querySelector('#searchForm');
const body = document.querySelector('body');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = form.elements.search.value;
  const newBg = searchTvShowImg(searchTerm);
  form.style.backgroundImage = `url(${newBg})`;
  form.elements.search.value = '';
}); 