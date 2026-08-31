const app = {

  data(){

    return{

      progress:0,            //撥放器從0秒開始
      isPlaying:false,

      bookChapters:[],       //章節傳入

      currentChapterIndex:0,  //audioBook.js

      book:{},  //currentBook的資料

      cart:
      JSON.parse(
        localStorage.getItem('cart')
      ) || [],

    }
  },

  methods:{

    returnBtn(){
      location.href =
      `../../../detail.html?id=${this.book.id}`;
    },

    toggleAudio(){

      const audio = 
      this.$refs.audio;       /*get element byID*/

      if(!this.isPlaying){

        audio.play();

        this.isPlaying = true;

      }else{

        audio.pause();

        this.isPlaying = false;

      }

    },

    changeProgress(){                    //撥放器

      const audio = this.$refs.audio;  /*get element byID*/

      audio.currentTime =
        audio.duration * (this.progress / 100); 


  },
  formatTime(seconds){                    //播放器顯示的時間

    const minutes =
      Math.floor(seconds / 60);

    const remainSeconds =
      Math.floor(seconds % 60);

    return `${minutes}:${
      remainSeconds.toString().padStart(2,'0')
    }`;

},

 
  changeChapter(time,index){
    
    this.currentChapterIndex = index;
    this.$refs.audio.currentTime = time;  //取得撥放秒數
    this.$refs.audio.play();
    this.isPlaying = true;

    },

    nextChapter(){

      if(
          this.currentChapterIndex <   //取得當前撥放位置 
          this.bookChapters.length - 1
      ){
  
          this.currentChapterIndex++;   //下一章節
  
      }
  
      const chapter =
        this.bookChapters[              //audioBook.js
        this.currentChapterIndex       
        ];
  
      this.$refs.audio.currentTime =    //點到多少秒數就從那裏開始
        chapter.start;


        this.$refs.audio.play();     //切到下一張後 還要繼續撥放
        this.isPlaying = true;
  
  },

  prevChapter(){

    if(this.currentChapterIndex > 0){

        this.currentChapterIndex--;

    }

    const chapter =
      this.bookChapters[
      this.currentChapterIndex
      ];

    this.$refs.audio.currentTime =
      chapter.start;

      this.$refs.audio.play();
      this.isPlaying = true;
},


},
mounted(){

  const audio =
  this.$refs.audio;

  audio.addEventListener(
    'timeupdate',
    ()=>{

      if(audio.duration){           //總長度

        this.progress =
        (audio.currentTime /
        audio.duration) * 100;

      }

    }
  );


    const bookArticle =
    JSON.parse(
      localStorage.getItem('currentBook')  //取得撥放列表的文章 audioBook的資料
    );

    this.bookChapters =
      audioBooks[bookArticle.id];  //去找一個叫做 products 的變數，然後取它的 id。




this.book = bookArticle;     //currentBook audioIndex的資料 data有book容器卻不知道裝誰，所以必須將bookArticle塞入this.book裡

  this.bookChapters =        // const bookArticle 的變數只有在 mounted 裡可以使用必須存入data的book裡
    audioBooks[bookArticle.id];

},

}

Vue.createApp(app).mount('#app');
