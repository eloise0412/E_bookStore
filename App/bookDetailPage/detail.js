const app={
data() {
    return {

      showMenu: false,
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
  
  addToCart(book) {

    const existingBook = this.cart.find(
      item => item.id === book.id
    );

    if (existingBook) {

      existingBook.quantity++;
      alert('已加入購物車');

    } else {

      this.cart.push({
        ...book,
        quantity: 1
      });

    }

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cart)
    );
  },


  addToWish(book) {

    if (!book) return;

    alert('已加入心願清單');

    const existingWish = this.wish.findIndex(
      item => item.name === book.name
    );

    if (existingWish !== -1) {

      this.wish.splice(existingWish, 1);

    } else {

      this.wish.push(book);

    }

    localStorage.setItem(
      'wish',
      JSON.stringify(this.wish)
    );
  },


  goBook(book) {

    if (book.type === "ebook") {

      location.href =
        `/App/ebookPage/readingPage/readingPage.html?id=${book.id}`;

    } else {

      location.href =
        `/App/audioPage/playPage/player.html?id=${book.id}`;

    }
  },


  isWish(book) {

    if (!book) return false;

    return this.wish.some(
      item => item.id === book.id
    );
  }
},

  
  mounted() {
    this.book = JSON.parse(
      localStorage.getItem("currentBook")
    );
  }

  
}

Vue.createApp(app).mount('#app')