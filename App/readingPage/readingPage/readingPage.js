const app = {
    data() {
      return {
        book: {}
      }
    },
  
    async mounted() {
  
      // 取得網址 id
      const params = new URLSearchParams(location.search);
      const id = Number(params.get("id"));
  
      // 讀取 json
      const res = await fetch("./data/books.json");
      const data = await res.json();
  
      this.products = data;
  
      // 找到對應書籍
      this.book = this.products.find(
        item => item.id === id
      );
  
      console.log(this.book);
    }
  }
  
  Vue.createApp(app).mount("#app");
