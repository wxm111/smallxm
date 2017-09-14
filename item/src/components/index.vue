<template>
  <div id="app">
    <div class="wrap">
      <!-- to 前要加冒号，否则当成字符串解析这个对象了 加上冒号才变成一个数据，动态的数据name不加/   path 加/-->
      <router-link :to="{name:'question',params:{step:1},query:{type:'1'}}">
        <div class="f-like"></div>
      </router-link>
      <router-link :to="{name:'question',params:{step:1},query:{type:'0'}}">
        <div class="f-wenke"></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  background: url("../imgs/bg.jpg") no-repeat center center;
  background-size: cover;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrap {
  width: 85%;
  height: 84%;
  background: url("../imgs/home-pepole.png") no-repeat center top;
  margin: 0 auto;
  background-size: 100% 100%;
  position: relative;
}

.f-like,
.f-wenke {
  width: 30%;
  height: 120px;
  position: absolute;
}

.f-like {
  background: url("../imgs/f-like.png") no-repeat center top;
  background-size: contain !important;
  left: 14%;
  top: 57%;
  animation: Scale 2s linear infinite;
}

.f-wenke {
  top: 55%;
  background: url("../imgs/f-wenke.png") no-repeat center top;
  background-size: contain !important;
  right: 5%;
  animation: Scale 2s linear infinite;
}

@keyframes Scale {
  0% {
    transform: scale(1);
    opacity: .7;
  }
  50% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: .7;
  }
}
</style>
