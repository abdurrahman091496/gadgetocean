const scrollBtn = document.querySelector(".scroll-top");

refreshButtonVisibility = () => {
    if (document.documentElement.scrollTop <= 180){
        scrollBtn.style.display="none";
    } else {
        scrollBtn.style.display="block"; 
    }
};

refreshButtonVisibility();

scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})

document.addEventListener("scroll", (e) => {
    refreshButtonVisibility();
});