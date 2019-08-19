<template>
  <div>
    <h1>부모 데이터: {{ msg }}</h1>
    <props :msg="msg"/>
    <h2>{{ author }}</h2>
    <p>age: {{age * 2}}</p>
    <p v-html="article"></p>
    <p>{{seen ? 'Yes' : 'no'}}</p>
  </div>
</template>

<script>
import Props from '@/components/9.props.vue';
export default {
  name: 'HelloWorld',
  components: {
    Props
  },
  data(){
    return {
      msg: '반갑습니다.',
      author: 'boot',
      age: 30,
      article : `
        <strong>Hellow</strong> World!!
      `,
      seen: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
