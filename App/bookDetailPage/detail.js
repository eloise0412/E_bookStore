const app={
data() {
    return {
      book: {}, // goBook()

      cart:
      JSON.parse(
        localStorage.getItem('cart')
      ) || [],

      wish:
      JSON.parse(
        localStorage.getItem('wish')  // addToWish(book) 要先存在才能驗證
      ) || [],

    }
},
  

methods:{


  returnBtn(){
  if(this.book.type==='ebook'){
    location.href ="/App/ebookPage/index.html"

  }else{
    location.href ="/App/audioPage/audioIndex/index.html"
  }

  },
  
  addToCart(book,event){

    const existingBook = this.cart.find(
      item => item.id === book.id
    );
  
    if(existingBook){
  
      existingBook.quantity++;
  
  
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

    const btnPop = event.currentTarget;

    btnPop.classList.remove("active");
    void btnPop.offsetWidth;
    btnPop.classList.add("active");

    btnPop.addEventListener("animationend",()=>{
      btnPop.classList.remove("active");
    },{once:true});
  
  },
  goBook() {

    if (this.book.type === "ebook") {

        location.href =
        `/App/ebookPage/readingPage/readingPage.html?id=${this.book.id}`;

    } else {

        location.href =
        `/App/audioPage/playPage/player.html?id=${this.book.id}`;
        
    }

},

  addToWish(book){

    if (!book) return;

    const existingWish = this.wish.findIndex(
      item => item.name === book.name
    );
  
    if(existingWish !== -1){
      this.wish.splice(existingWish, 1);
    }else{
      this.wish.push(book);
    }
  
    localStorage.setItem(
      'wish',
      JSON.stringify(this.wish)
    );   


  },


  isWish(book) {
    if (!book) return false;
    return this.wish.some(item => item.id === book.id);
  },
},

  
  mounted() {
    this.book = JSON.parse(
      localStorage.getItem("currentBook")
    );
  }

  
}

Vue.createApp(app).mount('#app')