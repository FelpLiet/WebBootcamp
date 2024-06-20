document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".clickable-li").forEach(item => {
    item.addEventListener("click", function() {
      window.location.href = this.getAttribute("data-url");
    });
  });
});