<template>
  <div class="article-content-container">
    <h2>关于本站</h2>
    <p>大家好，这是一个资源分享站！</p>
    
    <h3>网站介绍</h3>
    <p>
      你好！欢迎驻足，资源整合站——这是为所有「热爱学习、深耕技术、热衷探索工具与新知」的同路人打造的一站式资源聚合平台。
    </p>
    <p>
      在这里，你能找到系统的技术学习路径、高效的工具清单、优质的开源项目与实战教程，覆盖从入门到进阶的全阶段需求。
    </p>
    <p>
      无论你是编程新手、职场开发者，还是追求效率的终身学习者，都能快速定位到适配自己的资源。
    </p>
    <p>
      更重要的是，这是一个开源共建的平台！如果你有私藏的好用工具、宝藏教程或优质项目，**非常欢迎通过贡献代码或提交建议参与进来**，让我们一起把这里打造成「人人分享、人人受益」的技术资源库。
    </p>
    <p>
      探索资源，连接同好，让技术成长之路少走弯路，更有方向 ✨
    </p>
    
    <h3>网站内容概览</h3>
    <ul>
      <li>
        <strong>1. 计算机自学资料</strong> <br />
        包含编程基础、Web 开发、AI 与机器学习、系统与网络、数据库、工具与开发环境等领域的学习资源。<br />
        提供图文教程、视频链接、书籍推荐、实战项目示例。<br />
        目标是帮助每一个学习者找到适合自己的学习路径。
      </li>

      <li>
        <strong>2. 各类免费工具</strong> <br />
        收集并整理了数十款免费的开发工具、设计工具、生产力工具等。<br />
        按类别划分，如代码编辑器、IDE、界面设计工具、数据分析工具、系统工具等。<br />
        提供工具的使用说明、下载链接以及使用场景推荐。
      </li>

      <li>
        <strong>3. 免费资源分享</strong> <br />
        包含开源项目、GitHub 优质代码库、免费图标、字体、素材、模板等。<br />
        帮助你快速搭建项目、提升设计效果、节省开发成本。<br />
        所有资源都来源于开源社区和可信来源，确保安全可用。
      </li>
    </ul>
    
    <h3>为什么选择这个网站？</h3>
    <ul>
      <li>
        <strong>内容全面</strong>: 涵盖从初学者到进阶者的各种资源。
      </li>
      <li>
        <strong>更新及时</strong>: 我将持续收集最新、最实用的资源并发布。
      </li>
      <li>
        <strong>免费开放</strong>: 所有资源均为免费提供，只要你愿意学习和使用。
      </li>
      <li>
        <strong>极简设计</strong>: 界面清爽、易于导航，专注于内容本身。
      </li>
    </ul>
    
    <h3>我的愿景</h3>
    <p>
      我希望这个网站能成为每一位开发者、设计师、技术爱好者的好帮手。
    </p>
    <p>
      通过整理和分享优质资源，减少大家在寻找资料上的时间成本，让更多人能够更高效地成长。
    </p>
    
    <h3>欢迎反馈与建议</h3>
    <p>
      如果你对我的网站有任何建议、希望看到更多内容，或者发现了资源链接失效、内容不准确等情况，欢迎通过以下方式联系我：
    </p>
    <ul>
      <li>
        <strong>作者QQ：</strong>
        <a href="mailto:2329988157@qq.com" target="_blank">2329988157</a>
      </li>
      <li>
        <strong>GitHub 仓库 Issue：</strong>
        <a href="https://github.com/LeoninCS/LeoninCS.github.io/issues" target="_blank">LeoninCS.github.io GitHub Issues</a>
      </li>
      <li>
        <strong>邮箱：</strong>
        <a href="mailto:2329988157@qq.com" target="_blank">2329988157@qq.com</a>
      </li>
    </ul>
    
    <h3>项目技术栈</h3>
    <ul>
      <li>
        <strong>前端：</strong> Vue.js + Vite + Tailwind CSS
      </li>
      <li>
        <strong>部署：</strong> GitHub Pages + GitHub Actions
      </li>
      <li>
        <strong>开源：</strong> 使用开源组件和模块，保持轻量高效
      </li>
    </ul>
    
    <h3>最后提醒</h3>
    <p>
      本网站不提供任何 <strong>商用授权</strong> 或 <strong>版权文件</strong>，<br />
      所有资源均为 <strong>免费开源项目</strong> 或公共领域资源，<br />
      使用时请遵守开源协议和版权规范。
    </p>
  </div>
</template>

<script>
export default {
  name: 'Article0'
};
</script>

<style scoped>
.article-content-container {
  width: 100%;
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px; /* 更清晰的内边距 */
  box-sizing: border-box;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  line-height: 1.6;
  color: #333;
}

.article-content-container h2 {
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 16px;
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
}

.article-content-container h3 {
  font-size: 1.5rem;
  color: #34495e;
  margin-top: 20px;
  margin-bottom: 10px;
}

.article-content-container p {
  font-size: 1rem;
  margin-bottom: 12px;
  text-align: justify;
  color: #444;
}

.article-content-container ul {
  list-style-type: disc;
  padding-left: 25px;
  margin-bottom: 16px;
}

.article-content-container li {
  font-size: 1rem;
  margin-bottom: 8px;
}

.article-content-container a {
  color: #4CAF50;
  text-decoration: none;
}

.article-content-container a:hover {
  color: #45a049;
  text-decoration: underline;
}

/* 可选：图片样式 */
.article-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 20px auto 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
</style>
