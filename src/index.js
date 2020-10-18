import css from "./css/style.css";
import post from "./post.hbs";
import menu from "./menu.json";

const theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};
const themeSwitchToggle = document.querySelector("#theme-switch-toggle");
const body = document.querySelector("body");
const jsMenu = document.querySelector(".js-menu");
const menuItem = post(menu);
jsMenu.insertAdjacentHTML("afterbegin", menuItem);

themeSwitchToggle.addEventListener ("input", (event) =>{
if (event.target.checked) {
  body.classList.add(`${theme.DARK}`);
  body.classList.remove(`${theme.LIGHT}`);
} else {
  body.classList.remove(`${theme.DARK}`);
  body.classList.add(`${theme.LIGHT}`);
}
});

