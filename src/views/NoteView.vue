<template>
    <div class="bg">
    <d-row>
        <d-col :span="24">
        <d-tabs v-model="id">
        <d-tab id="tab1" title="笔记">
            <p>Tab1 Content</p>
            </d-tab>
            <d-tab id="tab2" title="书籍">
            <p>Tab2 Content</p>
            </d-tab>
            <d-tab id="tab3" title="思维导图">
            <p>Tab3 Content</p>
            </d-tab>
        </d-tabs>
        </d-col>
    </d-row>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const id = ref('tab1');
</script>
<style scoped>
    .bg{
        background-color: #000000;
        width: 80vw;
        margin: 0 auto;
    }
</style>