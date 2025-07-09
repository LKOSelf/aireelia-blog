<template>  
    <d-menu width="256px" mode="vertical" >
        <d-menu-item v-for="item in mdDir" :key="item">
            <h1>{{ item.name }}</h1>
        </d-menu-item>
    </d-menu>
</template>
<script setup>
import { ref,onMounted } from 'vue';

const mdDir = ref([]); 
onMounted(async () => {
    const res = await fetch('/src/data/noteInfo.json')
    mdDir.value = await res.json()
})
</script>