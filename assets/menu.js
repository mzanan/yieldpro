window.onload = checkWindowWidth;
window.addEventListener("resize", checkWindowWidth);

const mouseupHandler = function (event) {
  if (!menu.contains(event.target)) {
    menu.style.transform = "translateX(-100%)";
  }
};

const logo = document.getElementById("logo");
const menu = document.getElementById("menu");
const menuContainer = document.getElementById("menu-container");
const menuList = document.getElementById("menu-list");
const listItem = document.querySelectorAll(".list_item");
const toggleButton = document.getElementById("toggle-button");
const toggleButtonMobile = document.getElementById("toggle-button-mobile");
const toggleButtonMobileMenu = document.getElementById(
  "toggle-button-mobile-menu"
);

const toggleText = document.querySelectorAll(".toggle-text");

toggleButton.addEventListener("click", () => {
  logo.classList.toggle("py-16");
  menu.classList.toggle("w-32");
  menuContainer.classList.toggle("flex");
  menuContainer.classList.toggle("flex-col");
  menuContainer.classList.toggle("items-center");
  menuList.classList.toggle("text-sm");
  menuList.classList.toggle("text-xs");

  toggleText.forEach((element) => {
    element.classList.toggle("hidden");
  });

  listItem.forEach((element) => {
    element.classList.toggle("flex-col");
    element.classList.toggle("p-4");
    element.classList.toggle("px-4");
    element.classList.toggle("py-2");
    element.classList.toggle("gap-3");
  });
});

listItem.forEach((item) => {
  item.addEventListener("click", () => {
    listItem.forEach((item) => {
      item.classList.remove("bg-active");
    });

    item.classList.add("bg-active");
  });
});

function checkWindowWidth() {
  if (window.innerWidth < 768) {
    menu.style.transition =
      "transform 0.3s ease-in-out, display 0.3s ease-in-out";

    toggleButtonMobile.addEventListener("click", () => {
      menu.style.display = "block";
      menu.style.transform = "translateX(0%)";
      menu.style.transition =
        "transform 0.3s ease-in-out, display 0.3s ease-in-out";
    });

    toggleButtonMobileMenu.addEventListener("click", () => {
      menu.style.transform = "translateX(-100%)";
    });

    logo.classList.remove("py-16");
    menu.classList.remove("w-32");
    menuContainer.classList.remove("flex");
    menuContainer.classList.remove("flex-col");
    menuContainer.classList.remove("items-center");
    menuList.classList.add("text-sm");
    menuList.classList.remove("text-xs");

    toggleText.forEach((element) => {
      element.classList.remove("hidden");
    });

    listItem.forEach((element) => {
      element.classList.remove("flex-col");
      element.classList.add("flex");
      element.classList.add("p-4");
      element.classList.remove("px-4");
      element.classList.remove("py-2");
      element.classList.add("gap-3");
    });

    document.addEventListener("mouseup", mouseupHandler);
  }

  if (window.innerWidth >= 768) {
    menu.style.transition = "none";
    menu.style.transform = "none";

    document.removeEventListener("mouseup", mouseupHandler);
  }
}
