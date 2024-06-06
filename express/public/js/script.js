document.addEventListener('DOMContentLoaded', async () => {
    const API_URL = 'http://localhost:3000/';
    const searchForm = document.querySelector('#search');
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(searchForm);
        console.log(formData);
        const search = formData.get('search').toLowerCase();
        const url = API_URL + search;
        window.location.href = url;
    });
});
