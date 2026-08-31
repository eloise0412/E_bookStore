const app = {

    data(){  
        return{

          isLogin: localStorage.getItem("isLogin") === "true",
          showMenu: false,
          isLogin: false,
          searchInput: '',
          keyword:'',
          

            bookshelf:
            JSON.parse(
              localStorage.getItem('bookshelf')
            ) || [],


       
            
            cart:
            JSON.parse(
              localStorage.getItem('cart')
            ) || [],
        
        }
        

       },
       created() {

        this.isLogin = localStorage.getItem("isLogin") === "true";

        },

        
       methods:{
                
        search() {
          this.keyword = this.searchInput;
      },

        removeCart(index){

            this.bookshelf.splice(index,1);
          
            localStorage.setItem(  //刪除後還要儲存
              'bookshelf',
              JSON.stringify(this.bookshelf)
            );
          
          },
          
          goDetail(book){
        
            localStorage.setItem(
              'currentBook',
              JSON.stringify(book)
            );          

            location.href =
            `../bookDetailPage/detail.html?id=${book.id}`;
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
        check(){
          console.log(
            this.bookshelf.filter(book =>
                !book.name || !book.category
            )
        );
        },
        
        filterBooks(){  //放大鏡關鍵字搜尋，已經幫你做完 wish 過濾filterBooks所以直接寫 v-for="(item,index) in filterBooks"
      
        return this.bookshelf.filter(book => {
         // 搜尋條件

         console.log("目前資料：", book);

        const matchKeyword =
        book.name.includes(this.keyword)

        const matchKeywordCategory =
        book.category.includes(this.keyword)

        // 分類符合  ||而且  (書名符合 或 分類符合)
        return (
          matchKeyword ||
          matchKeywordCategory
      );

  });

}
}

}  
Vue.createApp(app).mount('#app');
