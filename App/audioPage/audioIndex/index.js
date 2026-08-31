const app = {
    data(){
        return{

            isLogin: localStorage.getItem("isLogin") === "true",
            showMenu: false,
            searchInput: '',
            keyword:'',
            heartPop:false,

            audioProducts : [
                { name:'好玩的數學',category:'自然科普',price:350,id:23,author:'克里斯汀',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "../../../img/書本封面-23.jpg" },
                { name:'理財手扶梯',category:'投資理財',price:350,id:24,author:'艾利許',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "../../../img/書本封面-24.jpg" },
                { name:'浴室',category:'文學小說',price:350,id:25,author:'艾利許',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "../../../img/書本封面-25.jpg" },
                { name:'韓文雜誌',category:'語言學習',price:350,id:26,author:'艾利許',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "../../../img/書本封面-26.jpg" },
                { name:'多多葛的50個練習',category:'心理勵志',price:350,id:27,author:'艾利許',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "../../../img/書本封面-27.jpg" },
            ],


        cart:
        JSON.parse(
            localStorage.getItem('cart')   //將本在cart裡的書繼續保持在這
        ) || [],

        wish:
        JSON.parse(
          localStorage.getItem('wish')  // addToWish(book) 要先存在才能驗證
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
        addToCart(book,event){
          

            const existingBook = this.cart.find(
              item => item.name === book.name
            );
          
            if(existingBook){
          
              existingBook.quantity++;
          

          
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
          

              const btnPop = event.currentTarget;

              btnPop.classList.remove("active");
              void btnPop.offsetWidth;
              btnPop.classList.add("active");

              btnPop.addEventListener("animationend",()=>{
                btnPop.classList.remove("active");
              },{once:true});
            
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
      

        goDetail(book){
        

            localStorage.setItem(
              'currentBook',
              JSON.stringify(book)
            );          

            location.href =
            `../../bookDetailPage/detail.html?id=${book.id}`;
        },
        search() {

          this.keyword = this.searchInput;
          
      },
      handleLogin() {

        if (this.isLogin) {
            // 已登入 → 登出
            localStorage.removeItem('isLogin');
            this.isLogin = false;

        } else {
            // 未登入 → 前往登入頁
            location.href = "/App/loginPage/login.html";
        }

    },
      goindex(){
      location.href='/App/eBookPage/index.html';
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


const carousel = document.querySelector('.carousel-slider');
const wrapper = document.querySelector('.carousel-img-contain');
const dots = document.querySelectorAll('.dotBtn');

let startX = 0;
let currentIndex = 0;


// 移動到指定圖片
function moveCarousel() {

  wrapper.style.transform =
    `translateX(-${currentIndex * 100}%)`;

}


// 點擊圓點
dots.forEach(dotBtn => {

  dotBtn.addEventListener('click', () => {

    currentIndex = Number(dotBtn.dataset.index);

    moveCarousel();

  });

});


// 手指開始觸碰
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});


// 手指離開
carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const distance = endX - startX;


  // 往左滑
  if (distance < -50) {
    if (currentIndex < dots.length - 1) {
      currentIndex++;
    }
  }


  // 往右滑
  if (distance > 50) {
    if (currentIndex > 0) {
      currentIndex--;
    }
  }


  moveCarousel();

});
