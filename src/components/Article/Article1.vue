print("""<template>
  <div class="article-content-container">
    <h2>文章 1：Vue 基础入门</h2>
    <p>
      Vue.js 是一款流行的渐进式 JavaScript 框架，用于构建用户界面。它易于学习，同时足够强大，可以处理复杂的单页应用。
    </p>
    <h3>核心概念</h3>
    <ul>
      <li>**声明式渲染：** Vue 使用基于 HTML 的模板语法将 DOM 绑定到组件实例的数据。</li>
      <li>**组件系统：** 允许您将应用程序拆分为小型、独立和可复用的组件。</li>
      <li>**响应式数据：** Vue 会自动追踪您的数据更改，并更新 DOM。</li>
    </ul>
    <h3>生命周期钩子</h3>
    <p>
      Vue 组件在创建、挂载、更新和销毁时会触发一系列的生命周期钩子函数，允许开发者在特定阶段执行代码，例如：
    </p>
    <ul>
      <li>`beforeCreate` / `created`</li>
      <li>`beforeMount` / `mounted`</li>
      <li>`beforeUpdate` / `updated`</li>
      <li>`beforeUnmount` / `unmounted`</li>
    </ul>
    <p>
      通过理解这些基础知识，您可以更好地构建和维护您的 Vue 应用程序。
    </p>
    <img src="https://via.placeholder.com/700x450?text=Vue+Basics+Illustration" alt="Vue Basics Diagram" class="article-image">
    <p>
        更多详细内容，请参考 <a href="https://cn.vuejs.org/guide/introduction.html" target="_blank">Vue.js 官方文档</a>。
    </p>
  </div>
</template>

<script>
export default {
  name: 'Article1'
};
</script>

<style scoped>
.article-content-container {
  width: 100%;
  max-width: 60vw; /* 限制文章内容的最大宽度，使其在主区域内良好排版 */
  margin: 0 auto;
  padding: 1.388vh 0.781vw; /* 20px 20px */
  box-sizing: border-box;
  background-color: #ffffff;
  border-radius: 0.39vw; /* 10px */
  box-shadow: 0 0.078vw 0.39vw rgba(0, 0, 0, 0.05); /* 0 2px 10px */
  line-height: 1.6;
  color: #333;
}

.article-content-container h2 {
  font-size: 1.5rem; /* 24px */
  color: #2c3e50;
  margin-bottom: 0.694vh; /* 10px */
  border-bottom: 0.039vw solid #eee; /* 1px */
  padding-bottom: 0.694vh; /* 10px */
}

.article-content-container h3 {
  font-size: 1.25rem; /* 20px */
  color: #34495e;
  margin-top: 1.388vh; /* 20px */
  margin-bottom: 0.694vh; /* 10px */
}

.article-content-container p {
  font-size: 1rem; /* 16px */
  margin-bottom: 0.833vh; /* 12px */
  text-align: justify;
}

.article-content-container ul {
  list-style-type: disc;
  padding-left: 1.5625vw; /* 40px */
  margin-bottom: 0.833vh; /* 12px */
}

.article-content-container li {
  font-size: 1rem; /* 16px */
  margin-bottom: 0.347vh; /* 5px */
}

.article-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 1.388vh auto 1.388vh; /* 20px auto 20px */
  border-radius: 0.39vw; /* 10px */
  box-shadow: 0 0.195vw 0.781vw rgba(0, 0, 0, 0.1); /* 0 5px 20px */
}

.article-content-container a {
    color: #4CAF50;
    text-decoration: none;
}

.article-content-container a:hover {
    text-decoration: underline;
}
</style>
""")

