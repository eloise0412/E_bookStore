const app = {

    data(){  
        return{

            isLogin: false,

            cart:
            JSON.parse(
              localStorage.getItem('cart')
            ) || []
            
        }

       },

       mounted(){

        console.log(this.cart);
    
    },

    methods: {
        logout() {
    
            localStorage.removeItem("isLogin");
    
            location.href ="../loginPage/login.html";
    
        },

        login(){
            location.href ="../loginPage/login.html";
        }
    },
    created() {

        this.isLogin = localStorage.getItem("isLogin") === "true";

        },


}  
Vue.createApp(app).mount('#app');



