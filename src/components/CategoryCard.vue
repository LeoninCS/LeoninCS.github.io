<template>
  <a 
    :href="link" 
    class="block bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-sm hover:shadow-md transition-all p-6 border border-indigo-100"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 class="text-xl font-semibold text-indigo-800 mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-4">{{ description }}</p>
    <div class="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
      浏览资源 <span class="ml-1">→</span>
    </div>
  </a>
</template>

<script>
export default {
  name: 'CategoryCard',
  props: {
    // 分类标题
    title: {
      type: String,
      required: true
    },
    // 分类描述
    description: {
      type: String,
      required: true
    },
    // 跳转链接
    link: {
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