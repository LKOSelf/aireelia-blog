<script setup>

</script>

<template>
  <img src="/src/assets/fv.webp" alt="" class="back-img">
  <d-row class="docs-devui-row">
      <d-col :span="24">
        <p style="height: 25vh;"></p>
      </d-col>
  </d-row>
  <div class="rolling">Welcome to my blog！</div>
  <img src="/src/assets/scroll_1.gif" alt="" style="position: absolute;right: 0%;bottom: 0%;">
</template>

<style scoped>
.rolling {
  animation-name: rolling;
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  font-family: var(--var-font-art);
  font-size: 80px;
  opacity: 0.5;
  will-change: transform;
}
.back-img{
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 88%;
  max-height: 88%;
  width: auto;
  height: auto;
  object-fit: contain;
  z-index: -1;
}
@keyframes rolling {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>