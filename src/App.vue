<template>
  <HomePage></HomePage>
  <ResourceCard></ResourceCard>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue' // 假设组件路径正确
import HomePage from './components/HomePage.vue';
import ResourceCard from './components/ResourceCard.vue';

export default {
  components: {
    HelloWorld // 注册组件
  }
}
</script>