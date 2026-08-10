const app = {

  data() {
      return {

          // 購物車
          cart: JSON.parse(
              localStorage.getItem('cart')
          ) || [],

          // 收件人資訊
          receiverName: '',
          phone: '',
          address: '',

          // 配送資訊
          logistics: '',
          shippingFee: 0,
      }
  },

  mounted() {  //input資料紀錄

    const buyerInfo = JSON.parse(
        localStorage.getItem('buyerInfo')
    );

    if (buyerInfo) {
        this.receiverName = buyerInfo.name;
        this.phone = buyerInfo.phone;
        this.address = buyerInfo.address;
    }

},


  computed: {

      // 商品總金額
      totalPrice() {
          let total = 0;

          this.cart.forEach(item => {
              total += item.price * item.quantity;
          });

          return total;
      },

      // 最終付款金額
      finalPrice() {
          return this.totalPrice + Number(this.shippingFee);
      }
  },


  methods: {

      // 產生訂單編號
      orderNumber() {
          return "BK" + Date.now().toString().slice(-8);
      },


      // 儲存配送資訊
      saveShippingFee() {

          localStorage.setItem(
              'shippingInfo',
              JSON.stringify({
                  shippingFee: this.shippingFee,
                  logistics: this.logistics
              })
          );
      },


      // 提交訂單
      submitOrder() {

          // 檢查姓名
          if (!this.receiverName.trim()) {
              alert('請輸入姓名');
              return;
          }

          // 檢查電話
          if (!this.phone.trim()) {
              alert('請輸入電話');
              return;
          }

          // 檢查地址
          if (!this.address.trim()) {
              alert('請輸入地址');
              return;
          }

          // 檢查運送方式
          if (this.shippingFee === 0) {
              alert('請選擇運送方式');
              return;
          }

        // 記住購買人資料
        localStorage.setItem(
            'buyerInfo',
            JSON.stringify({
                name: this.receiverName,
                phone: this.phone,
                address: this.address
            })
            );

       

          // 建立訂單
          const order = {

              orderId: this.orderNumber(),

              name: this.receiverName,
              phone: this.phone,
              address: this.address,

              logistics: this.logistics,
              shippingFee: this.shippingFee,

              totalPrice: this.totalPrice,
              finalPrice: this.finalPrice,

              cart: this.cart
          };


          // 儲存訂單
          localStorage.setItem(
              'order',
              JSON.stringify(order)
          );


          // 前往訂單完成頁
          location.href =
              '../success/success.html';
      },


      // 返回購物車
      returnBtn() {

          location.href =
              '../shoppingCart/Cart.html';
      }
  }
}


Vue.createApp(app).mount("#app");