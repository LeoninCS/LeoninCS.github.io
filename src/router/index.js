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
import Article7 from '../components/Article/Article7.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage 
  },
  {
    path: '/MainPage',
    name: 'ArticlesLayout',
    component: MainPage, 
    children: [
      {
        path: '', 
        name: 'DefaultArticle',
        component: DefaultArticleView
      },
      {
        path: 'article1',  
        name: 'Article1',
        component: Article1
      },
      {
        path: 'article2',  
        name: 'Article2',
        component: Article2
      },
      {
        path: 'article3',  
        name: 'Article3',
        component: Article3
      },
      {
        path: 'article4',  
        name: 'Article4',
        component: Article4
      },
      {
        path: 'article5',  
        name: 'Article5',
        component: Article5
      },
      {
        path: 'article6',  
        name: 'Article6',
        component: Article6
      },
      {
        path: 'article7',  
        name: 'Article7',
        component: Article7
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(), // 使用 Hash 模式，适合大多数部署环境
  routes
});

export default router;


