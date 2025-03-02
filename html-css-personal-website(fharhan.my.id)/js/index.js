let menuIconMobile = document.querySelector(".menu-icon-mobile");
let menuMobile = document.querySelector(".menu-mobile");

menuIconMobile.addEventListener("click", () => {
    menuMobile.style.display = "block";
    console.log("clicked to show menu mobile");
});

menuMobile.addEventListener("click", () => {
    menuMobile.style.display = "none";
    console.log("clicked to hidden menu mobile");
});
