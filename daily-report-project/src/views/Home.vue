<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Conponents/>
    <Conponents3 />
  </div>
</template>

<script>
// @은 /src의 별칭이다.
import HelloWorld from '@/components/conponents1.vue'
import Conponents from '@/components/conponents2.vue';
import Conponents3 from '@/components/conponents3.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Conponents,
    Conponents3
  }
}
</script>
