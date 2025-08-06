<template>
  <a 
    :href="link" 
    class="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
    target="_blank"
    rel="noopener noreferrer"
  >
    <div class="text-3xl mb-4">{{ icon }}</div>
    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
    <div class="mt-4 text-indigo-600 font-medium flex items-center">
      查看详情 →
    </div>
  </a>
</template>

<script>
export default {
  name: 'ResourceCard',
  props: {
    // 卡片标题
    title: {
      type: String,
      required: true
    },
    // 卡片描述
    description: {
      type: String,
      required: true
    },
    // 跳转链接
    link: {
      type: String,
      required: true
    },
    // 图标（Emoji）
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
a:hover {
  transform: translateY(-2px);
  transition: transform 0.2s ease;
}
</style>