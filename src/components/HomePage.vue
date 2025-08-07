<template>
    <div id = "main">
        <div id = "top">
             <div id="topleft">
                <p id = "title">源 选 集</p>
                <p class = "content">一 个 充 满 宝 藏 资 源</p>
                <p class = "content">的 分 享 网 站 ！</p>
             </div>
             <div id = "topright">
                <img src="/public/images/icon.png" id = "img"></img>   
             </div>
                
        </div>
        
        
        <div id = "bottom">
            <button id = "b1" @click="goMainPage">进入网站</button>
            <button id = "b2">关于我</button>
        </div>
        
    </div>
</template>


<script>
    export default {
        methods: {
            goMainPage() {
                this.$router.push('/main')
            }
        }
    }
</script>

<style scoped>
    #main {
        margin-top: 10vh; /* 调整为视口高度单位 */
        margin-left: 26.6vw; /* 计算比例：350px/2560px */
        margin-right: 5.47vw; /* 140px/2560px */
        height: 48.61vh; /* 700px/1440px */
        width: 60.94vw; /* 1560px/2560px (原1300px+左右边距350px+140px) */
    }
    #top {
        display: inline-block;
        width: 100%;
    }
    #topleft {
        vertical-align: top;
        display: inline-block;
        width: 55%;
    }
    #topright {
        display: inline-block;
        height: 27.78vh; /* 400px/1440px */
        width: 15.63vw; /* 400px/2560px */
    }
    #img {
        height: 21.83vh; /* 300px/1440px */
        width: 11.80vw; /* 300px/2560px */
        margin-left: 3.91vw; /* 100px/2560px */
        margin-top: 6.94vh; /* 100px/1440px */
        border-radius: 2.47vw; /* 89px/2560px */
    }

    #title {
        color: aqua;
        font-size: 3.125vw; /* 80px/2560px */
        font-weight: 1000;
    }
    .content {
        color: azure;
        font-size: 3.125vw; /* 80px/2560px */
        font-weight: 1000;
        margin-top: -5.78vh; /* -80px/1440px */
    }
    #bottom {
        display: inline;
        float: left;
        margin-top: 0;
        width: 100%;
        margin-top: 2vh; /* 增加垂直间距 */
    }
    #b1 {
        height: 6.56vh; /* 80px/1440px */
        width: 9.38vw; /* 240px/2560px */
        background-color: dodgerblue;
        font-size: 1.56vw; /* 40px/2560px */
        font-weight: 800;
        border-radius: 1.95vw; /* 50px/2560px */
        margin-left: 0;
        border: #1e40af;
        cursor: pointer;
    }
    #b2 {
        height: 6.56vh; /* 80px/1440px */
        width: 6.64vw; /* 170px/2560px */
        background-color: rgb(238, 233, 233);
        font-size: 1.56vw; /* 40px/2560px */
        font-weight: 800;
        border-radius: 1.95vw; /* 50px/2560px */
        margin-left: 1.56vw; /* 40px/2560px */
        border: rgb(238, 233, 233);
        cursor: pointer;
    }
    #b1:hover {
        color: dodgerblue;
        background-color: #1e40af;
        transform: scale(1.05);
        transition: all 0.2s;
    }
    #b2:hover {
        background-color: #b9b7b7;
        color: #666;
        transform: scale(1.05);
        transition: all 0.2s;
    }
    @media screen and (max-width: 768px) {
    #main {
        margin: 5vh auto;
        width: 90vw;
        height: auto;
    }

    #top {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #topleft {
        width: 100%;
        text-align: center;
    }

    #topright {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        margin-top: 2vh;
    }

    #img {
        width: 40vw;
        height: auto;
        margin: 0;
        border-radius: 50%;
    }

    #title {
        font-size: 6vw;
    }

    .content {
        font-size: 5vw;
        margin-top: 1vh;
    }

    #bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4vh;
    }

    #b1, #b2 {
        width: 55vw;
        height: 6vh;
        font-size: 4vw;
        border-radius: 10vw;
        margin-top: 2vh;
    }
}
    @media screen and (max-width: 430px) {
    #main {
        margin: 4vh auto;
        width: 94vw;
        height: auto;
    }

    #top {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #topleft {
        width: 100%;
        text-align: center;
    }

    #topright {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 2vh;
    }

    #img {
        width: 30vw;
        height: 30vw;
        border-radius: 50%;
        margin: 0;
    }

    #title {
        font-size: 7vw;
    }

    .content {
        font-size: 5.5vw;
        margin-top: 1.5vh;
    }

    #bottom {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 4vh;
    }

    #b1, #b2 {
        width: 80vw;
        height: 6vh;
        font-size: 4.5vw;
        margin-top: 2vh;
        border-radius: 4vw;
    }
}

</style>
