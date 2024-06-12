document.addEventListener('DOMContentLoaded', async () => {
  const API_URL = 'http://localhost:3000/';
  const idForm = document.querySelector('.findid');
  idForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(idForm);
      console.log(formData);
      const url = API_URL + 'comments/' + formData.get('id');
      window.location.href = url;
  });
});
