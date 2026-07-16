const app = {

    data(){  
        return{

            showSearch:false,
            keyword:'',

            products: [
                { name:'量子習慣',category:"自然科普", price:350,id:1,author:'作者:克里斯汀',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'2020年暢銷榜,蟬連3年銷售第一...',cover: "/img/書本封面-01.jpg" },
                { name:'極光下的咖啡館',category:"文學小說", price:340,id:2,author:'作者:草鹿光葉',press:'出版社:文化出版',date:'出版日期:2026/3月',translator:'譯者:小貓', introduction:'日本xxx金獎,最有溫度的故事...',cover: "/img/書本封面-02.jpg" },
                { name:'被誇獎的勇氣' ,category:"心理勵志", price:285,id:3,author:'作者:安妮貝勒',press:'出版社:安心出版',date:'出版日期:2014/1月',translator:'譯者:池塘的鴨', introduction:'提出戰勝冒牌者症候群與欣然接受...' , cover: "/img/書本封面-03.jpg"},
                { name:'致富密碼',category:"投資理財", price:380,id:4,author:'作者:羅倫斯亞倫',press:'出版社:大石出版',date:'出版日期:2023/6月',translator:'譯者:兔子先生', introduction:'美國紐約富豪的13個獨家訣竅...', cover: "/img/書本封面-04.jpg" },
                { name:'持續健身',category:"心理勵志", price:390,id:5,author:'作者:艾摩西海勒',press:'出版社:大石出版',date:'出版日期:2021/3月',translator:'譯者:兔子先生', introduction:'2023年暢銷榜,蟬連3年銷售第一...' , cover: "/img/書本封面-05.jpg"},
                { name:'如何觀察萬事萬物',category:"自然科普", price:485,id:6,author:'作者:愛德米米蘭',press:'出版社:光愛出版',date:'出版日期:1990/1月',translator:'譯者:大樹爺爺', introduction:'任何事情都可以觀察、紀錄...' , cover: "/img/書本封面-06.jpg"},
                { name:'長男病',category:"心理勵志", price:380,id:7,author:'作者:山先祥太郎',press:'出版社:文化出版',date:'出版日期:1987/3月',translator:'譯者:大樹爺爺', introduction:'你常常聽到長女病那你有聽過...' , cover: "/img/書本封面-07.jpg"},
                { name:'無痛溝通',category:"心理勵志", price:285,id:8,author:'作者:安娜杰斯汀',press:'出版社:安心出版',date:'出版日期:2018/6月',translator:'譯者:兔子先生', introduction:'2023年暢銷榜,蟬連3年銷售第一...' , cover: "/img/書本封面-08.jpg"},
                { name:'台灣復古插畫配色',category:"文學小說", price:300,id:9,author:'作者:大貓老師',press:'出版社:極光出版社',date:'出版日期:2025/3月', introduction:'2023年暢銷榜,蟬連3年銷售第一...' , cover: "/img/書本封面-09.jpg"},
                { name:'為何貓會做夢',category:"自然科普", price:320,id:10,author:'作者:多諾倫爾提爾',press:'出版社:大石出版',date:'出版日期:2024/8月',translator:'譯者:池塘的鴨', introduction:'貓咪的夢境裡跟人有不同...' , cover: "/img/書本封面-10.jpg"},
                { name:'阿甘增產法',category:"投資理財", price:300,id:11, author:'作者:羅伯特戴蒙',press:'出版社:文化出版',date:'出版日期:2020/5月',translator:'譯者:池塘的鴨',introduction:'2021年暢銷榜,蟬連3年銷售第一...', cover: "/img/書本封面-11.jpg" },
                { name:'吐司的ETF日記',category:"投資理財", price:285,id:12, author:'作者:吐司酥酥',press:'出版社:極光出版社',date:'出版日期:2026/1月',introduction:'ig網紅"吐司"出書啦!!教你如何用...', cover: "/img/書本封面-12.jpg" },
                { name:'有效溝通',category:"心理勵志" ,price:300, id:13,author:'作者:亞歷桑愛勒',press:'出版社:文化出版',date:'出版日期:2025/3月',translator:'譯者:池塘的鴨',introduction:'最有效溝通法則,12章節讓你快速理解...', cover: "/img/書本封面-13.jpg" },
                { name:'談判的優雅',category:"投資理財", price:350,id:14,author:'作者:安妮貝勒',press:'出版社:安心出版',date:'出版日期:2014/1月',translator:'譯者:池塘的鴨', introduction:'真誠的了解對方比用任何技巧...', cover: "/img/書本封面-14.jpg" },
                { name:'為何貓咪會崛起',category:"自然科普", price:320,id:15,author:'作者:多諾倫爾提爾',press:'出版社:大石出版',date:'出版日期:2024/8月',translator:'譯者:池塘的鴨',introduction:'為什麼貓咪會成為這個世代...', cover: "/img/書本封面-15.jpg" },
                { name:'狗勾的行為強化',category:"自然科普", price:320,id:16,author:'作者:多諾倫爾提爾',press:'出版社:大石出版',date:'出版日期:2024/8月',translator:'譯者:池塘的鴨',introduction:'狗狗的教育方式跟貓咪不一樣...' , cover: "/img/書本封面-16.jpg"},
                { name:'失控的網路世代',category:"心理勵志", price:400,id:17,author:'作者:克里斯汀',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'對手機等資訊感到不離手...', cover: "/img/書本封面-17.jpg" },
                { name:'學學宋朝養生法',category:"文學小說", price:285,id:18,author:'作者:羅新',press:'出版社:極光出版',date:'出版日期:2026/3月', introduction:'你知道整腸藥最早在xx年就有了嗎?...' , cover: "/img/書本封面-18.jpg"},
                { name:'多益冠軍級講師',category:"語言學習", price:380,id:19,author:'作者:金佳豪',press:'出版社:文化出版',date:'出版日期:2026/3月', introduction:'2023年暢銷榜,蟬連3年銷售第一...', cover: "/img/書本封面-19.jpg" },
                { name:'快樂學日文',category:"語言學習", price:450,id:20,press:'出版社:文化出版',date:'2020/3月',introduction:'出版日期:2023年暢銷榜,蟬連3年銷售第一...' , cover: "/img/書本封面-20.jpg"},
                { name:'科技之道',category:"自然科普", price:300,id:21,author:'作者:克里斯汀',press:'出版社:大石出版',date:'出版日期:2020/3月',translator:'譯者:兔子先生', introduction:'你不去理科技,科技不會來理你...' , cover: "/img/書本封面-21.jpg"},
                { name:'拿波倫傳',category:"文學小說", price:350, id:22,author:'作者:里尼安多尼',press:'出版社:文化出版',date:'出版日期:2020/3月',translator:'譯者:池塘的鴨',introduction:'被視為歷史上最偉大的軍事統帥之一...', cover: "/img/書本封面-22.jpg" },
              ],

              cart:
              JSON.parse(
                localStorage.getItem('cart')
              ) || [],
        

              wish:
              JSON.parse(
                localStorage.getItem('wish')  // addToWish(book) 要先存在才能驗證
              ) || [],
          

              categories:[
                '全部種類',
                '文學小說',
                '投資理財',
                '心理勵志',
                '語言學習',
                '自然科普'
              ],
          
              currentCategory:'全部種類'
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
        
      addToWish(book){

        const existingWish = this.wish.find(
          item => item.name === book.name
        );

        if(existingWish){
          return alert('已加入過');
        }

        this.wish.push(book);

        localStorage.setItem(
          'wish',
          JSON.stringify(this.wish)
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
        filterBooks(){
      
        return this.products.filter(book => {

        // 分類條件
        const matchCategory =
        this.currentCategory === '全部種類'
          ||
        book.category === this.currentCategory

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

Vue.createApp(app).mount("#app");



const imgDots = document.querySelectorAll('.dot');

imgDots.forEach(dot => {
  dot.addEventListener('click', () => {

    const index = dot.dataset.index;


    const wrapper = document.querySelector(
      '.carousel_img-wrapper'
    );
    
    wrapper.style.transform =
      `translateX(-${index * 100}%)`;

  });
});

