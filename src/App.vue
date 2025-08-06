<template>
  <!-- 单一根元素包裹HomePage组件 -->
  <div>
    <HomePage />
  </div>
</template>

<script>
// 导入HomePage组件
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  // 注册组件
  components: {
    HomePage
  }
}
</script>

<style>
/* 可选：添加全局样式 */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
