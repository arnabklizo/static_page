let navigationBar = document.querySelector('.nav')
let navbarBtn = document.querySelector('.navbarBtn');
let navbarList = document.querySelector('.navbarList');
let navbarBtnSgnUp = document.querySelector('.navbarBtnSgnUp');
let navItems = document.querySelectorAll('.navItem');
// created variables for each elements 


navbarBtn.addEventListener('click', function () { // after listen to toggler button
    navbarList.classList.toggle("activeNavList"); // nav bar <ul> will toggle a class
    navbarBtnSgnUp.classList.toggle("activeNav"); // will toggle a class
    navigationBar.classList.toggle("navActiveBar"); // will toggle a class
})


// Function to hide navbar when clicking outside
document.addEventListener('click', function (event) {
    if (!navbarList.contains(event.target) && !navbarBtnSgnUp.contains(event.target) && !navigationBar.contains(event.target)) {
        hideNav();
    }
});


navItems.forEach((navItem) => { //at click each navbar tag
    navItem.addEventListener('click', function () {
        hideNav();
        navItems.forEach(a => a.classList.remove('active')) //remove from all
        navItem.classList.add('active'); // new class will add
    });
})

function hideNav() {
    navbarList.classList.remove("activeNavList");
    navbarBtnSgnUp.classList.remove("activeNav");
    navigationBar.classList.remove("navActiveBar");
}
