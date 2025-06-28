<template>
  <h1>标签</h1>
  <ul>
    <li v-for="tag in tags" :key="tag">{{ tag }}</li>
  </ul>
</template>
