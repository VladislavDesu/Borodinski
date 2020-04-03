let link = document.querySelector(".login");
let popup = document.querySelector(".modal-content");
let overlay = document.querySelector(".modal-overlay");
let close = document.querySelector(".modal-content-close");
let focus = popup.querySelector("[name = login]");
let form = popup.querySelector(".login-form");
let login = popup.querySelector("[name = login]");
let password = popup.querySelector("[name = password]");
let storage = localStorage.getItem("login");
let mapOpen = document.querySelector(".js-open-map");
let mapPopup = document.querySelector(".modal-content-map");
let mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-content-show");
  overlay.classList.add("modal-overlay-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-content-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-content-show")) {
        mapPopup.classList.remove("modal-content-show");
        overlay.classList.remove("modal-overlay-show");
    };
  };
});

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
