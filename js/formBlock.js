Vue.component('porduct-display', {
    template : `
    <div class="contactBl">
    <div class="contactBlockImage">
        <img v-bind:src="imageMauseContact" >
    </div>

    <div class="contactBlockContent">
        <div class="contactBlockContent1">

            <h3>{{productMouse}}</h3>
            <ul>
                <li v-for = "detail of details">{{detail}}</li>
            </ul>
        </div>
        <hr>
        <div class="contactBlockColor">
            <p
            v-for = "variant in variants" 
            v-bind:key = "variant.id" 
            v-on:click = "updateImage(variant.imageMauseContact)"
            :style = "{backgroundColor : variant.colorBg}" 
            >{{variant.color}}
            </p>
            
        </div>
        <hr>
        <div class="contactBlockButt">
            <button class="btn btn-success" v-on:click = "resetContactBlock()">Reset</button>
            <button class="btn btn-success" v-on:click = "addContactBlock()">Add Mouse</button>
            <div class="contactBlockCart">Add({{contactBlock}})</div>
        </div>
        
        
    </div>

    
    <div class="cartContact"></div>
</div>
    `,
    data () {
        return {
            contactBlock : 0,
            productMouse : 'Mouse USB',
            brand : 'LCXIN',
            details : ['Points : 3200', 'Number of buttons : 6',  'Gross Weight : 156g', 'Software Type: Wired'],
            imageMauseContact : 'https://ae01.alicdn.com/kf/H868298b678cd43dfbc3f64e888b8e2c5M/USB-Gamer.jpg_640x640.jpg',
            variants : [
                
                {id : 1, color : 'White',colorBg : '#DCE2EE', imageMauseContact : 'https://ae01.alicdn.com/kf/H868298b678cd43dfbc3f64e888b8e2c5M/USB-Gamer.jpg_640x640.jpg', quanty : 0},
                {id : 2, color : 'Black',colorBg : '#26292F', imageMauseContact : 'https://ae01.alicdn.com/kf/H43e8b88dbec240a38e7773aa20327470o/USB-Gamer.jpg_640x640.jpg', quanty : 0},
                {id : 3, color : 'Star Black', colorBg : '#41444F', imageMauseContact : 'https://ae01.alicdn.com/kf/Hc84ecdbcf11e4e63a157933f5449636cc/USB-Gamer.jpg_640x640.jpg', quanty : 0},
                {id : 4, color : 'Gray',colorBg : '#676F78', imageMauseContact : 'https://ae01.alicdn.com/kf/H2dd8dc42e9634ef08d39ceb04d67b22fY/USB-Gamer.jpg_640x640.jpg', quanty : 0},
                

                
                // {id : 21, color : 'White',colorBg : '#DCE2EE', imageMauseContact : 'https://ae01.alicdn.com/kf/Ha023c45ea397445ca73e3d732eb4e7b6F/Viper-Q5-USB.jpg_640x640.jpg', quanty : 0},
                // {id : 22, color : 'Black',colorBg : '#26292F', imageMauseContact : 'https://ae01.alicdn.com/kf/H6145666accac4536ab3651d9dc2706a2k/Viper-Q5-USB.jpg_640x640.jpg', quanty : 0},
                // {id : 23, color : 'Star Black', colorBg : '#41444F', imageMauseContact : 'https://ae01.alicdn.com/kf/H578143248b8247f98ad96475d0e84426S/Viper-Q5-USB.jpg_640x640.jpg', quanty : 0},
                // {id : 24, color : 'Gray',colorBg : '#676F78', imageMauseContact : 'https://ae01.alicdn.com/kf/H5a92287ccef74bd48f471d97c0beab3fC/Viper-Q5-USB.jpg_640x640.jpg', quanty : 0},
                 
                
            ]
        }
    },
    methods: {
        updateImage (variantImage) {
            this.imageMauseContact = variantImage;
        },
        resetContactBlock () {
            this.contactBlock = 0;
        },
        addContactBlock () {
            this.contactBlock += 1;
        }
    },
})



//Вуе программа
let contactBlock = new Vue({
    el : '.contactBlock',
    
})