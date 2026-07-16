const app={
        data(){
            return{
                audioProducts : [
                    { name:'好玩的數學',category:'自然科普',price:350,id:1,author:'作者:克里斯汀',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "/img/書本封面-01.jpg" }
                   
                ]

            }
        },

        methods:{
            
        getBook(){
            localStorage.setItem(
                'getBook',
                JSON.stringify(this.audioProducts)
              );
        }

        },

    
        mounted(){
            this.getBook();  //執行getBook  存取資料
           
        }


}
Vue.createApp(app).mount('#app');
