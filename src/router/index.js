// src/router/index.js
import { createRouter, createWebHashHistory } from 'vue-router';

// 导入组件
import HomePage from '../components/HomePage.vue';
import MainPage from '../components/MainPage.vue';
import DefaultArticleView from '../components/DefaultArticleView.vue'; // 为 /articles 路径添加默认视图
import Article1 from '../components/Article/Article1.vue';
import Article2 from '../components/Article/Article2.vue';
import Article3 from '../components/Article/Article3.vue';
import Article4 from '../components/Article/Article4.vue';
import Article5 from '../components/Article/Article5.vue';
import Article6 from '../components/Article/Article6.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage // 应用程序的根路径，可以是一个简单的欢迎页或者跳转页
  },
  {
    path: '/MainPage', // 主文章区域的父路径
    name: 'ArticlesLayout',
    component: MainPage, // MainPage 组件将包含侧边栏和 <router-view>
    children: [
      {
        path: '', // 默认子路由，当访问 /articles 时显示
        name: 'DefaultArticle',
        component: DefaultArticleView
      },
      {
        path: 'article1', // 访问路径为 /articles/article1
        name: 'Article1',
        component: Article1
      },
      {
        path: 'article2', // /articles/article2
        name: 'Article2',
        component: Article2
      },
      {
        path: 'article3', // /articles/article3
        name: 'Article3',
        component: Article3
      },
      {
        path: 'article4', // /articles/article4
        name: 'Article4',
        component: Article4
      },
      {
        path: 'article5', // /articles/article5
        name: 'Article5',
        component: Article5
      },
      {
        path: 'article6', // /articles/article6
        name: 'Article6',
        component: Article6
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(), // 使用 Hash 模式，适合大多数部署环境
  routes
});

export default router;


