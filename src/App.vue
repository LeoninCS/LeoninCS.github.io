<template>
  <Head />
  <!-- 路由出口：所有匹配的组件将在这里渲染 -->
  <router-view />
</template>

<script setup>
import Head from './components/Head.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>