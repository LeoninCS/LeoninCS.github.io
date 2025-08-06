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
        margin-top: 7%;
        margin-left: 25%;
        margin-right: 10%;
        height: 700px;
        width: 1300px;
        
    }
    #top{
        display: inline-block;
    }
    #topleft{
        vertical-align: top;
        display: inline-block;
    }
    #topright{
        display: inline-block;
        height: 400px;
        width: 400px;
    }
    #img {
        height: 300px;
        width: 300px;
        margin-left: 100px;
        border-radius: 50px;
        margin-top: 100px;
    }

    #title {
        color:aqua;
        font-size: 80px;
        font-weight: 1000;
        
    }
    .content {
        color: azure;
        font-size: 80px;
        font-weight: 1000;
        margin-top: -80px;
    }
    #bottom {
        display: inline;
        float: left;
        margin-top: 0px;
    }
    #b1 {
        height: 80px;
        width: 240px;
        background-color: dodgerblue;
        font-size: 40px;
        font-weight: 800;
        border-radius: 50px;
        margin-left: 0px;
        border: #1e40af;
        cursor: pointer;
    }
    #b2 {
        height: 80px;
        width: 170px;
        background-color: rgb(238, 233, 233);
        font-size: 40px;
        font-weight: 800;
        border-radius: 50px;
        margin-left: 40px;
        border: rgb(238, 233, 233);
        cursor: pointer;
    }
    /* 正确写法：#b1:hover */
    #b1:hover {
        color: dodgerblue;
        background-color: #1e40af; /* 加深蓝色 */
        transform: scale(1.05); /* 轻微放大 */
        transition: all 0.2s; /* 过渡动画 */
    }
    #b2:hover {
        background-color: #b9b7b7; /* 加深灰色 */
        color: #666; /* 文字颜色稍暗 */
        transform: scale(1.05); /* 轻微放大 */
        transition: all 0.2s; /* 过渡动画 */
    }
</style>
