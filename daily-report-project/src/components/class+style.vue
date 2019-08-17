<template>
  <div class="hello">
      <!-- class도 블리언 값에 의해서 넣었다 뺐다 할수 있다. -->
      <p :class="{active: isActive}">isActive</p>
      
       <!-- style도 변수로 저장해서 넣을수 있다. -->
      <p :style="{color: textColor}">스타일 바인드</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
        isActive: false,
        textColor: 'red'
    }
  }
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
