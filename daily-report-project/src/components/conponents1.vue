<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ author }}</h2>
    <p>age: {{age * 2}}</p>
    <p v-html="article"></p>
    <p>{{seen ? 'Yes' : 'no'}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  // props: {
  //   msg: String
  // }
}
</script>

<!-- "scoped"는 해당 component에만 제안적으로 적용이 된다. -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
