<script setup>
import { RouterView, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import NavigationView from './components/NavigationView.vue'

</script>

<template>
  <d-layout>
    <d-header class="dheader">
      <NavigationView />
    </d-header>
    <d-content class="dcontent">    
      <RouterView>
      </RouterView>
    </d-content>
    <d-footer class="dfooter">Footer</d-footer>
  </d-layout>
</template>
