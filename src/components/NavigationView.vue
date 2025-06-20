<template>
    <d-menu mode="horizontal" class="nav">
    <!--logo-->
    <img class="logo-devui" style="width: 14px;" src="/public/aireelia_blue_logo.png" alt="" />
    <!--menu-->
    <d-menu-item key="/">
      <template #icon>
        <i class="icon-homepage"></i>
      </template>
      主页
    </d-menu-item>
    <d-menu-item key="/blog"> 
       <template #icon>
        <i class="icon-book"></i>
      </template>
      博客 </d-menu-item>
    <d-menu-item key="/note"> 
       <template #icon>
        <i class="icon-edit-3"></i>
      </template>
      笔记 </d-menu-item>
    <d-menu-item key="/tags"> 
       <template #icon>
        <i class="icon-tag"></i>
      </template>
      标签 </d-menu-item>
    <d-menu-item key="/feedback"> 
      <template #icon>
        <i class="icon-bug"></i>
      </template>
      反馈 </d-menu-item>
  </d-menu>
</template>

<script setup>

</script>

<style scoped>
.nav{
  text-align: center;
  max-width: 500px;
  border-radius: 0 0 10px 10px;
  
}
</style>