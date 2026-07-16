const app={

    data(){
        return{
            cart:
            JSON.parse(
            localStorage.getItem('cart')
            )|| [],

            buyerInfo:
            JSON.parse(
            localStorage.getItem('buyerInfo')
            )|| {},
        }

        
    },


    mounted() {
        console.log(
            JSON.parse(
              localStorage.getItem('buyerInfo')
            )
          )
          

    },

    methods: {
        clearOrder(){
            // 先取得目前書櫃
            let bookshelf =
            JSON.parse(localStorage.getItem('bookshelf')) || []

            // 把購物車的書加入書櫃
            this.cart.forEach(book=>{

            // 檢查書櫃裡有沒有同一本
            const existBook = bookshelf.find(
                item => item.id === book.id
            )

            // 沒有才加入
            if(!existBook){
                bookshelf.push(book)
            }

            })

            // 存回 localStorage
            localStorage.setItem(
            'bookshelf',
            JSON.stringify(bookshelf)
            )
            // 清空購物車
            this.cart = []
            localStorage.removeItem('cart')
    },
    indexBtn(){
        location.href='../../home/index.html';
    }
}
    

}
Vue.createApp(app).mount("#app");



