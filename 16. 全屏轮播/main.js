const sliders = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

const nextSlide = function(){
    // get current class
    const current = document.querySelector('.current');

    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    }else{
        sliders[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = function(){
    // get current class
    const current = document.querySelector('.current');

    if(current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    }else{
        sliders[sliders.lenth - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
};

// button event
next.addEventListener('click', function(){
    nextSlide()
});

prev.addEventListener('click', function(){
    prevSlide()
});