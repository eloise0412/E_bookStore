const app = {

    data() {
        return {
          
          isLogin: false,

            cart:
            JSON.parse(
              localStorage.getItem('cart')
            ) || []
        }
    },


    methods:{
      
      returnBtn(){
        window.history.back();
      },

      saveCart(){
        localStorage.setItem(
          'cart',
          JSON.stringify(this.cart)         
        );

      },


        removeCart(index){

            this.cart.splice(index,1);
          
            localStorage.setItem(
              'cart',
              JSON.stringify(this.cart)
            );
          
          },

          returnBtn(){
            location.href='/App/eBookPage/index.html';
          },

          paymentBtn(){
            location.href='../pay/payment.html';
          }
      
      },
      created() {
        this.isLogin = localStorage.getItem("isLogin") === "true";
      },

}

Vue.createApp(app).mount("#app");
