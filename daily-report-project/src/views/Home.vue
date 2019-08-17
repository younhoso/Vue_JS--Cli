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
import HelloWorld from '@/components/conponents.vue'
import Conponents from '@/components/show+bind.vue';
import Conponents3 from '@/components/class+style.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
    Conponents,
    Conponents3
  }
}
</script>
