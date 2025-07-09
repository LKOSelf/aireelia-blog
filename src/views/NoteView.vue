<template>
    <d-row class="bg">
        <d-col :span="24">
        <d-tabs v-model="id">
        <d-tab id="tab1" title="📝笔记">
            <div style="display: flex;">
            <d-card class="card-note" v-for="item in noteDir" :key="item" 
              @click="goDetail(item.dirname)"
                style="cursor:pointer">
                <img src="../assets/1299626.jpg" alt="" height="200px" width="150px" />
                <h4>{{ item.dirname }}</h4>
            </d-card>
            </div>
            </d-tab>
            <d-tab id="tab2" title="📕书籍">
            <p>Tab2 Content</p>
            </d-tab>
            <d-tab id="tab3" title="🤔思维导图">
            <d-card class="card-note" v-for="item in noteDir" :key="item">
                <img src="../assets/1299626.jpg" alt="" height="200px" width="150px" />
                <h4>title</h4>
            </d-card>
            </d-tab>
        </d-tabs>
        </d-col>
    </d-row>
</template>
<script setup>
import { ref,onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const noteDir = ref([]); 
onMounted(async () => {
  const res = await fetch('/src/data/noteInfo.json')
  noteDir.value = await res.json()
})
console.log(noteDir.value);
// 默认显示tab1
const id = ref('tab1');

// 跳转到详情页
function goDetail(dirname) {
  router.push({ name: 'NoteDetail', params: { dirname } })
}
</script>
<style scoped>
    .bg{
        background-image: linear-gradient(
        to right top,
        rgba(231,229,230,0.7),
        rgba(226,224,225,0.7),
        rgba(220,220,220,0.7),
        rgba(215,215,215,0.7),
        rgba(210,210,210,0.7),
        rgba(204,204,204,0.7),
        rgba(198,198,198,0.7),
        rgba(192,192,192,0.7),
        rgba(184,184,184,0.7),
        rgba(176,176,176,0.7),
        rgba(169,169,169,0.7),
        rgba(161,161,161,0.7)
    );
        width: 70vw;
        min-height: 85vh;
        margin: 0 auto;
        border-radius: 10px;
    }
</style>