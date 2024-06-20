document.addEventListener("DOMContentLoaded", function () {
  const elements = ["#editButton", "#newButton"];
  document.querySelectorAll(".clickable-li").forEach((item) => {
    item.addEventListener("click", function () {
      window.location.href = this.getAttribute("data-url");
    });
  });

  function getUrl(elements) {
    for (let element of elements) {
      console.log(element);
      if (document.querySelector(element) === null) {
        continue;
      } else {
        document.querySelector(element).addEventListener("click", function () {
          window.location.href = this.getAttribute("data-url");
        });
      }
    }
  }

  getUrl(elements);
});
