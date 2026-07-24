const app = {

  data(){
    return{
      cart:
      JSON.parse(
        localStorage.getItem('cart')
      )||[],
      
      
      shippingFee:0,

        receiverName: '',
        phone: '',
        address: '',
        logistics:'',

        

    }
    
  },

  mounted() {
    const data = JSON.parse(
      localStorage.getItem('order')
    )


    if (data) {
      this.receiverName = data.name
      this.phone = data.phone
      this.address = data.address
    }
  },

  methods:{
    totalprice(){
      let total = 0;
      this.cart.forEach(item => {
      total += item.price* item.quantity
      });
      return total;
  },


    orderNumber(){
      return "BK" + Date.now().toString().slice(-8);
    },


  saveShippingFee(){
    console.log("saveShippingFee 執行了");
    localStorage.setItem(
      'saveShippingFee',
      JSON.stringify({
        shippingFee: this.shippingFee,
        finalPrice: this.finalPrice,
        logistics: this.logistics,
      })
    );
  },

  submitOrder() {
    if(!this.receiverName.trim()){
      alert('請輸入姓名');
      return;
    }
    if(!this.phone.trim()){
      alert('請輸入電話');
      return;
    }
    if(!this.address.trim()){
      alert('請輸入地址');
      return;
    }
    if(this.shippingFee === 0){
      alert('請選擇運送方式');
      return;
    }
    const order = {
      orderId: this.orderNumber(),

      name: this.receiverName,
      phone: this.phone,
      address: this.address,

      logistics: this.logistics,
      shippingFee: this.shippingFee,
      finalPrice: this.finalPrice,
      
      cart: this.cart
  };
  localStorage.setItem(
      "order",
      JSON.stringify(order)
  );
    location.href =
    '../success/success.html';
  },


  returnBtn(){
    location.href=
    '../cart/shoppingCart.html';
  }
  
},
computed:{  //不是function computed已先在這執行過涵式，function會不斷重整畫面，computed快截
  finalPrice(){
    return this.totalprice() + Number(this.shippingFee);
  }
}

}
Vue.createApp(app).mount("#app");

