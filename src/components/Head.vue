<template>
  <div id="main">
    <!-- 左侧 logo 和标题区域 -->
    <div class="left-section">
      <a href="https://leonincs.github.io/#/" target="_self" rel="noopener noreferrer">
        <img src="/public/images/icon.png" alt="Icon" class="logo" />
      </a>
      <span class="title"><a href="https://leonincs.github.io/#/" class="title">源 选 集</a></span>
    </div>
    <!-- 中间导航区域 -->
    <nav class="nav-section">
      <ul class="nav-list">
        <li class="nav-item" @click="goMainPage"><a href="#">学习资源</a></li>
        <li class="nav-item"><a href="#">免费工具</a></li>
        <li class="nav-item"><a href="#">媒体资源</a></li>
        <li class="nav-item"><a href="#">匿名树洞</a></li>
        <li class="nav-item"><a href="#">关于本站</a></li>
      </ul>
    </nav>
    <!-- 右侧搜索和其他功能区域 -->
    <div class="right-section">
      <a href="https://github.com/LeoninCS/LeoninCS.github.io" target="_blank" rel="noopener noreferrer">
        <img src="/public/github.png" alt="GitHub Logo" class="logo" />
      </a>
      <button class="icon-btn" title="更多">
        ☰
      </button>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
#main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #202126;
  color: #fff;
  padding: 0 1vw;
  height: 4.5vh;
  box-shadow: 0 0.2vh 0.8vh rgba(0,0,0,0.2);
}

.left-section {
  display: flex;
  align-items: center;
  margin-top: 0,5vh;
  margin-left: 0vw;
}

.logo {
  width: 1.4vw;
  height: 2.5vh;
  margin-right:1vh;
  border-radius: 10vh;
}

.title {
  font-weight: bold;
  color: white;
  margin-left: 0.2vw;
  font-size: 0.9vw;
  transition: color 0.2s ease;
  text-decoration: none;
}

.nav-section {
  display: flex;
  align-items: center;
  margin-left: -15.5vw;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin: 0 1.5vw;
}

.nav-item a {
  color: #fff;
  text-decoration: none;
  font-size: 0.8vw;
  font-weight: 550;
  transition: color 0.2s ease;
}

.nav-item a:hover {
  color: #409eff; /*  hover 时变色，可自定义 */
}

.right-section {
  display: flex;
  align-items: center;
  margin-right: 7vw;
}

.logo {
  width: 1.56vw; /* 约40px (2560×0.0156≈40) */
  height: 2.78vh; /* 约40px (1440×0.0278≈40) */
  margin-right: 0.31vw; /* 约8px */
  transition: transform 0.2s ease;
  cursor: pointer;
}

.logo:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

/* 图标按钮样式 - 基于2560×1440屏幕优化 */
.icon-btn {
  background-color: transparent;
  border: none;
  color: #e0e0e0;
  width: 1.56vw; /* 约40px */
  height: 2.78vh; /* 约40px */
  font-size: 1.74vh; /* 约25px */
  margin: 0 0.23vw; /* 约6px */
  border-radius: 0.8vw; /* 约6px */
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:hover {
  color: #409eff;
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-0.07vh); /* 约1px */
}

.icon-btn:active {
  transform: translateY(0);
}
.title:hover {
    color: #409eff;
}



.search-box input {
  background-color: #303239;
  border: 1px solid #444;
  color: #fff;
  padding: 0.3vw 0.5vw;
  border-radius: 0.3vh;
  font-size: 1vh;
}

.search-box .shortcut {
  color: #bbb;
  margin-left: 0.3vw;
  font-size: 0.5vh;
}

</style>