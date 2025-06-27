<template>
  <main>
  <d-row :wrap="true" :gutter="10">
    <d-col :span="24" class="card animate__bounceIn" v-for="name in blogList" :key="name">
      <h1>
        <img src="/public/icon-park--pin.svg" height="26px"></img>
        {{ name }}
      </h1>
      <p>这里是 {{ name }} 的简介。</p>
    </d-col>
  </d-row>
  </main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const blogList = ref([])

onMounted(async () => {
  const res = await fetch('/src/assets/blogList.json')
  blogList.value = await res.json()
})
</script>
<style scoped>
 
 main{
  width: 30vw;
  margin: 0 auto;
 }
 
h1{
  border-bottom: 2px solid;
}

img{
  transform: scaleX(-1);
}
</style>
