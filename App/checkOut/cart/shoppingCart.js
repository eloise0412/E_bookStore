const app = {

    data() {
        return {
            cart:
            JSON.parse(
              localStorage.getItem('cart')
            ) || []
        }
    },


    methods:{


      saveCart(){
        localStorage.setItem(
          'cart',
          JSON.stringify(this.cart)         
        );

        console.log(this.cart);
      },


        removeCart(index){

            this.cart.splice(index,1);
          
            localStorage.setItem(
              'cart',
              JSON.stringify(this.cart)
            );
          
          },

          returnBtn(){
            location.href='../../home/index.html';
          },

          paymentBtn(){
            location.href='../pay/payment.html';
          }
      
      }

}

Vue.createApp(app).mount("#app");
