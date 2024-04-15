window.addEventListener('scroll', function () {
    var mainNavSection = document.querySelector('.main-nav');
    var scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        mainNavSection.classList.remove('shadow');
    } else {
        mainNavSection.classList.add('shadow');
    }
});


// Search box handle
const tabCar = document.querySelector(".tabs__v-car");
const tabBike = document.querySelector(".tabs__v-bike");

tabCar.addEventListener("click", function () {
    tabCar.classList.add("active");
    tabBike.classList.remove("active");
})

tabBike.addEventListener("click", function () {
    tabCar.classList.remove("active");
    tabBike.classList.add("active");
})