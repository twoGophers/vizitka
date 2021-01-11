
let app = new Vue ({
    el : '.app',
    data : {
        name : '',
        surname : '',
        phone : '',
        mail : '',
        messageContact : '',
        contactClick : 0,
        submitForm : false, 
    },


    computed : {
        
        //Страница Контактов, проверка на заполнение полей
        classContact : function() {
            
            if(this.name == '' || this.surname == '' || this.phone == '' || this.mail == '') {
                this.contactClick = 1;
                return console.log('no')
            } else {
                this.contactClick = 2;
                return  console.log('yes')
            }
        },
        emailIsValid: function() {
            return this.mail.includes('@')
        },
        phoneIsValid: function() {
            return this.phone.typeof('number')
        },
    },
    methods : {
        //Вторая стринница, контакты, очищает все заполненные поля
        resetFields : function() {
            this.name = '',
            this.surname = '',
            this.phone = '',
            this.mail = '',
            this.messageContact = ''
        }
    }

    
});

