const app = {

    data(){  
        return{

            bookshelf:
            JSON.parse(
              localStorage.getItem('bookshelf')
            ) || [],

            showSearch:false,
            keyword:'',
            
            cart:
            JSON.parse(
              localStorage.getItem('cart')
            ) || [],
        
        }

       },
       methods:{

        removeCart(index){

            this.bookshelf.splice(index,1);
          
            localStorage.setItem(  //刪除後還要儲存
              'bookshelf',
              JSON.stringify(this.bookshelf)
            );
          
          },
          
          goDetail(book){
        
            console.log(book.id);
            localStorage.setItem(
              'currentBook',
              JSON.stringify(book)
            );          
        }
       },

       computed:{
        filterBooks(){  //放大鏡關鍵字搜尋，已經幫你做完 wish 過濾filterBooks所以直接寫 v-for="(item,index) in filterBooks"
      
        return this.bookshelf.filter(book => {
         // 搜尋條件
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
