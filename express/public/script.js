const form = document.querySelector('form');
const API_URL = 'http://localhost:3000/r/';


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const search = formData.get('subreddit');
    const subreddit = search.toLowerCase();
    const url = API_URL + subreddit;
    window.location.href = url;
});