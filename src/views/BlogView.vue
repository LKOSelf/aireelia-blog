<template>
  <d-row :wrap="true" :gutter="10">
    <d-col :span="24" class="card" v-for="name in blogList" :key="name">
      <h1>{{ name }}</h1>
      <p>这里是 {{ name }} 的简介。</p>
    </d-col>
  </d-row>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { Row } from 'vue-devui'
const blogList = ref([])

onMounted(async () => {
  const res = await fetch('/src/assets/blogList.json')
  blogList.value = await res.json()
})
</script>
<style scoped>

</style>
