<script setup>

</script>

<template>
  <d-row >
    <d-col :span="8">
      <h1>Aireelia</h1>
      <p class="welcome">欢迎来到我的的个人空间！</p>
      <img src="/src/assets/scroll_1.gif" alt="" style="position: fixed;bottom: 50px;right: 50px">
    </d-col>
    
  </d-row>
</template>

<style scoped>
.welcome{
  animation-direction: reverse;
  animation-name: fadeIn;
  animation-duration: 3s;
}

@keyframes fadeIn {
  from {
    margin-right: 100vw;
    width: 300%;
  }
  to {
    margin-left: 0%;
    width: 100%;
  }
}
</style>