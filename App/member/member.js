const app = {

    data(){  
        return{


            cart:
            JSON.parse(
              localStorage.getItem('cart')
            ) || []
            
        }

       },

       mounted(){

        console.log(this.cart);
    
    }


}  
Vue.createApp(app).mount('#app');



