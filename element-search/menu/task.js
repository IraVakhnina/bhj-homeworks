const links = document.querySelectorAll(".menu__link");

for (let i = 0; i < links.length; i++) {

  const sub = links[i].parentElement.querySelector(".menu_sub");

  links[i].onclick = function() {
    if (sub) {
        if (!sub.classList.contains("menu_active")) {
            sub.classList.add("menu_active");
          } else {
            sub.classList.remove("menu_active");
          }     
          return false;
        }
    }
}