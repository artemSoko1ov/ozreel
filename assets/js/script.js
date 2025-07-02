const container = document.querySelector('.slider__container');

function updateClassLeft(){

}

function updateClassRight(){
    
}

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('.card-one') || e.target.classList.contains('.card-two')){
        updateClassLeft();
    }
    else if(e.target.classList.contains('.card-four') || e.target.classList.contains('.card-five')){
        updateClassRight();
    }
});
