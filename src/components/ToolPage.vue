<template>
  <div class="main-page-container">
    <!-- 左侧侧边栏：文章导航 -->
    <aside class="sidebar" :class="{ collapsed: isCollapsed }">
      <h2 @click="goToDefault">文章导航</h2>
      <ul>
        <li><router-link to="/tree">作者说</router-link></li>
      </ul>
    </aside>

    <!-- 控制侧边栏开关按钮 -->
    <button class="toggle-btn" @click="toggleSidebar">
      {{ isCollapsed ? '▶' : '◀' }}
    </button>

    <!-- 右侧主内容区域 -->
    <main class="content-area" :style="mainContentStyle">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'ToolPage',
  data() {
    return {
      isCollapsed: false
    };
  },
  computed: {
    mainContentStyle() {
      return {
        marginLeft: this.isCollapsed ? '3.125vw' : '10.9375vw',
        width: this.isCollapsed
          ? 'calc(100vw - 3.125vw)'
          : 'calc(100vw - 10.9375vw)'
      };
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    goToDefault() {
        this.$router.push('/ToolPage');
    }
  }
};
</script>

<style scoped>
/* 主布局容器 */
.main-page-container {
  display: flex;
  height: 95.5vh;
  width: 100vw;
  overflow: hidden;
  top: 4.5vh;
}

/* 左侧侧边栏样式 */
.sidebar {
  width: 10.9375vw;
  height: 95.5vh;
  background-color: #2c3e50;
  box-shadow: 0.078vw 0 0.234vw rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  flex-shrink: 0;
  position: fixed;
  top: 4.5vh;
  left: 0;
  z-index: 100;
  padding-top: 0vh;
  padding-bottom: 1.388vh;
  color: #ecf0f1;
  transition: width 0.3s ease;
}

.sidebar h2 {
  color: #4caf50;
  text-align: center;
  margin-bottom: 1.388vh;
  font-size: 1.5rem;
  padding: 0 0.781vw;
  letter-spacing: 0.0195vw;
  cursor: pointer;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 0.555vh;
}

.sidebar a {
  display: block;
  color: #ecf0f1;
  text-decoration: none;
  padding: 0.833vh 1.171vw;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-left: 0.195vw solid transparent;
  font-size: 1rem;
  font-weight: 500;
}

.sidebar a:hover,
.sidebar a.router-link-active {
  background-color: #34495e;
  border-left-color: #4caf50;
  color: #ffffff;
}

/* 折叠状态样式 */
.sidebar.collapsed {
  width: 3.125vw;
}

.sidebar.collapsed h2,
.sidebar.collapsed ul {
  display: none;
}

/* 控制按钮样式 */
.toggle-btn {
  position: fixed;
  top: 46vh;
  left: 11vw;
  width: 1vw;
  height: 6vh;
  transform: translateX(-50%);
  z-index: 200;
  background-color:#364d64;
  color: white;
  border: none;
  padding: 0.5vh 0.8vw;
  border-radius: 5px 5px 5px 5px;
  cursor: pointer;
  transition: left 0.3s ease;
  font-size: 1rem;
}

.sidebar.collapsed ~ .toggle-btn {
  left: 3.125vw;
}

/* 主内容区域样式 */
.content-area {
  height: 100vh;
  overflow-y: auto;
  padding: 2.083vh 1.953vw;
  box-sizing: border-box;
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2.083vh;
  transition: margin-left 0.3s ease, width 0.3s ease;
}
</style>
