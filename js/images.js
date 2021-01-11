window.onload = function () {
    let images = {
        "1": {
            "name": "Nature1",
            "adressImages": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnatworld.info%2Fo-prirode-dlja-shkoly%2Fsochinenija-o-prirode%2Fsochinenie-na-temu-priroda&psig=AOvVaw1mgn7AG11Njlk1QJdbYJqn&ust=1610476815687000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj81-fDlO4CFQAAAAAdAAAAABAO",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "2": {
            "name": "Nature2",
            "adressImages": "https://sites.google.com/site/prirodanasevseegooglgfgf",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "3": {
            "name": "Nature3",
            "adressImages": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fklike.net%2F1191-priroda-krasivye-kartinki-40-foto.html&psig=AOvVaw1mgn7AG11Njlk1QJdbYJqn&ust=1610476815687000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj81-fDlO4CFQAAAAAdAAAAABAf",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "4": {
            "name": "Nature4",
            "adressImages": "https://www.google.com/url?sa=i&url=https%3A%2F%2Ficocnews.ru%2Fizuchenie-biblii%2Fvoprosy-i-otvety%2Fpriroda-sozdana-bogom-i-svidetelstvuet-o-boge.html&psig=AOvVaw1mgn7AG11Njlk1QJdbYJqn&ust=1610476815687000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj81-fDlO4CFQAAAAAdAAAAABAl",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "5": {
            "name": "Nature5",
            "adressImages": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnews.utmn.ru%2Fevents%2F815116%2F&psig=AOvVaw1mgn7AG11Njlk1QJdbYJqn&ust=1610476815687000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj81-fDlO4CFQAAAAAdAAAAABBK",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "6": {
            "name": "Nature6",
            "adressImages": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.yaklass.ru%2Fp%2Fokruzhayushchij-mir%2F3-klass%2Fpriroda-vokrug-nas-324086%2Fchto-sostavliaet-zhivuiu-prirodu-324130%2Fre-8ac91192-2665-4fcd-9494-edac2ad38f7d&psig=AOvVaw1mgn7AG11Njlk1QJdbYJqn&ust=1610476815687000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj81-fDlO4CFQAAAAAdAAAAABAx",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "7": {
            "name": "Nature7",
            "adressImages": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnatworld.info%2Fo-prirode-dlja-shkoly%2Fsochinenija-o-prirode%2Fsochinenie-na-temu-krasota-prirody&psig=AOvVaw1mgn7AG11Njlk1QJdbYJqn&ust=1610476815687000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj81-fDlO4CFQAAAAAdAAAAABA4",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "8": {
            "name": "Nature8",
            "adressImages": "https://sites.google.com/site/prirodamoazizn",
            "message": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti debitis vitae consequatur possimus, voluptates tempora deleniti aliquam deserunt itaque, autem excepturi sit minus obcaecati aliquid?"
        },
        "9": {
            "name": "Nature9",
            "adressImages": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.freepik.com%2Fphotos%2Fnature&psig=AOvVaw1mgn7AG11Njlk1QJdbYJqn&ust=1610476815687000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj81-fDlO4CFQAAAAAdAAAAABBE",
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