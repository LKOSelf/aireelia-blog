<script setup>
import { RouterView, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import NavigationView from './components/NavigationView.vue'

const router = useRouter()
const isHeaderVisible = ref(true)

// 监听路由变化
watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    // 在landing page上隐藏header，在其他页面显示
    isHeaderVisible.value = newPath !== '/'
    
    // 如果跳转到landing page，重置滚动位置
    if (newPath === '/') {
      window.scrollTo(0, 0)
    }
  },
  { immediate: true } // 立即执行一次
)
</script>

<template>
  <Transition name="fade">
    <header v-show="isHeaderVisible" class="header">
      <NavigationView />
    </header>
  </Transition>
  <div class="router-view-container">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  scroll-behavior: smooth; /* 添加平滑滚动效果 */
}

#app {
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
}

/* 确保路由视图占满整个屏幕 */
.router-view-container {
  min-height: 100vh;
}

/* 页面过渡效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Header样式 */
.header {
  position: fixed;
  top: 0;
  right: 5vh;
  z-index: 1000;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 0 0 10px 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.header:hover {
  background-color: rgba(255, 255, 255, 0.95);
}
</style>