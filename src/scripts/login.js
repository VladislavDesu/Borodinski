var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelector(".modal-content-close");
var focus = popup.querySelector("[name = login]");
var form = popup.querySelector(".login-form");
var login = popup.querySelector("[name = login]");
var password = popup.querySelector("[name = password]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
  focus.focus();

  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  };
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(event) {
  event.preventDefault();
  if (!login.value || !password.value) {
    event.preventDefault();
    popup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  };

});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
    };
  };
});