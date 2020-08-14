window.addEventListener('scroll', function(){
    var nav = document.querySelector('.navigation');
    let navBarMenu = document.querySelectorAll('.header nav ul li a');
    nav.classList.toggle('sticky', window.scrollY > 0);
    navBarMenu.forEach(item => {
        item.classList.toggle('change-color', window.scrollY > 0);
    });
});

const menuToggle = document.querySelector('.menu-toggle input');

const nav = document.querySelector('.navigation ul');

function openNavigationBar(){
    menuToggle.classList.toggle('change-width');
    nav.classList.toggle('slide');
}

menuToggle.addEventListener('click', openNavigationBar);

const menuCollapse = document.querySelectorAll('.navigation ul li a');

menuCollapse.forEach(item => item.addEventListener('click', function(){
    if(nav.classList.contains('slide')){
        menuToggle.click();
    }
}));