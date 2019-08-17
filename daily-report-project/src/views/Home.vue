<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Conponents/>
  </div>
</template>

<script>
// @은 /src의 별칭이다.
import HelloWorld from '@/components/conponents1.vue'
import Conponents from '@/components/conponents2.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Conponents
  }
}
</script>
