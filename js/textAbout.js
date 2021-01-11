
//Если высота объекта находиться в видимости, добавляеться класс
const animItems = document.querySelectorAll('._anim-items');//Создание классов

if (animItems.length > 0) {//Если есть длина, значит массив начнет работать
    
    window.addEventListener('scroll', animOnScroll);//Запуск функции
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {//Перебираем массив 
            const animItem = animItems[index];
            const animItemHeigth = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;//При наборе 1/4 высоты

            let animItemPoint = window.innerHeight - animItemHeigth / animStart;

            if(animItemHeigth > window.innerHeight) {
                animItemPoint = window.innerHeight - window.animItemHeigth / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeigth)) {
                animItem.classList.add('_activeTitle');
            } else {
                if(!animItem.classList.contains('_anin-no-hide')){
                    animItem.classList.remove('_activeTitle');
                }
                
            }

        }
    }
    function offset(el) {//Крос Браузерн ф/ия для определения скролла
        const rect = el.getBoundingClientRect();
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top : rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
       animOnScroll(); 
    }, 500);
    
}