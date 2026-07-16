const app = {
    data(){
        return{

            showSearch:false,
            keyword:'',

            audioProducts : [
                { name:'好玩的數學',category:'自然科普',price:350,id:23,author:'作者:克里斯汀',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "/img/書本封面-01.jpg" },
                { name:'理財手扶梯',category:'投資理財',price:350,id:24,author:'作者:艾利許',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "/img/書本封面-01.jpg" },
                { name:'浴室',category:'文學小說',price:350,id:25,author:'作者:艾利許',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "/img/書本封面-01.jpg" },
                { name:'韓文雜誌',category:'語言學習',price:350,id:26,author:'作者:艾利許',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "/img/書本封面-01.jpg" },
                { name:'多多葛的50個練習',category:'心理勵志',price:350,id:27,author:'作者:艾利許',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "/img/書本封面-01.jpg" },
            ],


        cart:
        JSON.parse(
            localStorage.getItem('cart')   //將本在cart裡的書繼續保持在這
        ) || [],

        categories:[
            '全部種類',
            '文學小說',
            '投資理財',    //<li v-for="category in categories"> 渲染在畫面上
            '心理勵志',
            '語言學習',
            '自然科普'
          ],
      
          currentCategory:'全部種類',   //目前使用者選到全部分類
            
            

        }
    },

    methods: {
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
          
            localStorage.setItem(  //將audio新加入的書存入本有的cart裡
              'cart',
              JSON.stringify(this.cart)  //存入cart的商品 stringify化 不是audioProducts
            );
          
          },


      

        goDetail(book){
        
            console.log(book.id);    //把目前使用者點到的這本書存起來，進入詳情頁面
            localStorage.setItem(
              'currentBook',
              JSON.stringify(book)
            );          
        }
    },

    computed:{
        filterBooks(){
      
        return this.audioProducts.filter(book => {

        // 分類條件
        const matchCategory =              
        this.currentCategory === '全部種類'
          ||
        book.category === this.currentCategory   //目前使用者選到哪個分類

         // 搜尋條件
        const matchKeyword =
        book.name.includes(this.keyword)

        const matchKeywordCategory =
        book.category.includes(this.keyword)

        // 分類符合  ||而且  (書名符合 或 分類符合)
        return matchCategory
        &&
        (
        matchKeyword
        ||
        matchKeywordCategory
        )
       })      
        }
      }
      
}

Vue.createApp(app).mount('#app');
