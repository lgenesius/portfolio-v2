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

const seeMore = document.querySelector('.see-more');
const seeLess = document.querySelector('.see-less');
const getVisible = document.querySelectorAll('.disappear');

seeMore.addEventListener('click', function(){
    getVisible.forEach(item => item.classList.toggle('disappear'));
    seeMore.classList.toggle('disappear');
});

seeLess.addEventListener('click',function(){
    getVisible.forEach(item => item.classList.toggle('disappear'));
    seeMore.classList.toggle('disappear');
});