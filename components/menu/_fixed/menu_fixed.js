const menu = document.getElementsByClassName("menu")[0];

export function fixMenuOnScroll() {
  if (window.pageYOffset >= 450) {
    menu.classList.remove("menu");
    menu.classList.add("menu_fixed");
  } else {
    menu.classList.remove("menu_fixed");
    menu.classList.add("menu");
  }
}
