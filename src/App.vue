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
  <d-layout>
    <d-header class="header">  
      <Transition >
      <NavigationView />
      </Transition>
    </d-header>
    <d-content class="dcontent">    
      <RouterView>
      </RouterView>
    </d-content>
    <d-footer class="dfooter">Footer</d-footer>
  </d-layout>
</template>
