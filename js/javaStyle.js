

   //Slider Back ground
   function slider() {

       let arr = ['menBg1.jpg', 'menBg2.jpg', 'menBg3.jpg', 'menBg4.jpg', 'menBg5.jpg'];
       let bgImage = document.querySelector('.men__body');
       let i = 0;

       function start() {

           bgImage.style.backgroundImage = 'url(../images/' + arr[i];
           i++;
           if (i == arr.length) {
               i = 0;
               console.log(i)
           }
           setTimeout(start, 9000); //9000
       };

       start();
   };
   slider();


   //Анимация с блоком
   function animationBlock() {


       //Запуск первого блока
       setTimeout(() => {

           let block = document.querySelector('.men__block');
           block.classList.add('prof');

           //Первое предложение    
           let blockPages1 = document.querySelector('.myName1');
           blockPages1.classList.add('Pages1');

           //2 предложение 
           let blockPages2 = document.querySelector('.myName2');
           blockPages2.classList.add('Pages2');

           //3 предложение
           let blockPages3 = document.querySelector('.myName3');
           blockPages3.classList.add('Pages3');

           //4 предложение
           let blockPages4 = document.querySelector('.myName4');
           blockPages4.classList.add('Pages4');

       }, 3000);

   };
   animationBlock()


   //Переход по ссылкам, по нажатию кнопок

   let homeBg = document.querySelector('.men__body');
   let contactBg = document.querySelector('.men__body1');
   let aboutBg = document.querySelector('.men__body2');
   let blogBg = document.querySelector('.men__body3');
   //Фон header
   let headerFon = document.querySelector('.navigation');

   //Переменные после основного блока
   let saitBar = document.querySelector('.saitBar');
   let saitBarAbout = document.querySelector('.saitBarAbout');

   //Блок после BLOG
   let BlogMen = document.querySelector('.Blog1');
   BlogMen.style.display = 'none';

   //Блок после Формы
   let contactBlo = document.querySelector('.contactBlockMen');
   contactBlo.style.display = 'none';

   function contact() {

       headerFon.style.backgroundImage = 'url(../images/headerBgContact.jpg)'; //Картинка при смене
       contactBg.style.display = 'flex';
       homeBg.style.display = 'none';
       aboutBg.style.display = 'none';
       blogBg.style.display = 'none';

       //Сайтбар /Видимость
       saitBar.style.display = 'none';
       saitBarAbout.style.display = 'none';

       
       //Вмдимоть блока мышек
       if(contactBg.style.display === 'flex') {
        BlogMen.style.display = 'none';
        contactBlo.style.display = 'flex';
    }
   }
   document.querySelector('.contact').onclick = contact;
   document.querySelector('.contact1').onclick = contact;

   function home() {
       headerFon.style.backgroundImage = 'url(../images/headerBg.jpg)'; //Картинка при смене
       contactBg.style.display = 'none';
       homeBg.style.display = 'flex';
       aboutBg.style.display = 'none';
       blogBg.style.display = 'none';

       //Сайтбар /Видимость
       saitBar.style.display = 'flex';
       saitBarAbout.style.display = 'none';


       //Видимоть блока мышек
       
       if(homeBg.style.display === 'flex') {
        BlogMen.style.display = 'none';
        contactBlo.style.display = 'none';
    }
   }
   document.querySelector('.home').onclick = home;
   document.querySelector('.home1').onclick = home;

   function about() {
       headerFon.style.backgroundImage = 'url(../images/headerBgAbout.jpg)'; //Картинка при смене
       contactBg.style.display = 'none';
       homeBg.style.display = 'none';
       aboutBg.style.display = 'flex';
       blogBg.style.display = 'none';

       //Сайтбар /Видимость
       saitBar.style.display = 'none';
       saitBarAbout.style.display = 'flex';

       //Видимоть блока мышек
       
       if(aboutBg.style.display === 'flex') {
           BlogMen.style.display = 'none';
           contactBlo.style.display = 'none';
       }
   }
   document.querySelector('.about').onclick = about;
   document.querySelector('.about1').onclick = about;

   function blog() {

       headerFon.style.backgroundImage = 'url(../images/headerBgBlog.jpg)'; //Картинка при смене
       contactBg.style.display = 'none';
       homeBg.style.display = 'none';
       aboutBg.style.display = 'none';
       blogBg.style.display = 'flex';

       //Сайтбар /Видимость
       saitBar.style.display = 'none';
       saitBarAbout.style.display = 'none'; 

       //Видимоть блока мышек
       
    if(blogBg.style.display === 'flex') {
        BlogMen.style.display = 'flex';
        contactBlo.style.display = 'none';
        
   } else {
    BlogMen.style.display = 'none';
   }


   }
   document.querySelector('.blog').onclick = blog;
   document.querySelector('.blog1').onclick = blog;



//Вертикальное меню при нажатии на картинку с расширением меньше 650рх
let minNavbarMenu = document.querySelector('.minNavbarMenu');
//minNavbarMenu.style.display = 'none'

// minNavbarMenu.addEventListener('click',function(e) {
//     console.log(e.target);
// })


let minNavbarIMG = document.querySelector('.minNavbarIMG');

setTimeout(minNavbarIMG.addEventListener('click', function() {

    if(minNavbarMenu.style.display == 'flex') {
        minNavbarMenu.style.display = 'none';
        
    } else {
        minNavbarMenu.style.display = 'flex';
 
    };

}), 2000);



