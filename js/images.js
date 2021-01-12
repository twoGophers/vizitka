window.onload = function () {
    let images = {
        "1": {
            "name": "Nature1",
            "adressImages": "../../images/images1.jpg",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "2": {
            "name": "Nature2",
            "adressImages": "../../images/images2.jpg",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "3": {
            "name": "Nature3",
            "adressImages": "../../images/images3.jpg",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "4": {
            "name": "Nature4",
            "adressImages": "../../images/images4.jpg",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "5": {
            "name": "Nature5",
            "adressImages": "../../images/images5.jpg",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "6": {
            "name": "Nature6",
            "adressImages": "../../images/images6.jpg",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "7": {
            "name": "Nature7",
            "adressImages": "../../images/images7.jpg",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "8": {
            "name": "Nature8",
            "adressImages": "../../images/images8.jpg",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "9": {
            "name": "Nature9",
            "adressImages": "../../images/images9.jpg",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"

        }
    }
    //Функция с анимацией блоков
    function blockJson() {
        let out = '';
        for (let key in images) {

            out += '<img src = "' + images[key].adressImages + '">';
            out += '<h6>' + images[key].name + '</h6>';
            out += images[key].message + '<br>';

        };

        //console.log(out);
        let r = out.split('<br>'); //сделал массив
        r.pop() //убрал пустое значение 
        r.join(',')



        let outBlock = document.querySelectorAll('.saitBarContent');

        for (let i = 0; i < outBlock.length; i++) {

            outBlock[i].innerHTML = r[i];

        };

        //Подключение ayмирования 
        let showed = false;
        let showed2 = false;
        window.addEventListener('scroll', () => {
            let scrolled = window.scrollY + window.innerHeight;
            //console.log(scrolled);
            if (!showed && scrolled >= 1050) {
                showed = true;
                document.querySelector('.blockjson4').classList.add('ann4');
                document.querySelector('.blockjson5').classList.add('ann4');
                document.querySelector('.blockjson6').classList.add('ann4');
            }

            if (!showed2 && scrolled >= 1350) {
                showed2 = true;
                document.querySelector('.blockjson7').classList.add('ann4');
                document.querySelector('.blockjson8').classList.add('ann4');
                document.querySelector('.blockjson9').classList.add('ann4');

            }
        })
    };
    blockJson();


    //Функция увеличения фото
    function showImages() {

        let imag = document.querySelectorAll('.saitBarContent'); //Название блока с картинками, первая страница
        let out = [];

        //получения картинок
        imag.forEach(element => {
            out = element;
            out.onclick = () => {
                //Добавления увеличения картинки
                element.classList.toggle('showBlock');
                element.classList.toggle('saitBarContent');
                //Поиск определенного класса
                let ress = element.getAttribute('class');

                //Позицианирует блоки при нажатии
                if (ress.indexOf('showBlock')) {
                    element.style.order = -1;
                    element.style.textAlign = 'center';

                } else if (ress.indexOf('saitBarContent')) {
                    element.style.order = 0;
                    return;
                } else {
                    element.style.order = 1;
                }

            }

        });

    }
    showImages()

}