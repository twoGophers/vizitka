
////
//Функция перебора элементов с характеристиками
function mouse(colorId, imageMouse, price, colorMouse) {
    return {
        colorId, imageMouse, price, colorMouse
    };
};

const mouses = [
    mouse('Red',"https://ae01.alicdn.com/kf/H6b1790642be94d908a0580826b19cfaaB/2-4-DPI-6.jpg_640x640.jpg", 5, 0),
    mouse('Green',"https://ae01.alicdn.com/kf/Hf37657f7444e44a89b04e99f54b3b8758/2-4-DPI-6.jpg_640x640.jpg", 7, 0),
    mouse('Black',"https://ae01.alicdn.com/kf/H5169d05d87fe4eea9c83e23fadf2bdefJ/2-4-DPI-6.jpg_640x640.jpg", 5, 0),
    mouse('Blue',"https://ae01.alicdn.com/kf/He10cad3be9624ec7b21a930d74233d5bC/2-4-DPI-6.jpg_640x640.jpg", 6, 0)

    
]
//Вторая мышка
function mouse1(colorId1, imageMouse1, price1, colorMouse1) {
    return {
        colorId1, imageMouse1, price1, colorMouse1
    };
};

const mouses1 = [
    mouse1('Black',"https://ae01.alicdn.com/kf/HTB1VhCISYvpK1RjSZFqq6AXUVXat/2-4G-4-2000-DPI.jpg_640x640.jpg", 15, 0),
    mouse1('Red',"https://ae01.alicdn.com/kf/HTB1pguMSW6qK1RjSZFmq6x0PFXaN/2-4G-4-2000-DPI.jpg_640x640.jpg", 17, 0),
    mouse1('Silver',"https://ae01.alicdn.com/kf/HTB1.Vr6X2c3T1VjSZLeq6zZsVXaQ/2-4G-4-2000-DPI.jpg_640x640.jpg", 15, 0),
    mouse1('Yellow',"https://ae01.alicdn.com/kf/HTB1d95zS6DpK1RjSZFrq6y78VXab/2-4G-4-2000-DPI.jpg_640x640.jpg", 16, 0) 
]

//Третья мышка
function mouse2(colorId2, imageMouse2, price2, colorMouse2) {
    return {
        colorId2, imageMouse2, price2, colorMouse2
    };
};

const mouses2 = [
    mouse2('Pink',"https://ae01.alicdn.com/kf/HTB1xuocLFYqK1RjSZLeq6zXppXau/2019.jpg_640x640.jpg", 25, 0),
    mouse2('Red',"https://ae01.alicdn.com/kf/HTB1z1chLHrpK1RjSZTEq6AWAVXaf/2019.jpg_640x640.jpg", 27, 0),
    mouse2('Blue',"https://ae01.alicdn.com/kf/HTB1zCQfLSzqK1RjSZFpq6ykSXXax/2019.jpg_640x640.jpg", 25, 0),
    mouse2('Green',"https://ae01.alicdn.com/kf/HTB1YOIeLFzqK1RjSZSgq6ApAVXaV/2019.jpg_640x640.jpg", 26, 0) 
]



