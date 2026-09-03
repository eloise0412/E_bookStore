const app = {

    data() {
        return {

            // 渲染從 id 進來的書
            book: {},

            isLoading: true

        }
    },

    methods: {

        returnBtn() {
            window.history.back();
        },


        // 電子書 API 呼叫及 loading
        async getBook() {

            this.isLoading = true;

            try {

                const params = new URLSearchParams(location.search);
                const id = params.get("id");

                // 自動取得目前網頁的主機位置
                const API_URL = `http://${location.hostname}:3000`;

                const res = await axios.get(
                    `${API_URL}/books`
                );

                this.book = res.data.find(
                    item => item.id == id
                );


                // 模擬讀取時間
                await new Promise(resolve =>
                    setTimeout(resolve, 1000)
                );

            } catch (error) {
                console.error(error);
            } finally {
                this.isLoading = false;
            }
        }
    },


    mounted() {
        this.getBook();
    }
}

Vue.createApp(app).mount('#app');