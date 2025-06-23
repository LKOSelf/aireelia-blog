<script setup>

</script>

<template>
    <d-row class="docs-devui-row">
      <d-col :span="20">
        <img src="/src/assets/fv.webp" alt="" style="width: 60vw; height: auto; position: relative; left: 20%;">
      </d-col>
      <d-col :span="4">
        <img src="/src/assets/scroll_1.gif" alt="" style="width: 15vw;height: auto;position: relative;top: 90%;">
      </d-col>
  </d-row>
  
  <div class="rolling">Welcome to my blog！</div>
</template>

<style scoped>
.rolling {
  animation-name: rolling;
  animation-duration: 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  font-family: var(--var-font-art);
  font-size: 50px;
  opacity: 0.5;
  z-index: -1; 
  display: none;
}
@keyframes rolling {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>