// Отображение мышки
let Blog = new Vue({
    el : '.Blog',
    data : {
        //Первая мышка
        titleBlog : ' Gaming Mouse №1',
        inStock : true,
        details : ['2,4 GHZ', 'Adjustable DPI', 'USB Receiver', 'For a laptop', 'Points : 1600'],
        mouses : mouses,
        mouse: mouses[0],
        selectedMouseIndex : 0,
        cart : 0,
        
        //
        titleBlog1 : 'NoEnName_Null №2',
        inStock : true,
        details1 : ['2,4 GHZ', 'Adjustable DPI', 'USB Receiver', 'For a laptop', 'Points : 2000'],
        mouses1 : mouses1,
        mouse1: mouses1[0],
        selectedMouseIndex1 : 0,
        cart1 : 0,
        //
        titleBlog2 : 'Wireless  Mouse №3',
        inStock : true,
        details2 : ['2,4 GHZ', 'Adjustable DPI', 'USB Receiver', 'PC mouse', 'Points : 1600'],
        mouses2 : mouses2,
        mouse2: mouses2[0],
        selectedMouseIndex2 : 0,
        cart2 : 0,
    },

    // Отображение нажатой мышки
    methods: {

        selectMouse : function (index) {

            this.mouse = mouses[index];
            this.selectedMouseIndex = index;
         
        },
        selectMouse1 : function (index1) {
            this.mouse1 = mouses1[index1];
            this.selectedMouseIndex1 = index1;
        },
        selectMouse2 : function (index2) {
            this.mouse2 = mouses2[index2];
            this.selectedMouseIndex2 = index2;
        },

        addToMouse : function () {
            
            this.cart += 1;
            this.mouse.colorMouse += 1;

        },

        addToMouse1 : function () {            
            this.cart1 += 1;
            this.mouse1.colorMouse1 += 1;
        },
        addToMouse2 : function () {
            
            this.cart2 += 1;
            this.mouse2.colorMouse2 += 1;

        },

        resetaddToMouse : function () {
            
            this.mouse.colorMouse = 0;
            this.cart = 0;
        },
        resetaddToMouse1 : function () {
            
            this.mouse1.colorMouse1 = 0;
            this.cart1 = 0;
        },
        resetaddToMouse2 : function () {
            
            this.mouse2.colorMouse2 = 0;
            this.cart2 = 0;
        }

    },

    computed : {
        //Корзина сложения 
        carTotal () {
            let result = []

            for(let item of this.mouses) {
               result.push(item.price * item.colorMouse) 
            }

            result = result.reduce(function(sum, el) {
                return sum + el;
            })
            return result
        },
        carTotal1 () {
            let result = []

            for(let item of this.mouses1) {
               result.push(item.price1 * item.colorMouse1) 
            }

            result = result.reduce(function(sum, el) {
                return sum + el;
            })
            return result
        },
        carTotal2 () {
            let result = []

            for(let item of this.mouses2) {
               result.push(item.price2 * item.colorMouse2) 
            }

            result = result.reduce(function(sum, el) {
                return sum + el;
            })
            return result
        },
        summatotal () {
            let result = [];
            result.push(this.carTotal + this.carTotal1 + this.carTotal2);
            return result
            
        },
        
    }

    
})


//Нажатие по картинке с товаром
let mouse1T1 = document.querySelector('.mouse11');
let mouse1T2 = document.querySelector('.mouse22');
let mouse1T3 = document.querySelector('.mouse33');

mouse1T1.addEventListener('click',() => {
    mouse1T.style.display = 'flex';
    cartMouse1.style.display = 'flex';

    mouse2T.style.display = 'none';
    cartMouse2.style.display = 'none';

    mouse3T.style.display = 'none';
    cartMouse3.style.display = 'none';
});

mouse1T2.addEventListener('click',() => {
    mouse1T.style.display = 'none';
    cartMouse1.style.display = 'none';

    mouse2T.style.display = 'flex';
    cartMouse2.style.display = 'flex';

    mouse3T.style.display = 'none';
    cartMouse3.style.display = 'none';
});

mouse1T3.addEventListener('click',() => {
    mouse1T.style.display = 'none';
    cartMouse1.style.display = 'none';

    mouse2T.style.display = 'none';
    cartMouse2.style.display = 'none';

    mouse3T.style.display = 'flex';
    cartMouse3.style.display = 'flex';
});

//Отображаемые блоки с мышками
let mouse1T = document.querySelector('.mouse1');
mouse1T.style.display = 'none';
let cartMouse1 = document.querySelector('.cartMouse1');
cartMouse1.style.display = 'none';


let mouse2T = document.querySelector('.mouse2');
mouse2T.style.display = 'none';
let cartMouse2 = document.querySelector('.cartMouse2');
cartMouse2.style.display = 'none';

let mouse3T = document.querySelector('.mouse3');
mouse3T.style.display = 'none';
let cartMouse3 = document.querySelector('.cartMouse3');
cartMouse3.style.display = 'none';
//

