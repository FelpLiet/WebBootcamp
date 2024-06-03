class color {
  constructor() {
    this.color = 'red';
  }

  delayedColorChange(newColor, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        console.log("Color Changed to " + newColor)
        resolve();
      }, delay);
    });
  }

  async sing() {
    throw new Error("OH NO, PROBLEM!");
    return "LA LA LA LA";
  }

  async searchTvShowImg(showName) {
    try {
      showName = showName.toLowerCase().split(' ').join('-');
      const res = await axios.get('https://api.tvmaze.com/search/shows', { params: { q: showName } });
      const img = res.data[0].show.image.medium;
      return img;
    } catch (e) {
      console.log("Imagem nao encontrada", e);
    }
  }
}

const colorClass = new color();
const form = document.querySelector('#searchForm');
const body = document.querySelector('body');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const searchTerm = form.elements.search.value;
  const newBg = await colorClass.searchTvShowImg(searchTerm);
  form.style.backgroundImage = `url(${newBg})`;
  form.elements.search.value = '';
});