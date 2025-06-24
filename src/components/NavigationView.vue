<template>
    <d-menu mode="horizontal" class="nav">
    <d-menu-item key="/feedback"> 
      <template #icon>
        <i class="icon-bug"></i>
      </template>
      反馈 </d-menu-item>
      <d-menu-item key="/tags"> 
       <template #icon>
        <i class="icon-tag"></i>
      </template>
      标签 </d-menu-item>
    <d-menu-item key="/note"> 
       <template #icon>
        <i class="icon-edit-3"></i>
      </template>
      笔记 </d-menu-item>
    <d-menu-item key="/blog"> 
       <template #icon>
        <i class="icon-book"></i>
      </template>
      博客 </d-menu-item>
    <d-menu-item key="/">
      <template #icon>
        <i class="icon-homepage"></i> 
      </template>
      主页
    </d-menu-item>
    <div style="flex: 100px;text-align: left; z-index: 10;">AIREELIA</div>
    </d-menu>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleMenuSelect = (key) => {
  router.push(key);
};
</script>

<style scoped>
.nav{
  margin: 0 30px;
  text-align: center;
  height: 70px;
  font-size: 30px;
  background-color: transparent;
  flex-direction: row-reverse; 
}
.logo {
  
}
</style>