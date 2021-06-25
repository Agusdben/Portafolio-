const arrowUp = document.createElement('i')
arrowUp.classList.add('fas')
arrowUp.classList.add('fa-chevron-up')

function ReturnToTop (){
    window.onscroll = function() {
        if( window.scrollY > 499){
            const $container = document.querySelector('.container')
            $container.appendChild(arrowUp)
            arrowUp.addEventListener('click', ()=>{
                window.scrollTo({top: 0, behavior: 'smooth'});
            });
        }
        if( window.scrollY < 499){
            try{
                document.querySelector('.fa-chevron-up').remove()
            } catch(error){
                return null
            }
        }
    };
}

export default ReturnToTop