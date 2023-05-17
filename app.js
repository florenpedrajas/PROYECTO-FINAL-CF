let btnMenu = document.querySelector('.bx');
let menu = document.querySelector('.list__container');
let containerMenu = document.querySelector('.menu');
let activador = true;

btnMenu.addEventListener('click', () => {
    // document.querySelector('#open__closed i').classList.toggle('bx times');

    if (activador) {
        menu.style.left = "0";
        menu.style.transition = "0.5s";

        activador = false;

    } else {
        activador = false;

        menu.style.left = "-100%";
        menu.style.transition = "0.5s";

        activador = true;

    }
});

let enlaces = document.querySelectorAll('.lists li a');

enlaces.forEach((element) => {
    element.addEventListener('click', (event) => {

        enlaces.forEach((link) => {

            link.classList.remove('active');
        });
        event.target.classList.add('active');

    });

});

let prevScrollPos = window.pageYOffset;
let goTop = document.querySelector('.go__top');

window.onscroll = () => {

    let currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        containerMenu.style.top = '0px';
        containerMenu.style.transition = '0.5s';
    } else {
        containerMenu.style.top = '-60px';
        containerMenu.style.transition = '0.5s';
    }
    prevScrollPos = currentScrollPos;



    let top = window.pageYOffset;

    //     //Conditions
    if (top <= 80) {
        containerMenu.style.borderBottom = 'none';

        goTop.style.right = '-100px';
    } else {
        containerMenu.style.borderBottom = '3px solid #058748';

        goTop.style.right = '0px';
        goTop.style.transition = "0.5s";
    }

};

goTop.addEventListener('click', () => {

    document.documentElement.scrollTop = 0;
});

let bottom = document.querySelector('#seemore');

bottom.addEventListener('click', () => {

    document.documentElement.scrollTop = 500;

});




