const app={
data() {
    return {
      book: {},

      cart:
      JSON.parse(
        localStorage.getItem('cart')
      ) || [],

    }
},
  

methods:{
  
  addToCart(book){

    const existingBook = this.cart.find(
      item => item.name === book.name
    );
  
    if(existingBook){
  
      existingBook.quantity++;
  
      console.log(existingBook.quantity);
  
    }else{
  
      this.cart.push({
        ...book,
        quantity:1
      });
  
    }
  
    localStorage.setItem(
      'cart',
      JSON.stringify(this.cart)
    );
  
  },
},

  
  mounted() {
    this.book = JSON.parse(
      localStorage.getItem("currentBook")
    );
    console.log(this.book);
  }

  
}

Vue.createApp(app).mount('#app')