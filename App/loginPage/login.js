const app = {
    data() {
        return {
            email: "",
            password: "",
        }},


        methods:{
            login() {

                if (!this.email) {
            
                    alert("請輸入 Email");
                    return;
            
                }
            
                if (!this.password) {
            
                    alert("請輸入密碼");
                    return;
            
                }
            
                localStorage.setItem("isLogin", "true");
            
                location.href = "../audioPage/audioIndex/index.html";
            
            }
        },
    
    
    
    }
    Vue.createApp(app).mount('#app')