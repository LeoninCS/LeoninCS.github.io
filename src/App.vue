<template>
  <!-- 路由出口：所有匹配的组件将在这里渲染 -->
  <router-view />
</template>

<script>
// 不需要直接导入组件，路由会自动管理
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>