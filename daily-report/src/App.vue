<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">conponents</router-link> |
      <router-link to="/show-bind">show+bind</router-link> |
      <router-link to="/class-style">class+style</router-link> | 
      <router-link to="/v-for">v-for</router-link> | 
      <router-link to="/v-on">v-on</router-link> | 
      <router-link to="/method">method</router-link> | 
      <router-link to="/computed">computed</router-link> | 
      <router-link to="/form">form</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
