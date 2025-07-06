<template>
  <d-row>
    <d-col>
      <h1>标签</h1>
    </d-col>
    <d-col>
      <span v-for="tag in tagList" :key="tag">{{ tag.tags }}</span>
    </d-col>
  </d-row>

</template>

<script setup>
import { ref, onMounted } from 'vue'
const tagList = ref([])

onMounted(async () => {
  const res = await fetch('/src/data/blogInfo.json')
  tagList.value = await res.json()
})
console.log(tagList)
</script>
