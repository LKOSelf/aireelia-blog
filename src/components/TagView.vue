<template>
  <d-row>
    <d-col>
      <h1>标签</h1>
    </d-col>
    <d-col>
      <span v-for="tag in blogList.tags" :key="tag">{{ tag }}</span>
    </d-col>
  </d-row>

</template>

<script setup>
import { ref, onMounted } from 'vue'
const blogList = ref([])

onMounted(async () => {
  const res = await fetch('/src/data/blogList.json')
  blogList.value = await res.json()
})
</script>
