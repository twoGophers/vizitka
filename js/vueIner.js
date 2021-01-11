let app2 = new Vue ({
    el : '.app2',
    data : {
        status: true,
        name : '',
    },
    methods: {
        //Блокирует нажатие кнопки, если поле не заполненно
        skip: function(e) {
            if(this.name == '') {
                this.status = false
                e.preventDefault()
            } else {
                this.status = true
            }
        },
    },
    computed : {
        //Первая страница, проверка на заполненность поля
        className : function() {
            if(this.status == true) {
                return 'startInput1'
            } else if(this.status == false) {
                return 'startInput'
            }
            
        }
    }
})