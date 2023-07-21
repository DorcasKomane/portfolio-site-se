window.onload = function(){
    window.addEventListener('scroll', function(e){
        if(window.scrollY > 100){
            this.document.querySelector('header').classList.add('is-scrolling');
        }else{
            this.document.querySelector('header').classList.remove('is-scrolling');
        }
    });

    const menuBtn = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.nav-mobile');

    menuBtn.addEventListener('click', function(){
        menuBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
    });
}