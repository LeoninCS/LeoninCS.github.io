<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <div class="container mx-auto px-4 py-8">
      <header class="mb-8">
        <h1 class="text-4xl font-bold text-indigo-600 mb-2">我的资源站</h1>
        <p class="text-lg text-gray-600">分享计算机自学资料、各类免费工具、流行资源</p>
      </header>

      <!-- 资源推荐区 -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">最新资源推荐</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ResourceCard 
            title="深度学习入门" 
            description="包含 PyTorch、TensorFlow 入门教程、代码示例与实战项目。" 
            link="https://example.com/tutorials/deep-learning" 
            icon="🧠"
          />
          <ResourceCard 
            title="免费开发工具" 
            description="整理了 VSCode、Figma、Sublime Text 等一线开发工具。" 
            link="https://example.com/tools" 
            icon="🛠️"
          />
          <ResourceCard 
            title="常用资源库" 
            description="推荐一些 GitHub 上优秀且开源的项目与资源，节省你的查找时间。" 
            link="https://example.com/resources" 
            icon="📦"
          />
        </div>
      </section>

      <!-- 资源分类区 -->
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-gray-700 mb-4">资源分类</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard 
            title="编程学习" 
            description="涵盖前端、后端、数据科学等领域的学习资源。"
            link="https://example.com/categories/编程学习"
          />
          <CategoryCard 
            title="设计工具" 
            description="Figma, Sketch, Adobe XD 等设计资源与工具集合。"
            link="https://example.com/categories/设计工具"
          />
          <CategoryCard 
            title="技术工具" 
            description="包括开发环境配置、部署工具、测试工具等。"
            link="https://example.com/categories/技术工具"
          />
        </div>
      </section>

      <!-- 底部介绍区 -->
      <footer class="text-center py-6">
        <p class="text-gray-500">© 2025 我的资源站 | 所有内容均基于开源社区，免费开放</p>
        <p class="text-sm text-gray-500">欢迎关注我的 GitHub，获取更多资源更新和项目动态</p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style>
/* 可以根据需要自定义 Tailwind 配置 */
</style>
