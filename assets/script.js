const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementsByClassName("nav-item");

openMenu.addEventListener("click", function (){
  let menuMobile = document.querySelector('.mobile-nav');
  if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.ico').src = "assets/img/menu-ico.svg";
  } else {
      menuMobile.classList.add('open');
      document.querySelector('.ico').src = "assets/img/close-ico.svg";
  }
})

for (let i = 0; i < closeMenu.length; i++) {
    closeMenu[i].addEventListener("click", function (){
      let menuMobile = document.querySelector('.mobile-nav');
      if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.ico').src = "assets/img/menu-ico.svg";
      }
    });
}

const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
    control.addEventListener("click", (e) => {
      isLeft = e.target.classList.contains("arrow-left");
  
      if (isLeft) {
        currentItem -= 1;
      } else {
        currentItem += 1;
      }
  
      if (currentItem >= maxItems) {
        currentItem = 0;
      }
  
      if (currentItem < 0) {
        currentItem = maxItems - 1;
      }
  
      items.forEach((item) => item.classList.remove("current-item"));
  
      items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth",
        block: "nearest"
      });
  
      items[currentItem].classList.add("current-item");
    });
});
  