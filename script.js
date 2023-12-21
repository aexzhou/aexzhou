let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.style.height = "50px";
    } else {
        navbar.style.height = "50px";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);

navbar.addEventListener("mouseover", function() {
    navbar.style.height = "60px";
});

navbar.addEventListener("mouseout", function() {
    if(window.pageYOffset || document.documentElement.scrollTop > lastScrollTop){
        navbar.style.height = "50px";
    }
});
