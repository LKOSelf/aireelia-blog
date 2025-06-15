<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 打字机效果相关变量
const textLines = [
  "欢迎来到我的博客",
  "愿这里的每个字句",
  "都能与你共鸣！"
];
const displayedText = ref('');
const typingComplete = ref(false); // 新增：标记打字是否完成
let currentLineIndex = 0;
let currentCharIndex = 0;

function typeText() {
  // 如果还有行要处理
  if (currentLineIndex < textLines.length) {
    const currentLine = textLines[currentLineIndex];
    
    // 如果当前行还有字符要添加
    if (currentCharIndex < currentLine.length) {
      displayedText.value += currentLine[currentCharIndex];
      currentCharIndex++;
      setTimeout(typeText, 100); // 调整时间来改变打字速度
    } 
    // 当前行完成，准备下一行
    else {
      currentLineIndex++;
      currentCharIndex = 0;
      
      // 如果还有更多行，添加换行符
      if (currentLineIndex < textLines.length) {
        displayedText.value += "<br>";
        setTimeout(typeText, 300); // 行之间稍微暂停一下
      } else {
        // 所有文本都已打印完成
        setTimeout(() => {
          typingComplete.value = true; // 设置打字完成标志
        }, 500); // 最后一个字符后稍微延迟一下再隐藏光标
      }
    }
  }
}

// 处理鼠标滚轮事件
const handleWheel = (event) => {
  // 如果是向下滚动
  if (event.deltaY > 0) {
    router.push('/home')
  }
}

onMounted(() => {
  // 启动打字机效果
  typeText();
  
  // 添加鼠标滚轮事件监听
  document.addEventListener('wheel', handleWheel)
  
  // 添加触摸事件支持（针对移动设备）
  let touchStartY = 0
  
  const handleTouchStart = (e) => {
    touchStartY = e.touches[0].clientY
  }
  
  const handleTouchMove = (e) => {
    const touchEndY = e.touches[0].clientY
    const deltaY = touchStartY - touchEndY
    
    // 如果向下滑动超过50px
    if (deltaY > 50) {
      router.push('/home')
    }
    
    touchStartY = touchEndY
  }
  
  document.addEventListener('touchstart', handleTouchStart)
  document.addEventListener('touchmove', handleTouchMove)
  
  // 组件卸载时清理事件监听
  return () => {
    document.removeEventListener('wheel', handleWheel)
    document.removeEventListener('touchstart', handleTouchStart)
    document.removeEventListener('touchmove', handleTouchMove)
  }
})
</script>

<template>
  <div class="landing-page">
    <div class="background-animation">
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
      <div class="floating-element"></div>
    </div>
    <div class="content">
      <h1 style="font-size: 5vw;">Aireelia</h1>
      <h2>学无止境</h2>
      <p class="typing-text" :class="{ 'typing-complete': typingComplete }" v-html="displayedText"></p>
      <div style="position: fixed; bottom: 40px; left: 0; right: 0; text-align: center;" class="animate__animated animate__backInUp">
        <p style="margin-bottom: 20px;">滚动滑轮进入博客首页</p>
        <i class="icon-chevron-down-2 bounce-arrow" style="font-size: 50px;"></i>
      </div>
      <div class="scroll-indicator">

      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  background-size: 400% 400%;
  animation: gradientAnimation 15s ease infinite;
  color: white;
  text-align: center;
  overflow: hidden; /* 防止出现滚动条 */
  position: fixed; /* 固定位置 */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.background-animation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.floating-element {
  position: absolute;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 50%;
  pointer-events: none;
}

.floating-element:nth-child(1) {
  width: 80px;
  height: 80px;
  left: 10%;
  top: 20%;
  animation: float 15s infinite ease-in-out;
}

.floating-element:nth-child(2) {
  width: 120px;
  height: 120px;
  left: 70%;
  top: 10%;
  animation: float 18s infinite ease-in-out reverse;
}

.floating-element:nth-child(3) {
  width: 60px;
  height: 60px;
  left: 30%;
  top: 70%;
  animation: float 12s infinite ease-in-out 2s;
}

.floating-element:nth-child(4) {
  width: 100px;
  height: 100px;
  left: 80%;
  top: 60%;
  animation: float 20s infinite ease-in-out 1s;
}

.floating-element:nth-child(5) {
  width: 50px;
  height: 50px;
  left: 50%;
  top: 40%;
  animation: float 16s infinite ease-in-out 3s;
}

.content {
  padding: 20px;
  opacity: 0;
  animation: fadeIn 1s ease forwards;
  position: relative;
  z-index: 1; /* 确保内容在浮动元素之上 */
}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
  font-weight: 700;
  transform: translateY(20px);
  animation: slideUp 1s ease forwards;
}

p {
  font-size: 1.2em;
  margin-bottom: 40px;
  opacity: 0;
  transform: translateY(20px);
  animation: slideUp 1s ease forwards 0.3s;
}

.typing-text {
  font-size: 1.2em;
  margin-bottom: 40px;
  opacity: 1;
  line-height: 1.6;
  min-height: 4.8em; /* 为三行文本预留空间 */
  position: relative;
  animation: fadeIn 1s ease forwards 0.3s;
}

.typing-text::after {
  content: '|';
  position: relative;
  display: inline-block;
  color: white;
  animation: blink 1s step-end infinite;
}

/* 打字完成后隐藏光标 */
.typing-complete::after {
  content: '';
  display: none;
}

.scroll-indicator {
  margin-top: 50px;
  opacity: 0;
  animation: fadeIn 1s ease forwards 0.6s;
}

.bounce-arrow {
  display: inline-block;
  animation: floatArrow 1.5s ease-in-out infinite;
}

@keyframes floatArrow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}

.arrow {
  font-size: 2em;
  animation: bounce 2s infinite;
  display: inline-block;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes float {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  25% {
    transform: translate(10px, -15px) rotate(5deg);
  }
  50% {
    transform: translate(-5px, 20px) rotate(-5deg);
  }
  75% {
    transform: translate(-15px, -10px) rotate(3deg);
  }
  100% {
    transform: translate(0, 0) rotate(0deg);
  }
}
</style>