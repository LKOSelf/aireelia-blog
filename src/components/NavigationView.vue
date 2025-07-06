<template>
  <d-menu mode="horizontal" class="nav" router>
    <div class="search-area" @mouseenter="showSearch = true" @mouseleave="showSearch = false" style="display:inline-block;vertical-align:middle;">
      <template v-if="showSearch">
        <d-search icon-position="left" no-border style="width: 200px" autofocus />
      </template>
      <template v-else>
        <button class="search-icon-btn" style="background:none;border:none;cursor:pointer;margin-right:10px;">
          <i class="icon-search"></i>
        </button>
      </template>
    </div>
    <d-menu-item key="/tags"> 
      <template #icon>
        <i class="icon-tag"></i>
      </template>
      标签
    </d-menu-item>
    <d-menu-item key="/note"> 
      <template #icon>
        <i class="icon-book"></i>
        
      </template>
      知识库
    </d-menu-item>
    <d-menu-item key="/blog"> 
      <template #icon>
        <i class="icon-edit-3"></i>
      </template>
      博客
    </d-menu-item>
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
import { ref } from 'vue'
const showSearch = ref(false)
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
.search-icon-btn {
  position: relative;
  font-size: 22px;
  vertical-align: middle;
  outline: none;
  top: -10px;
}
.search-area {
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
}
</style>