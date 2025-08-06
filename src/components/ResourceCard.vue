<template>
  <div class="bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105">
    <div class="text-3xl font-bold mb-1 text-indigo-500">{{ title }}</div>
    <div class="text-gray-600 mb-4">{{ description }}</div>
    <div class="flex justify-center">
      <a 
        :href="link" 
        class="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-full font-medium transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        前往查看
      </a>
    </div>
    <div class="mt-2 text-sm text-gray-500 flex items-center justify-center">
      <span class="mr-2">{{ icon }}</span>
      <span>热门资源</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResourceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
