<template>
<main>
  <TagView />
  <d-row :wrap="true">
    <d-col :span="24" v-for="item in blogList" :key="item">
      <d-card class="card animate__bounceIn" @click="() => { console.log(name) }" style="cursor: pointer;">
        <h1>
          <img src="/public/icon-park--pin.svg" height="26px" />
          {{ item.title }}
        </h1>
        <h3>作者:{{ item.author }}</h3>
        <p> {{ item.description }}</p>
        <div class="info">
          <span><i class="icon-edit-3"></i>修改日期：{{ item.date }}</span>
          <span><i class="icon-view-2"></i>访问人数：{{  }}</span>
        </div>
        <d-tag class="tag" v-for="tag in item.tags" type="primary" color="#2f2f2b" size="sm">{{ tag }}</d-tag>
      </d-card>
    </d-col>
  </d-row>
</main>
</template>
<script setup>
import TagView from '@/components/TagView.vue'
import { ref, onMounted } from 'vue'
const blogList = ref([])

onMounted(async () => {
  const res = await fetch('/src/data/blogInfo.json')
  blogList.value = await res.json()
})
</script>
<style scoped>
 .info{
  display: flex;
   flex-direction: row-reverse; 
   border-bottom:1px dashed #2f2f2b;
   position: relative;
   top: 45%;
   span {
     margin-left: 10px;
   }
 }

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

.tag{
position: relative;
top: 50%;
margin-left: 5px;
opacity: 0.5;
}
</style>
